const Joi = require("joi");

const signupBodyValidation = (body) => {
  const schema = Joi.object({
    namaDepan: Joi.string().required().label("Nama Depan"),
    namaBelakang: Joi.string().required().label("Nama Belakang"),
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
    asalSekolah: Joi.string().required().label("Asal Sekolah"),
    tingkat: Joi.string().required().label("Tingkat"),
    asalDaerah: Joi.string().required().label("Asal Daerah"),
    programDiikuti: Joi.string().required().label("Program Diikuti"),
    mengetahuiDari: Joi.string().required().label("Mengetahui Dari"),
    nomorWa: Joi.string().required().label("Nomor Whatsapp"),
    termsCondition: Joi.boolean().required().label("Terms & Condition"),
  });

  return schema.validate(body);
};

const signInBodyValidation = (body) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(body);
};

const refreshTokenBodyValidation = (body) => {
  const schema = Joi.object({
    refresh_token: Joi.string().required().label("Refresh Token"),
  });
  return schema.validate(body);
};

const selectSubjectBodyValidation = (body) => {
  const schema = Joi.object({
    subjectId: Joi.string().required().label("subjectId"),
  });
  return schema.validate(body);
};

const subjectBodyValidation = (body) => {
  const schema = Joi.object({
    title: Joi.string().required().label("Title Subject"),
    color: Joi.string().required().label("Color Subject"),
  });

  return schema.validate(schema);
};

const singleSessionBodyValidation = (body) => {
  const schema = Joi.object({
    judul_seri: Joi.string().required().label("Judul Sesi"),
    tanggal_sesi: Joi.string().required().label("Tanggal Sesi"),
    waktu_sesi: Joi.string().required().label("Waktu Sesi"),
    deskripsi_sesi: Joi.string().required().label("Deskripsi Sesi"),
  });

  return schema.validate(schema);
};

const tutorPortfolioBodyValidation = (body) => {
  const schema = Joi.object({
    namaDepan: Joi.string().required().label("namaDepan"),
    namaBelakang: Joi.string().required().label("namaBelakang"),
    short_description: Joi.string().required().label("short_description"),
    title: Joi.string().required().label("title"),
    description: Joi.string().required().label("description"),
    video: Joi.string().required().label("video"),
  });

  return schema.validate(schema);
};

module.exports = {
  signupBodyValidation,
  signInBodyValidation,
  refreshTokenBodyValidation,
  selectSubjectBodyValidation,
  subjectBodyValidation,
  singleSessionBodyValidation,
  tutorPortfolioBodyValidation,
};
