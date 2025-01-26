import { Button, FileInput } from "flowbite-react";
import Footer from "../../Components/Footer/footer";
import Nav from "../../Components/Navbar/Nav";
import NavAdmin from "./components/NavAdmin";
import FormGroup, { FormFeedback } from "../../Components/Form/FormGroup";
import Input from "../../Components/Form/Input";
import Textarea from "../../Components/Form/Textarea";
import { Link, useNavigate } from "react-router-dom";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { usePost } from "../../Components/Hooks/usePost";
import { useParams } from "react-router-dom";
import useGet from "../../Components/Hooks/useGet";
import { URL_BE } from "../../utils/axios";
import { usePut } from "../../Hooks/usePut";

export default function TutorForm() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("/assets/images/user.webp");
  const navigate = useNavigate();
  const { id } = useParams();

  const portfolio = useGet("portfolio_tutor", {
    key_data: "portfolio",
    hit_first: false,
  });

  useEffect(() => {
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [image]);

  const save_tutor = usePost("portfolio_tutor", {
    method: "form-data",
    auth: true,
  });

  const update_tutor = usePut("portfolio_tutor", {
    method: "form-data",
    auth: true,
  });

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      namaDepan: "",
      namaBelakang: "",
      short_description: "",
      title: "",
      description: "",
      video: "",
    },
    validationSchema: Yup.object({
      namaDepan: Yup.string().required("Nama depan wajib diisi."),
      namaBelakang: Yup.string().required("Nama belakang wajib diisi."),
      short_description: Yup.string().required(
        "Deskripsi singkat wajib diisi.",
      ),
      title: Yup.string().required("Judul wajib diisi."),
      description: Yup.string().required("Deskripsi wajib diisi."),
      video: Yup.string().required("Video wajib diisi."),
    }),
    onSubmit: async (values) => {
      try {
        if (!id) {
          if (!image) {
            toast.error("Foto tutor wajib diisi");
            return;
          }
        }

        const formData = new FormData();

        Object.keys(values).map((key, i) => {
          formData.append(key, values[key]);
        });

        if (image) {
          formData.append("image", image);
        }

        let res;
        if (!id) {
          res = await save_tutor.saveData(formData);
        } else {
          formData.append("id", id);
          res = await update_tutor.updateData(formData);
        }

        if (res.status) {
          toast.success(
            `Portfolio tutor berhasil ${id ? "diubah" : "ditambahkan"}.`,
          );
          navigate("/admin/portfolio_tutor");
          return;
        }
      } catch (err) {
        return;
      }
    },
  });

  useEffect(() => {
    const getting_update = async () => {
      const res = await portfolio.fetchData({
        id: id,
      });

      validation.setFieldValue("namaDepan", res.data.namaDepan);
      validation.setFieldValue("namaBelakang", res.data.namaBelakang);
      validation.setFieldValue("short_description", res.data.short_description);
      validation.setFieldValue("title", res.data.title);
      validation.setFieldValue("description", res.data.description);
      validation.setFieldValue("video", res.data.video);
      setPreview(`${URL_BE}/uploads/${res.data.image || ""}`);
    };
    if (id !== undefined) {
      getting_update();
    }
  }, []);

  return (
    <>
      <div className="flex flex-col gap-5">
        <Nav />
        <div className="container mx-auto mt-32 px-3 ">
          <NavAdmin />
          <div className="flex flex-col gap-5">
            <h3 className="text-center text-4xl font-medium font-[ClashDisplay]">
              Form Portfolio Tutor
            </h3>

            <div className="w-full">
              <div className="bg-white border rounded-2xl p-8 mt-8">
                <FormikProvider value={validation}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return;
                    }}
                  >
                    <div className="flex gap-10 md:flex-nowrap flex-wrap">
                      <div className="flex flex-col gap-3">
                        <div className="w-full">
                          <img
                            src={preview}
                            className="object-cover max-h-[500px] w-[400px]"
                            alt=""
                          />
                        </div>
                        <FileInput
                          onChange={(e) => {
                            if (e.target.files) {
                              setImage(e.target.files[0]);
                            } else {
                              setImage(null);
                              setPreview("/assets/images/user.webp");
                            }
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <div className="flex flex-col gap-5">
                          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                            <FormGroup>
                              <FormGroup.Label>Nama Depan</FormGroup.Label>
                              <Input
                                name="namaDepan"
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
                            <FormGroup>
                              <FormGroup.Label>Nama Belakang</FormGroup.Label>
                              <Input
                                name="namaBelakang"
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
                          <FormGroup>
                            <FormGroup.Label>Deskripsi Singkat</FormGroup.Label>
                            <Input
                              name="short_description"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.short_description || ""}
                              invalid={
                                validation.touched.short_description &&
                                validation.errors.short_description
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.short_description &&
                            validation.errors.short_description ? (
                              <FormFeedback>
                                {validation.errors.short_description}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                          <FormGroup>
                            <FormGroup.Label>Judul</FormGroup.Label>
                            <Input
                              name="title"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.title || ""}
                              invalid={
                                validation.touched.title &&
                                validation.errors.title
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.title &&
                            validation.errors.title ? (
                              <FormFeedback>
                                {validation.errors.title}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                          <FormGroup>
                            <FormGroup.Label>Deskripsi</FormGroup.Label>
                            <Textarea
                              name="description"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.description || ""}
                              invalid={
                                validation.touched.description &&
                                validation.errors.description
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.description &&
                            validation.errors.description ? (
                              <FormFeedback>
                                {validation.errors.description}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                          <FormGroup>
                            <FormGroup.Label>Video</FormGroup.Label>
                            <Input
                              placeholder="Masukan id youtube disini..."
                              name="video"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.video || ""}
                              invalid={
                                validation.touched.video &&
                                validation.errors.video
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.video &&
                            validation.errors.video ? (
                              <FormFeedback>
                                {validation.errors.video}
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                          <div className="flex justify-end gap-3">
                            <Link to={"/admin/portfolio_tutor"}>
                              <Button className="bg-slate-300 text-black">
                                Kembali
                              </Button>
                            </Link>
                            <Button
                              color={"failure"}
                              disabled={save_tutor.loading}
                              type="submit"
                            >
                              {id ? "Edit" : "Simpan"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </FormikProvider>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-64">
          <Footer />
        </div>
      </div>
    </>
  );
}
