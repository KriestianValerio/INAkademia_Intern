import { useState } from "react";
import FileDnd from "../../Components/FileDnd";
import FormGroup, { FormFeedback } from "../../Components/Form/FormGroup";
import Input from "../../Components/Form/Input";
import Nav from "../../Components/Navbar/Nav";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { usePost } from "../../Components/Hooks/usePost";

export default function SidebarRequestMateri() {
  const [files, setFiles] = useState([]);

  const request_materi = usePost("request_materi/request", {
    method: "form-data",
    auth: true,
  });

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      judul: "",
    },
    validationSchema: Yup.object({
      judul: Yup.string().required("Judul Materi wajib diisi."),
    }),
    onSubmit: async (values) => {
      try {
        if (files.length === 0) {
          toast.error("Silahkan untuk Unggah Gambar Materi terlebih dahulu.");
          return;
        }

        const file = files[0].file;
        const form = new FormData();
        const new_values = { ...values, gambarMateri: file };

        Object.keys(new_values).map((el) => {
          form.append(el, new_values[el]);
        });

        const res = await request_materi.saveData(new_values);

        if (res.status) {
          toast.success("Request Materi berhasil dilakukan.");
          setFiles([]);
          validation.resetForm();
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
      <div className="flex flex-col">
        <div className="py-8 px-5 rounded-2xl items-center justify-center bg-[#e0dcdc]">
          <FormikProvider value={validation}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                validation.handleSubmit();
                return;
              }}
              className="container font-[PlusJakartaSansMed] justify-center"
            >
              <div className="text-center text-2xl font-semibold">
                Request Materi
              </div>
              <FormGroup>
                <input
                  className="w-full items-center mt-7 mx-auto block bg-white text-gray-700 rounded-3xl py-3 px-8 mb-3 focus:bg-grey-300"
                  type="text"
                  id="materi"
                  placeholder="Isi Judul Materi"
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
              <div className="text-center text-lg mt-5 font-medium">
                Soal Spesifik (Opsional)
              </div>
              <div className="mt-2">
                <FileDnd setFiles={setFiles} files={files} />
              </div>
              <button
                type="submit"
                className="w-full items-center mt-7 mx-auto block bg-[#e43c34] text-lg text-white rounded-3xl py-3 px-8 mb-2"
              >
                Submit
              </button>
            </form>
          </FormikProvider>
        </div>
        <div className="py-8 px-5 mt-14 rounded-2xl items-center justify-center bg-[#e0dcdc]">
          <div className="container font-[PlusJakartaSansMed] justify-center">
            <div className="text-center text-2xl font-semibold">Guidelines</div>
            <div className="text-center text-lg mt-10 px-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              dignissim sapien purus, id ultrices ante placerat non. Aliquam
              ornare, libero ac placerat pretium, erat augue eleifend eros, eu
              placerat erat metus in neque. In vel mauris viverra, lobortis
              massa dictum, accumsan quam. Praesent sit amet magna laoreet,
              pretium dui a, iaculis enim. Sed viverra, est vitae bibendum
              varius, lorem tellus volutpat nisl, non fringilla dolor lorem ut
              eros. Praesent cursus volutpat ligula, at viverra ipsum rhoncus
              vel. Nulla lorem massa, sagittis non elit vel, laoreet posuere
              massa. Vestibulum a suscipit ipsum, eget dignissim risus. Nunc
              arcu neque, tincidunt non libero eget.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
