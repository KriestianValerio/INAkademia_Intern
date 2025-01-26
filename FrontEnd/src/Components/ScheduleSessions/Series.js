import { useEffect } from "react";
import FormGroup, { FormFeedback } from "../Form/FormGroup";
import Input from "../Form/Input";
import { FieldArray, FormikProvider, useFormik } from "formik";
import { Button } from "flowbite-react";
import { HiX } from "react-icons/hi";
import * as Yup from "yup";
import { useState } from "react";
import FileDnd from "../FileDnd";
import { usePost } from "../Hooks/usePost";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { filterTime } from "../../utils/utils";
import moment from "moment";

const validationSchema = Yup.object().shape({
  judul_seri: Yup.string().required("Judul Seri wajib disi."),
  limit: Yup.number().required("Limit Siswa wajib disi.").min(1, "Minimal 1"),
  jumlah_sesi: Yup.number()
    .required("Jumlah Sesi wajib disi.")
    .min(2, "Minimal 2"),
  deskripsi_sesi: Yup.string().required("Deskripsi Sesi wajib disi."),
  sessions: Yup.array().of(
    Yup.object().shape({
      judul_seri: Yup.string().required("Judul Seri wajib disi."),
      tanggal_sesi: Yup.string().required("Tanggal Sesi wajib disi."),
      deskripsi_sesi: Yup.string().required("Deskripsi Sesi wajib disi."),
    }),
  ),
});

export default function Series({ get_sesi }) {
  const [files, setFiles] = useState([]);
  const save_series = usePost("sessions", {
    method: "form-data",
    auth: true,
  });

  const validation = useFormik({
    initialValues: {
      judul_seri: "",
      limit: "",
      deskripsi_sesi: "",
      jumlah_sesi: 0,
      sessions: [],
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("judul_seri", values.judul_seri);
        formData.append("limit", values.limit);
        formData.append("jumlah_sesi", values.jumlah_sesi);
        formData.append("deskripsi_sesi", values.deskripsi_sesi);

        values.sessions.forEach((session, index) => {
          formData.append(`sessions[${index}][judul_seri]`, session.judul_seri);
          formData.append(
            `sessions[${index}][tanggal_sesi]`,
            moment(session.tanggal_sesi).format("YYYY-MM-DD HH:mm"),
          );
          formData.append(
            `sessions[${index}][waktu_sesi]`,
            moment(session.waktu_sesi).format("HH:mm"),
          );
          formData.append(
            `sessions[${index}][deskripsi_sesi]`,
            session.deskripsi_sesi,
          );
        });

        formData.append("type_sesi", "series");

        if (files.length !== 0) {
          const file = files[0].file;
          formData.append("image", file);
        }

        const res = await save_series.saveData(formData);

        if (res.status) {
          toast.success("Single Session berhasil dipublish.");
          validation.resetForm();
          setFiles([]);
          get_sesi.fetchData();
          return;
        }
      } catch (err) {
        console.log(err);
        return;
      }
    },
  });

  useEffect(() => {
    const newSessions = Array.from(
      { length: validation.values.jumlah_sesi },
      () => ({
        judul_seri: "",
        tanggal_sesi: "",
        deskripsi_sesi: "",
      }),
    );
    validation.setFieldValue("sessions", newSessions);
  }, [validation.values.jumlah_sesi]);

  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-[24px]">Series</h1>
        <div className="w-full bg-[#d9d9d9] p-7 px-6 rounded-3xl">
          <FormikProvider value={validation}>
            <form
              onSubmit={validation.handleSubmit}
              className="flex flex-col gap-5"
            >
              <FormGroup>
                <Input
                  placeholder="Isi Judul Sesi"
                  name="judul_seri"
                  type="text"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.judul_seri}
                  invalid={
                    validation.touched.judul_seri &&
                    validation.errors.judul_seri
                      ? true
                      : false
                  }
                />
                {validation.touched.judul_seri &&
                validation.errors.judul_seri ? (
                  <FormFeedback>{validation.errors.judul_seri}</FormFeedback>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Input
                  placeholder="Deskripsi Sesi"
                  name={`deskripsi_sesi`}
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
                  <FormFeedback>
                    {validation.errors.deskripsi_sesi}
                  </FormFeedback>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Input
                  placeholder="Limit Siswa"
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
                  placeholder="Jumlah Sesi"
                  name="jumlah_sesi"
                  type="number"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.jumlah_sesi}
                  invalid={
                    validation.touched.jumlah_sesi &&
                    validation.errors.jumlah_sesi
                      ? true
                      : false
                  }
                />
                {validation.touched.jumlah_sesi &&
                validation.errors.jumlah_sesi ? (
                  <FormFeedback>{validation.errors.jumlah_sesi}</FormFeedback>
                ) : null}
              </FormGroup>

              <FieldArray
                name="sessions"
                render={(arrayHelpers) => (
                  <>
                    {validation.values.sessions.map((_, index) => (
                      <div key={index} className="flex flex-col gap-5">
                        <div className="flex gap-2 justify-between">
                          <p className="text-center flex-1">
                            {validation.values.sessions?.[index]?.judul_seri
                              ? validation.values.sessions?.[index]?.judul_seri
                              : `Series ${index + 1}`}
                          </p>
                          <div
                            className="flex justify-end self-center p-1 rounded-md bg-red-300 hover:bg-red-500 transition-all duration-500 hover:text-white"
                            onClick={() => {
                              arrayHelpers.remove(index);
                              validation.setFieldValue(
                                "jumlah_sesi",
                                validation.values.jumlah_sesi - 1,
                              );
                            }}
                          >
                            <HiX className=" cursor-pointer  w-3 h-3" />
                          </div>
                        </div>
                        <FormGroup>
                          <Input
                            placeholder="Judul Sesi"
                            name={`sessions[${index}].judul_seri`}
                            type="text"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={
                              validation.values.sessions[index]?.judul_seri
                            }
                            invalid={
                              validation.touched.sessions?.[index]
                                ?.judul_seri &&
                              validation.errors.sessions?.[index]?.judul_seri
                                ? true
                                : false
                            }
                          />
                          {validation.touched.sessions?.[index]?.judul_seri &&
                          validation.errors.sessions?.[index]?.judul_seri ? (
                            <FormFeedback>
                              {validation.errors.sessions[index]?.judul_seri}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                        <FormGroup>
                          <DatePicker
                            selected={
                              validation.values.sessions[index]?.tanggal_sesi
                                ? new Date(
                                    validation.values.sessions[
                                      index
                                    ]?.tanggal_sesi,
                                  )
                                : null
                            }
                            minDate={new Date()}
                            placeholderText={"Tanggal Pelaksanaan"}
                            name={`sessions[${index}].tanggal_sesi`}
                            onChange={(date) => {
                              validation.setFieldValue(
                                `sessions[${index}].tanggal_sesi`,
                                date,
                              );
                            }}
                            showTimeSelect
                            wrapperClassName="w-full"
                            className="w-full border-none rounded-full"
                            timeInputLabel="Waktu Pelaksanaan:"
                            dateFormat="MM/dd/yyyy h:mm aa"
                            filterTime={filterTime}
                          />
                          {validation.touched.sessions?.[index]?.tanggal_sesi &&
                          validation.errors.sessions?.[index]?.tanggal_sesi ? (
                            <FormFeedback>
                              {validation.errors.sessions[index]?.tanggal_sesi}
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                        <FormGroup>
                          <Input
                            placeholder="Deskripsi Sesi"
                            name={`sessions[${index}].deskripsi_sesi`}
                            type="text"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={
                              validation.values.sessions[index]?.deskripsi_sesi
                            }
                            invalid={
                              validation.touched.sessions?.[index]
                                ?.deskripsi_sesi &&
                              validation.errors.sessions?.[index]
                                ?.deskripsi_sesi
                                ? true
                                : false
                            }
                          />
                          {validation.touched.sessions?.[index]
                            ?.deskripsi_sesi &&
                          validation.errors.sessions?.[index]
                            ?.deskripsi_sesi ? (
                            <FormFeedback>
                              {
                                validation.errors.sessions[index]
                                  ?.deskripsi_sesi
                              }
                            </FormFeedback>
                          ) : null}
                        </FormGroup>
                      </div>
                    ))}
                  </>
                )}
              />
              <div className="text-center">
                <p>Gambar Sesi (Opsional)</p>
              </div>
              <div>
                <FileDnd files={files} setFiles={setFiles} />
              </div>
              <Button
                size={"lg"}
                color={"failure"}
                pill
                className="w-full"
                type="submit"
                disabled={save_series.loading}
              >
                Publish
              </Button>
            </form>
          </FormikProvider>
        </div>
      </div>
    </>
  );
}
