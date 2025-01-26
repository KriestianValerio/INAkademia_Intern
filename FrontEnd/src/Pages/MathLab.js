import React, { useState, useEffect } from 'react';
import Nav from '../Components/Navbar/Nav';
import MathLabImg from '../Assets/MathLab.png';
import { FormikProvider, useFormik } from "formik";
import { Button } from "flowbite-react";
import * as Yup from "yup";
import { usePost } from "../Hooks/usePost";
import { toast } from "react-toastify";
import moment from "moment";
import FormGroup, { FormFeedback } from "../Components/Form/FormGroup";
import Input from "../Components/Form/Input";
import { Label } from 'flowbite-react';
import Cookies from 'js-cookie';
import { getApi } from '../utils/api';
import { useGetUserInfo } from './middleware';
import axios from 'axios';
import MathLabTandC from '../Components/MathLabTandC';
import Footer from '../Components/Footer/footer';
import PDFPengecualianBiaya from '../Assets/PengecualianBiaya.pdf'

function MathLab() {
    const token = Cookies.get('inakademia_user'); 
    const [user, setUser] = useGetUserInfo();
    const [showPopup, setShowPopup] = useState(true);
    
    const getUserDetails = async () => {
        try {
            if (token !== undefined){
                const userDetail = await getApi({
                    url: "user/detail",
                    params: {},
                    auth: true,
                })
                if (userDetail.status === 200){
                    const userData = userDetail.data.data;
                    setUser(userData);
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUserDetails();
    }, []);

    const save_reg = usePost("mathlab", {
        method: "form-data",
        auth: true,
    });

    const validationSchema = Yup.object().shape({
        MateriFavorit: Yup.string().required("This field is required"),
        PernahIkutInAkademia: Yup.string().required("This field is required"),
        YangPernahDiikuti: Yup.array().of(Yup.string()),
        Publikasi: Yup.array().of(Yup.string()),
        Alasan: Yup.string().required("This field is required"),
        Harapan: Yup.string().required("This field is required"),
        Pertanyaan: Yup.string(),
        PretestTime: Yup.string().required("This field is required"),
        PengecualianBiaya: Yup.boolean(),
        TandC: Yup.boolean().oneOf([true], "Mohon baca dan setujui syarat & ketentuan"),
        Esai: Yup.string().when("PengecualianBiaya", { 
            is: true, 
            then: Yup.string().required("Bagi yang mendaftarkan diri untuk pengecualian biaya, wajib mengisi bagian esai").min(100, "Esai minimal 100 kata!"), 
            otherwise: Yup.string(), 
        }),
    });

    const validation = useFormik({
        initialValues: {
            Nama: user.namaDepan + " " + user.namaBelakang,
            AsalSekolah: user.asalSekolah,
            Email: user.email,
            WaktuPendaftaran: "",
            MateriFavorit: "",
            PernahIkutInAkademia: "",
            YangPernahDiikuti: [],
            Publikasi: [],
            PublikasiLainnya: "",
            Alasan: "",
            Harapan: "",
            Pertanyaan: "",
            PretestTime: "",
            PengecualianBiaya: false,
            TandC: false,
            Esai: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                // console.log(user);
                validation.values.WaktuPendaftaran = moment(new Date()).format("DD:MM:YYYY");
                const response = await axios.post('http://localhost:5001/api/mathlab', values, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (response.status === 200) {
                    toast.success("Registration Accepted");
                    if (validation.values.PretestTime === "24 Januari 2025") window.location.href = "https://chat.whatsapp.com/JmlH2uWNGHWIZbJx44a62e";
                    else if (validation.values.PretestTime === "25 Januari 2025") window.location.href = "https://chat.whatsapp.com/B8oUOqUoKhOEdpsmoCw9hE";
                    else if (validation.values.PretestTime === "26 Januari 2025") window.location.href = "https://chat.whatsapp.com/EwAvn2SAXHhDifIg6xzuJd";
                }
            } catch (err) {
                // console.error("Form submission error:", err);
                if (err.response && err.response.status === 555) {
                    toast.error("Anda sudah melakukan pendaftaran!");
                } else {
                    toast.error("Failed to submit the form.");
                }
            }
        },
    });

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        if (checked) {
            validation.setFieldValue(name, [...validation.values[name], value]);
        } else {
            validation.setFieldValue(name, validation.values[name].filter((v) => v !== value));
        }
    };

    const handleInputBlur = (e) => {
        const { name, value } = e.target;
        if (value && !validation.values[name].includes(value)) {
            validation.setFieldValue(name, [...validation.values[name], value]);
        }
    };

    return (
        <div>
            <Nav osisl/>
            {showPopup && <MathLabTandC onClose={() => setShowPopup(false)} />}
            <div className='mt-[70px] lg:mt-[84px]'>
                <img src={MathLabImg} />
                <div className='font-[ClashDisplay] text-center mt-[20px] lg:text-[70px] text-[40px]'>Sign Up for MathLab!</div>
                <div className="bg-[#d9d9d9] p-10 rounded-3xl lg:w-[60%] w-[80%] mx-auto">
                    <FormikProvider value={validation}>
                        <form
                            action=""
                            className="flex flex-col gap-5"
                            onSubmit={(e) => {
                                e.preventDefault();
                                validation.handleSubmit();
                                return;
                            }}
                        >
                            <FormGroup>
                                <div className="text-left">
                                    <p>Materi Pelajaran Matematika Favorit</p>
                                </div>
                                <Input
                                    placeholder={"Contoh: Baris dan Deret"}
                                    name="MateriFavorit"
                                    type="text"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.MateriFavorit}
                                />
                                {validation.touched.MateriFavorit && validation.errors.MateriFavorit ? (
                                    <FormFeedback>{validation.errors.MateriFavorit}</FormFeedback>
                                ) : null}
                            </FormGroup>
                            <FormGroup>
                                <div className="text-left">
                                    <p>Apakah Anda pernah mengikuti program dari INAkademia sebelumnya?</p>
                                </div>
                                <div className="flex flex-row gap-10 mt-2">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="PernahIkutInAkademia"
                                            value="Pernah"
                                            checked={validation.values.PernahIkutInAkademia === "Pernah"}
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                        />
                                        <Label htmlFor="PernahIkutInAkademiaPernah">Pernah</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="PernahIkutInAkademia"
                                            value="Tidak Pernah"
                                            checked={validation.values.PernahIkutInAkademia === "Tidak Pernah"}
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                        />
                                        <Label htmlFor="PernahIkutInAkademiaTidakPernah">Tidak Pernah</Label>
                                    </div>
                                </div>
                                {validation.touched.PernahIkutInAkademia && validation.errors.PernahIkutInAkademia ? (
                                    <FormFeedback>{validation.errors.PernahIkutInAkademia}</FormFeedback>
                                ) : null}
                            </FormGroup>
                            {validation.values.PernahIkutInAkademia === "Pernah" ? (
                                <FormGroup>
                                    <div className="text-left">
                                        <p>*Jika pernah, program apa yang pernah Anda ikuti?</p>
                                    </div>
                                    <div className="flex flex-row gap-10 mt-2">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                id="YangPernahDiikuti"
                                                name="YangPernahDiikuti"
                                                value="P2P"
                                                checked={validation.values.YangPernahDiikuti.includes("P2P")}
                                                onChange={handleCheckboxChange}
                                                onBlur={validation.handleBlur}
                                            />
                                            <Label htmlFor="YangPernahDiikuti">P2P</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                id="YangPernahDiikuti"
                                                name="YangPernahDiikuti"
                                                value="Summer Bridge"
                                                checked={validation.values.YangPernahDiikuti.includes("Summer Bridge")}
                                                onChange={handleCheckboxChange}
                                                onBlur={validation.handleBlur}
                                            />
                                            <Label htmlFor="YangPernahDiikuti">Summer Bridge</Label>
                                        </div>
                                    </div>
                                </FormGroup>
                            ) : ''}
                            <FormGroup>
                                <div className="text-left">
                                    <p>Dari mana Anda mengetahui program MathLab?</p>
                                </div>
                                <div className="flex flex-col gap-2 mt-2">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            id="Publikasi"
                                            name="Publikasi"
                                            value="Instagram"
                                            checked={validation.values.Publikasi.includes("Instagram")}
                                            onChange={handleCheckboxChange}
                                            onBlur={validation.handleBlur}
                                        />
                                        <Label htmlFor="Publikasi">Instagram</Label>
                                    </div>
                                    <Input
                                        placeholder={"Lainnya"}
                                        name="PublikasiLainnya"
                                        type="text"
                                        onChange={validation.handleChange}
                                        onBlur={handleInputBlur}
                                        value={validation.values.PublikasiLainnya}
                                    />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <div className="text-left">
                                    <p>Mengapa Anda tertarik untuk mendaftar di program MathLab?</p>
                                </div>
                                <Input
                                    placeholder={""}
                                    name="Alasan"
                                    type="text"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.Alasan}
                                />
                                {validation.touched.Alasan && validation.errors.Alasan ? (
                                    <FormFeedback>{validation.errors.Alasan}</FormFeedback>
                                ) : null}
                            </FormGroup>
                            <FormGroup>
                                <div className="text-left">
                                    <p>Apa yang Anda harapkan dari program ini?</p>
                                </div>
                                <Input
                                    placeholder={""}
                                    name="Harapan"
                                    type="text"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.Harapan}
                                />
                                {validation.touched.Harapan && validation.errors.Harapan ? (
                                    <FormFeedback>{validation.errors.Harapan}</FormFeedback>
                                ) : null}
                            </FormGroup>
                            <FormGroup>
                                <div className="text-left">
                                    <p>Apakah ada yang ingin Anda sampaikan atau pertanyaan yang ingin diajukan?</p>
                                </div>
                                <Input
                                    placeholder={""}
                                    name="Pertanyaan"
                                    type="text"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.Pertanyaan}
                                />
                            </FormGroup>
                            <FormGroup>
                                <div className="text-left">
                                    <p>Tanggal Pre-test yang ingin diikuti</p>
                                </div>
                                <div className="flex flex-col gap-2 mt-2">
                                    <div className="flex items-center gap-2">
                                        <input
                                        // type="radio"
                                        // name="PernahIkutInAkademia"
                                        // value="Tidak Pernah"
                                        // checked={validation.values.PernahIkutInAkademia === "Tidak Pernah"}
                                        // onChange={validation.handleChange}
                                        // onBlur={validation.handleBlur}
                                            type="radio"
                                            id="PretestTime"
                                            name="PretestTime"
                                            value="24 Januari 2025"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            checked={validation.values.PretestTime === "24 Januari 2025"}
                                        />
                                        <Label htmlFor="PretestTime">24 Januari 2025</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            id="PretestTime"
                                            name="PretestTime"
                                            value="25 Januari 2025"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            checked={validation.values.PretestTime === "25 Januari 2025"}
                                        />
                                        <Label htmlFor="PretestTime">25 Januari 2025</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            id="PretestTime"
                                            name="PretestTime"
                                            value="26 Januari 2025"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            checked={validation.values.PretestTime === "26 Januari 2025"}
                                        />
                                        <Label htmlFor="PretestTime">26 Januari 2025</Label>
                                    </div>
                                </div>
                                {validation.touched.PretestTime && validation.errors.PretestTime ? (
                                    <FormFeedback>{validation.errors.PretestTime}</FormFeedback>
                                ) : null}
                            </FormGroup>
                            <FormGroup>
                                <div className="flex flex-row gap-2 mt-2">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            id="PengecualianBiaya"
                                            name="PengecualianBiaya"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            checked={validation.values.PengecualianBiaya}
                                        />
                                        <Label htmlFor="PengecualianBiaya" className='flex-col'>
                                            <div>
                                                Centang kotak ini jika Anda ingin mendapatkan pengecualian biaya. Silakan periksa dokumen ini untuk informasi lebih lengkap.
                                            </div>
                                            <a href={PDFPengecualianBiaya} target="_blank" className='cursor'>📝 Pengecualian Biaya.pdf</a>
                                        </Label>
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <div className="flex flex-row gap-2 mt-2">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            id="TandC"
                                            name="TandC"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            checked={validation.values.TandC}
                                        />
                                        <Label htmlFor="TandC" className='flex-col'>
                                            <div className=''>
                                                Saya menyatakan bahwa saya telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku. Dengan ini, saya menerima ketentuan tersebut tanpa keberatan<span className='text-red-500'>*</span>
                                            </div>
                                        </Label>
                                    </div>
                                </div>
                                {validation.touched.TandC && validation.errors.TandC ? (
                                    <FormFeedback>{validation.errors.TandC}</FormFeedback>
                                ) : null}
                            </FormGroup>
                            <FormGroup>
                                <div className="text-left">
                                    <p>Tempat Pengetikan Essai (Jika melakukan permohonan pengecualian biaya)</p>
                                    <p className='text-red-600'>*Esai minimal 100 kata</p>
                                </div>
                                <textarea
                                    placeholder={""}
                                    name="Esai"
                                    type="text"
                                    className="h-[450px] rounded-lg w-full p-2 border-white"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.Esai}
                                />
                                {validation.touched.Esai && validation.errors.Esai ? (
                                    <FormFeedback>{validation.errors.Esai}</FormFeedback>
                                ) : null}
                            </FormGroup>
                            <div>
                                <Button
                                    size={"lg"}
                                    color={"failure"}
                                    pill
                                    className="w-full"
                                    type="submit"
                                    disabled={save_reg.loading}
                                >
                                    Publish
                                </Button>
                            </div>
                        </form>
                    </FormikProvider>
                </div>
            </div>
            <div className='mt-24'></div>
            <Footer />
        </div>
    );
}

export default MathLab;