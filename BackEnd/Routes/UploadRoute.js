const express = require("express");
const router = express.Router();
const Response = require("../utils/response");
const UploadsSchema = require("../Models/UploadsSchema");
const path = require("path");

// untuk mengambil file dari database & direktori uploads/
router.get("/:uuid", async (req, res) => {
  try {
    const fileUuid = req.params.uuid;
    const fileMetadata = await UploadsSchema.findOne({ uuid: fileUuid });
    if (!fileMetadata) {
      return res.status(404).json({ error: "File not found" });
    }
    const filePath = path.join(
      path.join(__dirname, "..", "uploads/"),
      `${fileUuid}${path.extname(fileMetadata.fileName)}`,
    );

    res.sendFile(path.resolve(filePath));
  } catch (error) {
    console.log(error);
    return Response({ res: res, code: 500 });
  }
});

module.exports = router;
