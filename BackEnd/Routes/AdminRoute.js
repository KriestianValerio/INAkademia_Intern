const express = require("express");
const router = express.Router();
const SubjectRoutes = require("./admin/SubjectRoutes");

router.use("/subject", SubjectRoutes);

module.exports = router;
