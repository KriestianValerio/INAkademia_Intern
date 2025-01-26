import React, { useState, useEffect } from "react";
import Nav from "../../Components/Navbar/Nav";
import Single from "../../Components/ScheduleSessions/Single";
import Series from "../../Components/ScheduleSessions/Series";
import Timeline from "./Timeline";
import Footer from "../../Components/Footer/footer";
import useGet from "../../Components/Hooks/useGet";

export default function JadwalkanSesi() {
  const get_sesi = useGet("sessions", {
    key_data: "session",
    hit_first: true,
    auth: true,
  });

  return (
    <div>
      <Nav osisl className="z-[1000]" />
      <div className="container mx-auto flex flex-col gap-3 mt-40 md:px-0 px-5">
        <div className="font-[ClashDisplay] text-5xl">Jadwalkan Sesi</div>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-10 gap-20">
          <Single get_sesi={get_sesi} />
          <Series get_sesi={get_sesi} />
        </div>
      </div>
      <svg
        className="drop-shadow-xl"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,96L120,96C240,96,480,96,720,106.7C960,117,1200,139,1320,149.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
      <div className="container mx-auto">
        <div className="lg:-mt-[20vh] -mt-[6vh]">
          <div className="flex flex-col gap-14">
            {get_sesi.loading ? (
              <p>Loading...</p>
            ) : (
              (get_sesi.data || []).map((el, i) => {
                return <Timeline {...el} />;
              })
            )}
          </div>
        </div>
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
}
