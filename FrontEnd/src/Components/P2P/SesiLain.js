import React from "react";

// Import Component
import Nav from "../Navbar/Nav";
import SesiLainBox from "./SesiLainBox";

// Import Images and Logos
import { useParams } from "react-router-dom";
import useGet from "../Hooks/useGet";
import SidebarRequestMateri from "./SidebarRequestMateri";
import Footer from "../Footer/footer";
import SesiPilihanku from "../../Pages/P2P/SesiPilihanku";
import NoData from "../NoData";

const SesiLain = () => {
  const { id } = useParams();
  const get_sesi = useGet("student/select_subject/other_session", {
    params: {
      id: id,
    },
    hit_first: true,
    key_data: "other_session",
  });

  return (
    <div className="overflow-hidden">
      <Nav />
      <div className="mt-[60px] lg:mt-[84px] p-[10px] bg-[#FFFFFF]">
        <div className="mt-[15px] mb-[5px] text-center text-[30px] lg:text-[60px] font-[ClashDisplay]">
          Sesi Pilihanku
        </div>
        <div className="lg:mx-[8vw] mt-8 pb-5">
          <SesiPilihanku />
        </div>
      </div>
      <svg
        className="drop-shadow-xl z-[100]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,96L120,96C240,96,480,96,720,106.7C960,117,1200,139,1320,149.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>

      <div className="w-full h-auto -mt-40 px-3 py-16 relative -top-20">
        <div className="container mx-auto mt-24 sm:mt-0">
          <div className="text-center text-4xl md:text-5xl xl:text-6xl leading-normal pr-14 sm:pl-12 sm:pt-12 lg:pt-12 font-[ClashDisplay]">
            <div className="pl-12 font-[ClashDisplay]">
              Registrasi Sesi Lainnya
            </div>
          </div>
        </div>
        <div className="lg:grid grid-cols-5 xl:grid-cols-7 mt-16 mx-5 xl:mx-36">
          <div className="overflow-y-auto mx-7 col-span-7 md:col-span-3 xl:col-span-5">
            {get_sesi.loading ? (
              <p>Loading...</p>
            ) : get_sesi.data.length === 0 ? (
              <NoData />
            ) : (
              (get_sesi.data || []).map((el, i) => <SesiLainBox {...el} />)
            )}
          </div>
          <div className="mx-5 col-span-2">
            <SidebarRequestMateri id={id} />
          </div>
        </div>
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default SesiLain;
