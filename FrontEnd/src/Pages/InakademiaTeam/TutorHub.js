import React from "react";
import { NavLink } from "react-router-dom";

// Component
import OsisLayout from "../../Components/Tutor/OsisLayout";
import Checklist from "../../Components/Checklist";
import OsisNav from "../../Components/Tutor/OsisNav";
import Nav from "../../Components/Navbar/Nav";
import Footer from "../../Components/Footer/footer";

// Image
import TutorImage1 from "../../Images/about us foto.png";
import Wave from "../../Assets/wave_black.svg";
import BannerImage from "../../Components/BannerImage";
import BoxAvatar from "./components/BoxAvatar";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import useGet from "../../Components/Hooks/useGet";

const TutorHub = () => {
  const portfolio = useGet("portfolio_tutor", {
    key_data: "portfolio",
    hit_first: true,
  });

  return (
    <div>
      <Nav osisl />
      <div className="flex flex-col gap-5 xl:mt-24 md:mt-20 mt-14  h-full">
        <BannerImage
          title={"Film & Production"}
          image={"/assets/images/tutor_4.jpeg"}
        />
        <div className="absolute top-[400px]">
          <div className="container mx-auto  md:px-0 px-5 ">
            <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 max-[485px]:grid-cols-1">
              {portfolio.loading ? (
                <p className="text-center">Loading...</p>
              ) : (
                portfolio.data.map((el, i) => {
                  return <BoxAvatar key={i} {...el} />;
                })
              )}
            </div>

            <div className="my-20 flex justify-center">
              <Link to={"/BeATutor"}>
                <Button size={"xl"} color={"failure"} pill className="px-20">
                  Join Us
                </Button>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TutorHub;
