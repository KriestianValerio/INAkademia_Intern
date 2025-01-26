const multer = require("multer");
const path = require("path");
const { fileURLToPath } = require("url");
const { v4: uuidv4 } = require("uuid");
const UploadsSchema = require("../../Models/UploadsSchema");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // default upload folder di direktori base project ini /backEnd/uploads

    // sama seperti ../../uploads dimulai dari file ini berada
    cb(null, path.join(__dirname, "..", "..", "uploads/"));
  },
  filename: (req, file, cb) => {
    const fileUuid = uuidv4();
    const fileExtension = path.extname(file.originalname);
    cb(null, `${fileUuid}${fileExtension}`);
  },
});

const upload = multer({ storage });

// untuk array files bisa diubah limit nya contoh "10"
const upload_multiple = multer({ storage }).array("files", 10);

// ini function untuk upload file dan simpan ke databases untuk nama file nya saja
const saveUploadFile = async (file) => {
  const fileUuid = file.filename.split(".")[0];
  const newFile = new UploadsSchema({
    uuid: fileUuid,
    fileName: file.filename,
    size: file.size,
  });
  await newFile.save();
  return fileUuid;
};

const deleteUploadFile = async (uuid) => {
  try {
    const fileRecord = await UploadsSchema.findOne({
      uuid: uuid,
    });

    if (!fileRecord) {
      throw new Error("File not found");
    }

    const filePath = path.join(
      __dirname,
      "..",
      "..",
      "uploads",
      fileRecord.fileName,
    );
    fs.unlinkSync(filePath);
    await UploadsSchema.deleteOne({
      uuid: uuid,
    });

    return true;
  } catch (err) {
    return false;
  }
};

module.exports = {
  saveUploadFile,
  upload,
  upload_multiple,
  deleteUploadFile,
};
