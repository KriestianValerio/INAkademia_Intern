import { useState } from "react";
import FileDnd from "../../Components/FileDnd";
import FormGroup, { FormFeedback } from "../../Components/Form/FormGroup";
import Input from "../../Components/Form/Input";
import Nav from "../../Components/Navbar/Nav";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { usePost } from "../../Components/Hooks/usePost";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SidebarRequestMateri({ id }) {
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
          <div className="text-center text-2xl font-semibold">
            Request Materi
          </div>
          <div className="mt-4">
            <Link to={`/student/${id}`}>
              <Button color={"failure"} className="w-full font-bold">
                Pergi ke Halaman Request Materi
              </Button>
            </Link>
          </div>
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
