import { useNavigate, useParams } from "react-router-dom";
import Spinners from "../Spinners";
import { usePost } from "../../Components/Hooks/usePost";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const errorSwal = (navigator) => {
  Swal.fire({
    title: "Email kamu gagal diverifikasi",
    text: "Silahkan cek lagi email kamu, atau kamu tidak terdaftar disistem kami.",
    icon: "error",
    allowOutsideClick: false,
    allowEscapeKey: false,
    confirmButtonText: "Oke",
  }).then((result) => {
    if (result.isConfirmed) {
      navigator("/signin");
    }
  });
};

export default function EmailVerify() {
  const { id } = useParams();
  const navigator = useNavigate();

  const email_verify = usePost("auth/verify/email", {
    method: "json",
    auth: true,
  });

  useEffect(() => {
    const send_verify = async () => {
      try {
        const res = await email_verify.saveData({ id });

        if (res.status) {
          Swal.fire({
            title: "Email kamu berhasil diverifikasi",
            text: "Langkah selanjutnya silahkan untuk Login ke akun kamu.",
            icon: "success",
            allowOutsideClick: false,
            allowEscapeKey: false,
            confirmButtonText: "Login",
          }).then((result) => {
            if (result.isConfirmed) {
              navigator("/signin");
            }
          });
        } else {
          errorSwal(navigator);
        }
      } catch (err) {
        errorSwal(navigator);
        return;
      }
    };

    send_verify();
  }, [id]);

  console.log("ID", id);

  return <>{email_verify.loading ? <Spinners /> : <></>}</>;
}
