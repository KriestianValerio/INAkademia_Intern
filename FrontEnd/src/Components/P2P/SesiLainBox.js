import React from "react";
import { URL_BE } from "../../utils/axios";
import moment from "moment";
import { Link } from "react-router-dom";

const SesiLainBox = (props) => {
  return (
    <Link to={`/student/p2p/P2PSessions/detail/${props?._id}`}>
      <div className="p-4 md:p-10 mb-8 md:mb-14 w-full h-fit rounded-2xl items-center justify-center bg-[#a049e8] hover:bg-[#a049e8]/80 transition-colors duration-300">
        <div className="flex md:gap-10 gap-6 md:flex-nowrap flex-wrap">
          <div className="shrink-0 md:w-fit w-full">
            <img
              src={`${URL_BE}/uploads/${props?.id_gambar || ""}`}
              alt={props?.id_gambar}
              className="rounded-2xl md:w-[140px] w-full h-[190px] object-cover"
            />
          </div>
          <div className="flex-auto p-1">
            <div className="flex flex-wrap font-[PlusJakartaSansMed] text-white">
              <h1 className="flex-auto text-lg lg:text-xl xl:text-2xl font-medium ">
                {props?.judul_seri}
              </h1>
              <div className="text-lg xl:text-2xl font-black">
                {props?.registered_count || 0}/{props?.limit_sesi || 0}
              </div>
              <div className="w-full flex-none font-light text-sm lg:text-md xl:text-lg mt-2">
                {props?.type_sesi === "single"
                  ? moment(props.tanggal_sesi).format("DD MMM YYYY")
                  : `${moment(props.start_date).format("DD MMM")} - ${moment(props.end_date).format("DD MMM")}`}
              </div>
              <div className="w-full flex-none font-thin text-sm lg:text-md xl:text-lg mt-2">
                {props?.deskripsi_sesi}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SesiLainBox;
