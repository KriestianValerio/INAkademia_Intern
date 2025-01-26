import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../../Components/Navbar/Nav";
import Footer from "../../Components/Footer/footer";
import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";

const LiveDiZoom = () => {
  return (
    <div>
      <Nav />
      <div className="mt-32 container mx-auto md:px-0 px-5">
        <div>
          <Link className="flex gap-1 text-xl hover:underline" to={"/BeATutor"}>
            <HiChevronLeft className="self-center w-8 h-8" /> Go Back{" "}
          </Link>
        </div>
        <div className="mt-14 font-[ClashDisplay] text-6xl">Live Di Zoom</div>
        <div className="mt-12 bg-[#D9D9D9] rounded-2xl w-full h-[400px] grid justify-center p-10">
          <p>Jadwal ketersediaan tutor</p>
        </div>
        <div className="text-center text-2xl italic my-10 pb-10">
          Jadwal akan dikonfirmasi oleh tutor secepatnya, harap aktif memeriksa
          email
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LiveDiZoom;
