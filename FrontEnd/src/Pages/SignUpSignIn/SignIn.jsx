import React from "react";

import Nav from "../../Components/Navbar/Nav";
import FormGroup, { FormFeedback } from "../../Components/Form/FormGroup";
import Input from "../../Components/Form/Input";
import { Alert, Button } from "flowbite-react";
import Footer from "../../Components/Footer/footer";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import useLogin from "../../Hooks/useLogin";
import { useNavigate } from "react-router-dom";
import useQuery from "../../Hooks/useQuery";
import { Link } from "react-router-dom";

const SignIn = () => {
  const login = useLogin();
  const navigator = useNavigate();
  const params = useQuery();
  const to = params.get("to") || "";

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email wajib diisi."),
      password: Yup.string().required("Password wajib diisi."),
    }),
    onSubmit: async (values) => {
      try {
        const res = await login.authentication(values);
        console.log("to", to);

        if (res.status) {
          if (to.length === 0) {
            switch (res.data?.data?.user?.role) {
              case "admin":
                navigator("/admin");
                break;
              case "student":
                navigator("/student/Logged");
                break;
              case "tutor":
                navigator("/tutor/JadwalkanSesi");
                break;
              default:
                return;
            }
          } else {
            navigator(to);
            return;
          }
        } else {
          validation.resetForm();
        }
      } catch (err) {
        console.log(err);
        validation.resetForm();
        return;
      }
      // console.log(values);
    },
  });

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
              className="max-w-[800px] w-full flex flex-col gap-2"
            >
              <h3 className="text-center text-4xl font-medium font-[ClashDisplay]">
                Sign In
              </h3>
              <p className="text-center">Untuk sementara, disarankan menggunakan Google Chrome atau Mozilla Firefox untuk melakukan sign in. Masalah kemungkinan terjadi bila menggunakan Safari. Mohon maaf untuk ketidaknyamanannya.</p>

              <FormikProvider value={validation}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
                    return;
                  }}
                >
                  {login.error.show && (
                    <Alert
                      color={"failure"}
                      className="mb-5 bg-[#e03b37] text-white font-bold"
                    >
                      {login.error.message}
                    </Alert>
                  )}
                  <div
                    style={{
                      backgroundColor: "#D9D9D9",
                      paddingLeft: "1.75rem",
                      paddingRight: "1.75rem",
                    }}
                    className="w-full bg-[#D9D9D9] px-7 py-5 rounded-xl"
                  >
                    <div
                      style={{ gap: "1.5rem" }}
                      className="flex flex-col gap-6"
                    >
                      <FormGroup className="">
                        <FormGroup.Label>Email</FormGroup.Label>
                        <Input
                          placeholder={"example@example.com"}
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
                        <FormGroup.Label>Password</FormGroup.Label>
                        <Input
                          placeholder={"***********"}
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

                      <div>
                        <Button
                          type="submit"
                          className="w-full"
                          pill
                          color={"failure"}
                          disabled={login.loading}
                        >
                          Login
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </FormikProvider>
              <div className="text-center">
                <p className="text-lg">
                  Belum punya akun?{" "}
                  <Link
                    to={"/signup"}
                    className="text-blue-500 font-semibold hover:underline"
                  >
                    Daftar disini.
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

export default SignIn;
