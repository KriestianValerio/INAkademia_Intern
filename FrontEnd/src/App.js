import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";

// import Community from './Pages/Community';

import { BeAPartofTheCommunity } from "./Pages/BeAPartofTheCommunity";
import Community from "./Pages/Community/Community";
import TutorHub from "./Pages/InakademiaTeam/TutorHub";
import WhatIsP2P from "./Pages/WhatIsP2P";
import WhatIsINARoom from "./Pages/INARoom/WhatIsINARoom";
import WhatIsInakademia from "./Pages/WhatIsInakademia";
import FilmAndProduction from "./Pages/Community/Film&Production";
import BeATutor from "./Pages/InakademiaTeam/BeATutor";
import P2PTutoringGroups from "./Pages/P2P/P2PTutoringGroups";
import P2PSessions from "./Pages/P2P/P2PSessions";
import SesiLain from "./Components/P2P/SesiLain";
import SignUp from "./Pages/SignUpSignIn/SignUp";
import ErrorPage from "./Pages/ErrorPage";
import LiveDiZoom from "./Pages/InakademiaTeam/LiveDiZoom";
import WhatisSummerBridge from "./Pages/SummerBridge/WhatIsSummerBridge"
import MeetOurTeam from "./Pages/MeetOurTeam/MeetOurTeam.js"
//cth
import PortofolioContoh from "./Pages/PortofolioContoh";

import JadwalkanSesi from "./Pages/InakademiaTeam/JadwalkanSesi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./Pages/SignUpSignIn/SignIn";
import HomeAdmin from "./Pages/admin/HomeAdmin";
import HomeStudent from "./Pages/student/HomeStudent";
import HomeTutor from "./Pages/tutor/HomeTutor";
import AuthMiddleware, { useGetUserInfo } from "./Pages/middleware";
import Logout from "./Pages/Logout";
import DetailSesions from "./Pages/P2P/detail/DetailSessions";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { getApi } from "./utils/api";
import { useEffect } from "react";
import RekamSendiri from "./Pages/InakademiaTeam/RekamSendiri";
import TestSoalTutor from "./Pages/tutor/test/TestSoalTutor";
import Soal from "./Pages/tutor/test/Soal";
import FinishSoal from "./Pages/tutor/test/FinishSoal";
import SelectSubject from "./Pages/tutor/test/SelectSubject";
import Status from "./Pages/tutor/test/Status";
import EmailVerify from "./Pages/verify/EmailVerify";
import TutorHubDetail from "./Pages/InakademiaTeam/TutorHubDetail";
import TutorPortfolio from "./Pages/admin/TutorPortfolio";
import TutorForm from "./Pages/admin/TutorForm";
import ComingSoon from "./Pages/ComingSoon";
import MathLab from "./Pages/MathLab";
import About from "./Pages/About";
import Logged from "./Pages/Logged";
import WhatIsMathLab from "./Pages/WhatIsMathLab";

const authProtectedRoutes = [
  // { path: "/admin", component: <HomeAdmin /> },
  // { path: "/admin/portfolio_tutor", component: <TutorPortfolio /> },
  // { path: "/admin/porfolio_tutor/editor", component: <TutorForm /> },
  // { path: "/admin/porfolio_tutor/editor/:id", component: <TutorForm /> },
  // { path: "/tutor", component: <HomeTutor /> },
  // { path: "/student/:id", component: <HomeStudent /> },
  // { path: "/student/p2p/P2PSessions", component: <P2PSessions /> },
  // { path: "/student/p2p/P2PSessions/:id", component: <SesiLain exact /> },
  // {
  //   path: "/student/p2p/P2PSessions/detail/:id",
  //   component: <DetailSesions exact />,
  // },
  // { path: "/tutor/JadwalkanSesi", component: <JadwalkanSesi exact /> },
  { path: "/student/MathLab", component: <MathLab exact/> },
  { path: "/student/Logged", component: <Logged exact /> }
];

function App() {
  const location = useLocation();
  const [user, setUser] = useGetUserInfo();

  const getDetailUsers = async () => {
    try {
      const user_cookie = Cookies.get("inakademia_user");
      console.log("location", location.pathname);

      if (user_cookie !== undefined) {
        const res = await getApi({
          url: "user/detail",
          params: {},
          auth: true,
        });

        if (res.status === 200) {
          const userData = res.data.data;
          setUser(userData);
        }
      }
    } catch (err) {
      return;
    }
  };

  useEffect(() => {
    getDetailUsers();
  }, []);

  return (
    <>
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Community" element={<ComingSoon/>} />
          <Route path="/MathLab" element={<WhatIsMathLab/>} />
          {/* <Route
            path="/community/film&production"
            element={<FilmAndProduction />}
          /> */}

          <Route
            path="/BeAPartOfTheCommunity"
            element={<BeAPartofTheCommunity />}
          />
          <Route
            path="/WhatIsINAkademia"
            element={<About />}
          />
          
{/* 
          <Route path="/portofoliocontoh" element={<PortofolioContoh />} /> */}

          {/*<Route path="/p2p/WhatIsP2P" element={<WhatIsP2P />} />*/}
          {/* <Route path="/INARoom" element={<WhatIsINARoom />} /> */}
          <Route path="/SummerBridge" element={<WhatisSummerBridge/>} />
          <Route path="/MeetOurTeam" element={<MeetOurTeam/>} />
          <Route path="/WhatIsInakademia" element={<WhatIsInakademia />} />
          {/* <Route
            path="/p2p/P2PTutoringGroups"
            element={<P2PTutoringGroups />}
          /> */}
          {/* <Route path="/BeATutor" element={<BeATutor />} />
          <Route path="/TutorHub" element={<TutorHub />} /> */}
          {/* <Route path="/TutorHub/:id" element={<TutorHubDetail />} /> */}
          <Route path="*" element={<ErrorPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path="/BeATutor/LiveDiZoom" element={<LiveDiZoom />} /> */}

          <Route path="/logout" element={<Logout />} />

          {/* <Route path="/BeATutor/rekamsendiri" element={<RekamSendiri />} /> */}

          {/* <Route
            path="/qualification/select_subject"
            element={<SelectSubject />}
          />
          <Route path="/qualification/:id" element={<TestSoalTutor />} />
          <Route path="/qualification/status" element={<Status />} />
          <Route path="/qualification/soal/:id" element={<Soal />} />
          <Route
            path="/qualification/soal/finish/:id"
            element={<FinishSoal />}
          /> */}

          <Route path="/verify/email/:id" element={<EmailVerify />} />

          {authProtectedRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<AuthMiddleware>{route.component}</AuthMiddleware>}
              key={idx}
              exact={true}
            />
          ))}
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
