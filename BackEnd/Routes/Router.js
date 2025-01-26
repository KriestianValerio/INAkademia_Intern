const express = require("express");

const UserRoute = require("./UserRoute");
const SessionsRouter = require("./SessionsRouter");
const SeriesRoute = require("./SeriesSessionRoute");
const imageRoute = require("./ImageRouter");
const AuthRoute = require("./AuthRoute");
const RequestMateriRoute = require("./RequestMateriRoute");
const SelectSubject = require("./SelectSubject");
const AdminRoute = require("./AdminRoute");
const QualificationRoute = require("./QualificationRoute");
const GeneralRoute = require("./GeneralRoute");
const Users = require("../Models/UserSchema");
const Response = require("../utils/response");
const { authenticate, isStudent, isAdmin, isTutor } = require("../middleware");
const TutorPortfolioRoutes = require("./TutorPortfolioRoutes");
const MathLabRoute = require("./MathLabRoute")

const router = express.Router();

router.use("/student", UserRoute);
router.use("/auth", AuthRoute);
router.use("/sessions", authenticate, isTutor, SessionsRouter);
router.use("/image", imageRoute);
router.use("/mathlab", MathLabRoute);

router.use("/student/select_subject", authenticate, isStudent, SelectSubject);
router.use("/request_materi", authenticate, RequestMateriRoute);
router.use("/qualification", authenticate, QualificationRoute);

router.use("/admin", authenticate, isAdmin, AdminRoute);
router.use("/portfolio_tutor", TutorPortfolioRoutes);

router.use("/", GeneralRoute);

router.use(`/user/detail`, authenticate, async (req, res) => {
  try {
    const user = await Users.findOne({ _id: req.user._id });
    if (user) {
      return Response({
        res: res,
        code: 200,
        data: {
          userId: user._id,
          namaDepan: user.namaDepan,
          namaBelakang: user.namaBelakang,
          asalSekolah: user.detailUser.asalSekolah,
          nomorTelepon: user.detailUser.nomorWa,
          email: user.email,
          role: user.role,
          status: user.status,
          subjectId: user.subjectId,
        },
      });
    } else {
      return Response({
        res: res,
        code: 404,
        detail_message: "User not found!",
      });
    }
  } catch (err) {
    return Response({
      res: res,
      code: 500,
    });
  }
});

module.exports = router;
