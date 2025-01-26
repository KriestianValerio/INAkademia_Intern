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
import { useParams } from "react-router-dom";
import { URL_BE } from "../../utils/axios";

const TutorHubDetail = () => {
  const { id } = useParams();

  const portfolio = useGet("portfolio_tutor", {
    key_data: "portfolio",
    hit_first: true,
    params: {
      id: id,
    },
  });

  return (
    <div>
      <Nav osisl />
      <div className="flex flex-col gap-5 xl:mt-24 md:mt-20 mt-14  h-full">
        <BannerImage className={`bg-slate-200/60`}  />
        <div className="absolute top-[400px]">
          <div className="container mx-auto  md:px-0 px-5 mb-20">
            <div className="w-full flex justify-center">
              <div className="bg-white shadow-2xl max-w-[800px] px-5 pt-5 pb-10 w-full rounded-2xl relative">
                <div className="text-center flex flex-col gap-3 mt-28">
                  <div className="self-center absolute -top-24">
                    <img
                      src={`${URL_BE}/uploads/${portfolio.data?.image || ""}`}
                      className="object-cover w-[200px] h-[200px] rounded-full"
                      alt=""
                    />
                  </div>
                  <h1 className="text-3xl font-[ClashDisplay]">
                    {portfolio.data?.namaDepan} {portfolio.data?.namaBelakang}
                  </h1>
                  <p>{portfolio.data?.short_description}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-28">
              <div className="flex flex-col gap-2">
                <h3 className="md:text-4xl text-3xl font-[ClashDisplay]">
                  {portfolio.data?.title}
                </h3>
                <p>{portfolio.data?.description}</p>
              </div>
              <div>
                <iframe
                  width="1905"
                  src={`https://www.youtube.com/embed/${portfolio.data?.video}`}
                  title="Tutor Hub Video"
                  frameborder="0"
                  className="w-full max-h-[500px] aspect-square"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TutorHubDetail;
