import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import useGet from "../../Components/Hooks/useGet";
import moment from "moment";
import NoData from "../../Components/NoData";

const SwiperPilihan = ({ el, session }) => {
  return (
    <div
      className={`flex flex-col justify-between  rounded-3xl w-full text-white p-5 shrink-0 hover:opacity-80 transition-all duration-500`}
      style={{ backgroundColor: `${el?.subject?.color}` }}
    >
      <div className="min-h-[30px]">
        <h1 className="font-semibold uppercase lg:text-[25px] md:text-[18px] text-[12px]">
          {session?.judul_seri || "-"}
        </h1>
      </div>
      <div className="font-semibold">
        <h1 className="lg:text-[15px] md:text-[12px] text-[10px] font-semibold">
          {moment(session?.tanggal_sesi).format("DD MMMM YYYY")},{" "}
          {moment(session?.waktu_sesi, "HH:mm").format("HH:mm A")}
        </h1>
      </div>
      <div className="mt-10 font-bold text-xl">
        <span>
          {" "}
          by {el?.tutor?.namaDepan || "-"} {el?.tutor?.namaBelakang || "-"}
        </span>
      </div>
    </div>
  );
};

function SesiPilihanku() {
  const my_session = useGet("student/my_session", {
    hit_first: true,
    key_data: "my_session",
  });
  // min-w-[200px] max-w-[200px] lg:min-w-[300px] lg:max-w-[300px]
  return (
    <Swiper
      className="w-full h-full"
      spaceBetween={30}
      freeMode={true}
      slidesPerView={4}
      modules={[FreeMode, Pagination]}
      breakpoints={{
        1536: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        481: {
          slidesPerView: 1,
        },
        159: {
          slidesPerView: 1,
        },
      }}
    >
      {(my_session.data || []).length === 0 ? (
        <></>
      ) : (
        (my_session.data || []).map((el) => {
          return el?.session?.type_sesi === "single" ? (
            <SwiperSlide className="">
              <SwiperPilihan el={el} session={el?.session} />
            </SwiperSlide>
          ) : (
            (el?.session?.series || []).map((series) => {
              return (
                <SwiperSlide className="">
                  <SwiperPilihan el={el} session={series} />{" "}
                </SwiperSlide>
              );
            })
          );
        })
      )}
    </Swiper>
  );
}

export default SesiPilihanku;
