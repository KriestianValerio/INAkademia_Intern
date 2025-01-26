import { useState } from "react";
import FileDnd from "../../Components/FileDnd";
import FormGroup, { FormFeedback } from "../../Components/Form/FormGroup";
import Input from "../../Components/Form/Input";
import Nav from "../../Components/Navbar/Nav";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "flowbite-react";
import { toast } from "react-toastify";
import { usePost } from "../../Components/Hooks/usePost";

export default function RequestMateri({ materi, id }) {
  const [files, setFiles] = useState([]);

  const request_materi = usePost("request_materi/request", {
    method: "form-data",
    auth: true,
  });

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      judul: "",
      jenjangKelas: "",
      kurikulum: "",
    },
    validationSchema: Yup.object({
      judul: Yup.string().required("Judul Materi wajib diisi."),
      jenjangKelas: Yup.string().required("Jenjang Kelas wajib diisi."),
      kurikulum: Yup.string().required("Kurikulum wajib diisi."),
    }),
    onSubmit: async (values) => {
      try {
        if (files.length === 0) {
          toast.error("Silahkan untuk Unggah Gambar Materi terlebih dahulu.");
          return;
        }

        const file = files[0].file;
        const form = new FormData();
        const new_values = { ...values, gambarMateri: file, id: id };

        Object.keys(new_values).map((el) => {
          form.append(el, new_values[el]);
        });

        const res = await request_materi.saveData(new_values);

        if (res.status) {
          toast.success("Request Materi berhasil dilakukan.");
          setFiles([]);
          validation.resetForm();
          materi.fetchData({
            id: id,
          });
        }

        console.log(values);
      } catch (err) {
        console.log(err);
        return;
      }
    },
  });

  return (
    <>
      <div className="flex justify-center">
        <div
          style={{
            maxWidth: 800,
          }}
          className="max-w-[800px] w-full flex flex-col gap-10"
        >
          <h3 className="text-center text-4xl font-medium font-[ClashDisplay]">
            Request Materimu di Sini!
          </h3>
          <FormikProvider value={validation}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                validation.handleSubmit();
                return;
              }}
            >
              <div
                style={{
                  backgroundColor: "#D9D9D9",
                  paddingLeft: "1.75rem",
                  paddingRight: "1.75rem",
                }}
                className="w-full bg-[#D9D9D9] px-7 py-5 rounded-xl"
              >
                <div style={{ gap: "1.5rem" }} className="flex flex-col gap-6">
                  <FormGroup>
                    <FormGroup.Label>Judul Materi</FormGroup.Label>
                    <Input
                      type="text"
                      name="judul"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.judul || ""}
                      invalid={
                        validation.touched.judul && validation.errors.judul
                          ? true
                          : false
                      }
                    />
                    {validation.touched.judul && validation.errors.judul ? (
                      <FormFeedback>{validation.errors.judul}</FormFeedback>
                    ) : null}
                  </FormGroup>
                  <FormGroup>
                    <FormGroup.Label>Jenjang Kelas</FormGroup.Label>
                    <Input
                      type="text"
                      name="jenjangKelas"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.jenjangKelas || ""}
                      invalid={
                        validation.touched.jenjangKelas &&
                        validation.errors.jenjangKelas
                          ? true
                          : false
                      }
                    />
                    {validation.touched.jenjangKelas &&
                    validation.errors.jenjangKelas ? (
                      <FormFeedback>
                        {validation.errors.jenjangKelas}
                      </FormFeedback>
                    ) : null}
                  </FormGroup>
                  <FormGroup>
                    <FormGroup.Label>Kurikulum</FormGroup.Label>
                    <Input
                      type="text"
                      name="kurikulum"
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.kurikulum || ""}
                      invalid={
                        validation.touched.kurikulum &&
                        validation.errors.kurikulum
                          ? true
                          : false
                      }
                    />
                    {validation.touched.kurikulum &&
                    validation.errors.kurikulum ? (
                      <FormFeedback>{validation.errors.kurikulum}</FormFeedback>
                    ) : null}
                  </FormGroup>
                  <FormGroup>
                    <FormGroup.Label>Unggah Gambar Materi</FormGroup.Label>
                    <FileDnd files={files} setFiles={setFiles} />
                  </FormGroup>

                  <div>
                    <Button
                      type="submit"
                      className="w-full"
                      pill
                      color={"failure"}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </FormikProvider>
        </div>
      </div>
    </>
  );
}
