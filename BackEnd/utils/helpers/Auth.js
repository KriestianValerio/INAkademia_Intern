const Users = require("../../Models/UserSchema");
const { hashPassword } = require("../hashing");
const { sendEmailVerification } = require("../mail");
const { signupBodyValidation } = require("../validationSchema");
const { saveUploadFile } = require("./UploadFile");

const registrationHelper = async (res, req, role = "user") => {
  console.log("req.body", req.body);
  if (!req.file) {
    return Promise.resolve({
      res: res,
      code: 400,
      detail_message: "No file uploaded",
    });
  }

  try {
    const { error } = signupBodyValidation(req.body);

    if (error)
      return Promise.resolve({
        res: res,
        code: 400,
        data: error.details[0].message,
      });

    const check_validation = await Users.find({
      $and: [{ email: req.body.email }, { nomorWa: req.body.nomorWa }],
    });

    console.log("check_validation", check_validation);

    if (check_validation.length === 0) {
      const password = await hashPassword(req.body.password);
      const fileUuid = await saveUploadFile(req.file);

      const user = await new Users({
        namaDepan: req.body.namaDepan,
        namaBelakang: req.body.namaBelakang,
        email: req.body.email,
        detailUser: {
          asalSekolah: req.body.asalSekolah,
          tingkat: req.body.tingkat,
          asalDaerah: req.body.asalDaerah,
          programDiikuti: req.body.programDiikuti,
          mengetahuiDari: req.body.mengetahuiDari,
          termsCondition: req.body.termsCondition,
          nomorWa: req.body.nomorWa,
          buktiFollow: fileUuid,
        },
        password: password,
        role: role,
      }).save();

      if (sendEmailVerification(user)) {
        return Promise.resolve({
          res: res,
          code: 201,
          detail_message: "created success",
        });
      } else {
        return Promise.resolve({
          res: res,
          code: 500,
          detail_message: "Terjadi kesalahan saat mengirim verifikasi email.",
        });
      }
    } else {
      return Promise.resolve({
        res: res,
        code: 400,
        detail_message: "Email & Nomor Whatsapp already exists",
      });
    }
  } catch (err) {
    console.log("ERR", err);
    return Promise.reject({ res: res, code: 500 });
  }
};

module.exports = {
  registrationHelper,
};
