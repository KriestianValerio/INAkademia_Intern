import React, { useEffect, useState } from "react";

import InakademiaLogo from "../../Assets/INAkademia-Logo.png";
import download_cloud from "../../Assets/download_cloud.png";
import Nav from "../../Components/Navbar/Nav";
import Card from "../../Components/Card/Card";
import FormGroup, { FormFeedback } from "../../Components/Form/FormGroup";
import Input from "../../Components/Form/Input";
import { Alert, Button, Checkbox, Label } from "flowbite-react";
import Footer from "../../Components/Footer/footer";
import FileDnd from "../../Components/FileDnd";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { usePost } from "../../Components/Hooks/usePost";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { createMahasiswa, createSmpSma } from "../../utils/utils";
import Select from "react-select";
import axios from "../../utils/axios";
import { AsyncPaginate } from "react-select-async-paginate";

const SignUp = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState({
    show: false,
    message: "",
  });
  const navigation = useNavigate();
  const arr_smp_sma = createSmpSma();
  const arr_mahasiswa = createMahasiswa();

  const grouped_tingkat = [
    {
      label: "SMP - SMA",
      options: arr_smp_sma,
    },
    {
      label: "Mahasiswa",
      options: arr_mahasiswa,
    },
  ];

  const signup = usePost("student/registration", {
    method: "form-data",
    auth: false,
  });

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      namaDepan: "",
      namaBelakang: "",
      email: "",
      password: "",
      asalSekolah: "",
      tingkat: "",
      asalDaerah: "",
      programDiikuti: [],
      mengetahuiDari: [],
      nomorWa: "",
      termsCondition: false,
    },
    validationSchema: Yup.object({
      namaDepan: Yup.string().required("Nama Depan wajib diisi."),
      namaBelakang: Yup.string().required("Nama Belakang wajib diisi."),
      email: Yup.string().required("Email wajib diisi."),
      password: Yup.string().required("Password wajib diisi."),
      asalSekolah: Yup.string().required("Asal Sekolah wajib diisi."),
      tingkat: Yup.string().required("Tingkat wajib diisi."),
      asalDaerah: Yup.string().required("Asal Daerah wajib diisi."),
      programDiikuti: Yup.array().required("Program Diikuti wajib diisi."),
      mengetahuiDari: Yup.array().required("Mengetahui Dari wajib diisi."),
      nomorWa: Yup.string().required("Nomor Whatsapp wajib diisi."),
      termsCondition: Yup.boolean().required("Terms & Condition wajib diisi."),
    }),
    onSubmit: async (values) => {
      setError({
        show: false,
        message: "",
      });
      try {
        const formData = new FormData();

        if (values.termsCondition === false) {
          toast.error("Permohonan wajib disetujui");
          return;
        }

        if (values.programDiikuti.length === 0) {
          toast.error("Pilih minimal 1 program yang ingin diikuti");
          return;
        }

        if (values.mengetahuiDari.length === 0) {
          toast.error("Saya mengetahui INAkademia wajib diisi")
          return
        }

        if (files.length === 0) {
          toast.error("Bukti Screenshoot wajib diisi.");
          return;
        }

        Object.keys(values).map((el) => {
          formData.append(el, values[el]);
        });

        if (files.length !== 0) {
          formData.append("screenshoot", files[0].file);
        }

        const res = await signup.saveData(formData);

        if (res.status) {
          toast.success("Pendaftaran berhasil dilakukan");
          validation.resetForm();
          navigation("/signin");
        }
      } catch (err) {
        setError({
          show: false,
          message: "",
        });
        return;
      }
    },
  });

  const [asal_sekolah, setAsalSekolah] = useState([]);

  //handle other select
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [otherInput, setOtherInput] = useState(''); // To hold the custom input from the user
  const [isOtherSelected, setIsOtherSelected] = useState(false);

  // Function to handle when the user selects an option
  const handleSelect = (selected) => {
    setSelectedOption(selected);
    
    // If "Other" is selected, reset the custom input field
    if (selected.value === "Other") {
      setIsOtherSelected(true); // Show the "Other" input
      setOtherInput(''); // Reset the custom input field
      validation.setFieldValue("asalSekolah", "Other");
    } else {
      setIsOtherSelected(false); // Hide the "Other" input
      validation.setFieldValue("asalSekolah", selected.value);
    }
  };
  // Function to handle user input when "Other" is selected
  const handleOtherInputChange = (e) => {
    const inputValue = e.target.value;
    setOtherInput(inputValue);
    validation.setFieldValue("asalSekolah", inputValue);
  };

  const loadOptions = async (searchQuery, loadedOptions, { page }) => {
    const response = await axios({
      url: `https://api-sekolah-indonesia.vercel.app/sekolah/s?sekolah=${searchQuery}&page=${page}&perPage=5`,
      method: "GET",
    });

    const options = response.data.dataSekolah.map((el) => {
      return {
        label: `${el.sekolah} (${el.kabupaten_kota})`,
        value: el.sekolah,
      };
    });
  
    // Avoid adding "Other" multiple times
    const hasOther = loadedOptions.some((option) => option.value === "Other");
  
    if (!hasOther) {
      options.unshift({
        label: "Other",
        value: "Other",
      });
    }
  
    return {
      options, // Return the options with "Other" appended only once
      hasMore: response.data.dataSekolah.length >= 1,
      additional: {
        page: searchQuery ? 2 : page + 1,
      },
    };
  };


  useEffect(() => {
    console.log(validation.values);
  }, [validation.values]);

  return (
    <>
      <div className="flex flex-col gap-5">
        <Nav />
        <div className="container mx-auto mt-32 px-3">
          <div className="flex justify-center">
            <div
              style={{
                maxWidth: 800,
              }}
              className="w-full flex flex-col gap-10"
            >
              <h3 className="text-center text-4xl font-medium font-[ClashDisplay]">
                Sign Up
              </h3>

              <FormikProvider value={validation}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
                    return;
                  }}
                >
                  {error.show && (
                    <Alert color={"failure"} className="mb-5">
                      {error.message}
                    </Alert>
                  )}
                  <div
                    style={{
                      backgroundColor: "#D9D9D9",
                      paddingLeft: "1.75rem",
                      paddingRight: "1.75rem",
                    }}
                    className="w-full px-7 py-5 rounded-xl"
                  >
                    <div
                      className="flex flex-col gap-6"
                      style={{ gap: "1.5rem" }}
                    >
                      <div>
                        <label>Nama</label>
                        <div
                          style={{ gap: "1.5rem" }}
                          className="grid gap-6 md:grid-cols-2 grid-cols-1"
                        >
                          <FormGroup>
                            <Input
                              className="bg-white text-black"
                              placeholder={"Nama Depan"}
                              name="namaDepan"
                              type="text"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.namaDepan || ""}
                              invalid={
                                validation.touched.namaDepan &&
                                validation.errors.namaDepan
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.namaDepan &&
                            validation.errors.namaDepan ? (
                              <FormFeedback>
                                {validation.errors.namaDepan}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                          <FormGroup className="self-center">
                            <Input
                              placeholder={"Nama Belakang"}
                              className="bg-white text-black"
                              name="namaBelakang"
                              type="text"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.namaBelakang || ""}
                              invalid={
                                validation.touched.namaBelakang &&
                                validation.errors.namaBelakang
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.namaBelakang &&
                            validation.errors.namaBelakang ? (
                              <FormFeedback>
                                {validation.errors.namaBelakang}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </div>
                      </div>
                      <FormGroup className="">
                        <FormGroup.Label>Email</FormGroup.Label>
                        <Input
                          placeholder={"example@example.com"}
                          className="bg-white text-black"
                          name="email"
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email
                              ? true
                              : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback>{validation.errors.email}</FormFeedback>
                        ) : null}
                      </FormGroup>
                      <FormGroup className="">
                        <FormGroup.Label>Nomor Whatsapp</FormGroup.Label>
                        <Input
                          placeholder={"08xxxxxxxxxx"}
                          className="bg-white text-black"
                          name="nomorWa"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values?.nomorWa || ""}
                          invalid={
                            validation.touched?.nomorWa &&
                            validation.errors?.nomorWa
                              ? true
                              : false
                          }
                        />
                        {validation.touched?.nomorWa &&
                        validation.errors?.nomorWa ? (
                          <FormFeedback>
                            {validation.errors?.nomorWa}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                      <FormGroup className="">
                        <FormGroup.Label>Password</FormGroup.Label>
                        <Input
                          placeholder={"***********"}
                          className="bg-white text-black"
                          type="password"
                          name="password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.password || ""}
                          invalid={
                            validation.touched.password &&
                            validation.errors.password
                              ? true
                              : false
                          }
                        />
                        {validation.touched.password &&
                        validation.errors.password ? (
                          <FormFeedback>
                            {validation.errors.password}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                      <FormGroup className="">
                        <FormGroup.Label>
                          Asal Sekolah/Universitas
                        </FormGroup.Label>
                        <AsyncPaginate
                          loadOptions={loadOptions}
                          isSearchable={true}
                          placeholder="Select School"
                          onChange={handleSelect}
                          additional={{
                            page: 1,
                          }}
                          name="asalSekolah"
                        />

                        {isOtherSelected && (
                              <FormGroup className="">
                                <Input
                                  type="text"
                                  placeholder="Please specify"
                                  value={otherInput}
                                  onChange={handleOtherInputChange}
                                  className="bg-white text-black"
                                />
                              </FormGroup>
                            )}

                        {validation.touched?.asalSekolah &&
                        validation.errors?.asalSekolah ? (
                          <FormFeedback>
                            {validation.errors?.asalSekolah}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                      <FormGroup className="">
                        <FormGroup.Label>Tingkat</FormGroup.Label>
                        <Select
                          options={grouped_tingkat}
                          name="tingkat"
                          onChange={(e) =>
                            validation.setFieldValue("tingkat", e.value)
                          }
                        />

                        {validation.touched?.tingkat &&
                        validation.errors?.tingkat ? (
                          <FormFeedback>
                            {validation.errors?.tingkat}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                      <FormGroup className="">
                        <FormGroup.Label>Asal Daerah</FormGroup.Label>
                        <Input
                          className="bg-white text-black"
                          placeholder={"Kota X, Jawa Barat"}
                          name="asalDaerah"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values?.asalDaerah || ""}
                          invalid={
                            validation.touched?.asalDaerah &&
                            validation.errors?.asalDaerah
                              ? true
                              : false
                          }
                        />
                        {validation.touched?.asalDaerah &&
                        validation.errors?.asalDaerah ? (
                          <FormFeedback>
                            {validation.errors?.asalDaerah}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                      <div className="grid grid-cols-2">
                        <div>
                          <label>Program yang ingin diikuti</label>
                          <div className="flex flex-col gap-2 mt-2">
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                id="p2p"
                                value="P2P"
                                name="programDiikuti"
                                checked={validation.values.programDiikuti.includes(
                                  "P2P",
                                )}
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                              />
                              <Label htmlFor="p2p">P2P</Label>
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                id="community"
                                name="programDiikuti"
                                value="Community"
                                checked={validation.values.programDiikuti.includes(
                                  "Community",
                                )}
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                              />
                              <Label htmlFor="community">Community</Label>
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                id="inaroom"
                                name="programDiikuti"
                                value="INARoom"
                                checked={validation.values.programDiikuti.includes(
                                  "INARoom",
                                )}
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                              />
                              <Label htmlFor="inaroom">INARoom</Label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label>Saya mengetahui INAkademia dari...</label>
                          <div className="flex flex-col gap-2 mt-2">
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                id="sosmed"
                                name="mengetahuiDari"
                                value="Sosial Media"
                                checked={validation.values.mengetahuiDari.includes(
                                  "Sosial Media",
                                )}
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                              />
                              <Label htmlFor="sosmed">Sosial Media</Label>
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                id="teman"
                                name="mengetahuiDari"
                                value="Teman/Kerabat"
                                checked={validation.values.mengetahuiDari.includes(
                                  "Teman/Kerabat",
                                )}
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                              />
                              <Label htmlFor="teman">Teman/Kerabat</Label>
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                id="lainlain"
                                name="mengetahuiDari"
                                value="Lain-lain"
                                checked={validation.values.mengetahuiDari.includes(
                                  "Lain-lain",
                                )}
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                              />
                              <Label htmlFor="lainlain">Lain-lain</Label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="terms"
                          name="termsCondition"
                          checked={validation.values.termsCondition}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                        />
                        <Label htmlFor="terms">
                          Dengan ini saya mengonfirmasi permohonan saya untuk
                          mendapatkan <i>membership</i> di INAkademia{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p>
                          Bukti sudah meng-<i>follow</i> @inakademia.hub dan
                          telah me-<i>repost</i> salah satu postingan kami
                          (Screenshot)
                          <span className="text-red-500">*</span>
                        </p>
                        <div>
                          <FileDnd files={files} setFiles={setFiles} />
                        </div>
                      </div>

                      <div>
                        <Button
                          type="submit"
                          className="w-full"
                          pill
                          color={"failure"}
                          disabled={signup.loading}
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </FormikProvider>
              <div className="text-center">
                <p className="text-lg">
                  Sudah punya akun?{" "}
                  <Link
                    to={"/signin"}
                    className="text-blue-500 font-semibold hover:underline"
                  >
                    Login disini.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SignUp;
