const moment = require("moment");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmailVerification = async (user) => {
  console.log("user.email", user.email);
  const email_send = {
    to: user.email,
    subject: "Verifikasi Email | Inakademia",
    html: `
          <img src="https://inakademia.rlstudio.my.id/static/media/logo_2.f26e07119fb6aaf761c6.png" width="250" style="margin-botton: 20px" />

          <p style="margin-top: 20px;"><b>Halo ${user.namaDepan} ${user.namaBelakang},</b></p>

          <p>Terima kasih telah mendaftar di Inakademia! Untuk menyelesaikan proses pendaftaran, kami perlu memastikan bahwa alamat email ini benar-benar milik Anda. <br/>Silakan klik tautan di bawah ini untuk memverifikasi alamat email Anda:</p>

          <a href="http://localhost:3000/verify/email/${user._id}">
            <button style="padding: 9px 9px 9px 9px; background-color:#E03B37; color:white; font-weight:bolder; border: none; border-radius:5px;">
              Verifikasi Email
            </button>
          </a>

          <p>Jika Anda tidak mendaftarkan akun di Inakademia, harap abaikan email ini.</p>
          <p>Terima kasih telah bergabung dengan kami!</p>

          <p style="padding-bottom:0px; margin-bottom:0px;">Salam hangat,</p>
          <p style="padding-bottom:0px; margin-bottom:0px; margin-top:0px"><b>Tim Inakademia</b></p>
        `,
  };

  const send_email = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email_send.to,
    subject: email_send.subject,
    html: email_send.html,
  });

  return send_email;
};

module.exports = {
  sendEmailVerification,
};
