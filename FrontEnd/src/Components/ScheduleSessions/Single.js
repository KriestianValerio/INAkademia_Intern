import React from "react";
import FormGroup, { FormFeedback } from "../Form/FormGroup";
import Input from "../Form/Input";
import FileDnd from "../FileDnd";
import { useState } from "react";
import { Button } from "flowbite-react";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { usePost } from "../Hooks/usePost";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { filterTime } from "../../utils/utils";

export default function Single({ get_sesi }) {
  const [files, setFiles] = useState([]);
  const save_single = usePost("sessions", {
    method: "form-data",
    auth: true,
  });

  const [date, setDate] = useState(new Date());

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      judul_seri: "",
      deskripsi_sesi: "",
      limit: "",
    },
    validationSchema: Yup.object({
      judul_seri: Yup.string().required("Judul Seri wajib diisi."),
      deskripsi_sesi: Yup.string().required("Deskripsi Seri wajib diisi."),
      limit: Yup.string().required("Limit wajib diisi.").min(1, "Minimal 1"),
    }),
    onSubmit: async (values) => {
      try {
        if (date === undefined || date === null) {
          toast.error("Silahkan untuk memasukan tanggal terlebih dahulu");
          return;
        }

        const tanggal_sesi = moment(date).format("YYYY-MM-DD");
        const waktu_sesi = moment(date).format("HH:mm");

        const new_date = {
          ...values,
          tanggal_sesi: tanggal_sesi,
          waktu_sesi: waktu_sesi,
        };

        const formData = new FormData();
        Object.keys(values).map((el) => {
          formData.append(`${el}`, values[el]);
        });
        formData.append("type_sesi", "single");

        if (files.length !== 0) {
          const file = files[0].file;
          formData.append("image", file);
        }

        const res = await save_single.saveData(formData);

        if (res.status) {
          toast.success("Single Session berhasil dipublish.");
          validation.resetForm();
          setFiles([]);
          get_sesi.fetchData();
          return;
        }
      } catch (err) {
        return;
      }
    },
  });

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-[24px]">Single Session</h1>
      <div className="w-full bg-[#d9d9d9] p-7 px-6 rounded-3xl">
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
              <Input
                placeholder={"Isi Judul Sesi"}
                name="judul_seri"
                type="text"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.judul_seri}
                invalid={
                  validation.touched.judul_seri && validation.errors.judul_seri
                    ? true
                    : false
                }
              />
              {validation.touched.judul_seri && validation.errors.judul_seri ? (
                <FormFeedback>{validation.errors.judul_seri}</FormFeedback>
              ) : null}
            </FormGroup>
            <FormGroup>
              <DatePicker
                selected={date}
                minDate={new Date()}
                placeholder={"Tanggal Pelaksanaan"}
                name="tanggal_sesi"
                onChange={(e) => setDate(e)}
                showTimeSelect
                wrapperClassName="w-full"
                className="w-full border-none rounded-full"
                timeInputLabel="Waktu Pelaksanaan:"
                dateFormat="MM/dd/yyyy h:mm aa"
                filterTime={filterTime}
              />

              {validation.touched.tanggal_sesi &&
              validation.errors.tanggal_sesi ? (
                <FormFeedback>{validation.errors.tanggal_sesi}</FormFeedback>
              ) : null}
            </FormGroup>

            <FormGroup>
              <Input
                placeholder={"Limit Siswa"}
                name="limit"
                type="number"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.limit}
                invalid={
                  validation.touched.limit && validation.errors.limit
                    ? true
                    : false
                }
              />
              {validation.touched.limit && validation.errors.limit ? (
                <FormFeedback>{validation.errors.limit}</FormFeedback>
              ) : null}
            </FormGroup>
            <FormGroup>
              <Input
                placeholder={"Deskripsi Sesi"}
                name="deskripsi_sesi"
                type="text"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.deskripsi_sesi}
                invalid={
                  validation.touched.deskripsi_sesi &&
                  validation.errors.deskripsi_sesi
                    ? true
                    : false
                }
              />
              {validation.touched.deskripsi_sesi &&
              validation.errors.deskripsi_sesi ? (
                <FormFeedback>{validation.errors.deskripsi_sesi}</FormFeedback>
              ) : null}
            </FormGroup>
            <div className="text-center">
              <p>Gambar Sesi (Opsional)</p>
            </div>
            <div>
              <FileDnd files={files} setFiles={setFiles} />
            </div>
            <div>
              <Button
                size={"lg"}
                color={"failure"}
                pill
                className="w-full"
                type="submit"
                disabled={save_single.loading}
              >
                Publish
              </Button>
            </div>
          </form>
        </FormikProvider>
      </div>
    </div>
  );
}
