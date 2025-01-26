import React from "react";
import Nav from "../../Components/Navbar/Nav";
import { useState } from "react";
import HeadlessCards from "./HeadlessCards";

import SesiPilihanku from "./SesiPilihanku";

import Footer from "../../Components/Footer/footer";
import useGet from "../../Components/Hooks/useGet";
import BoxSubject from "./components/BoxSubject";
import { usePost } from "../../Components/Hooks/usePost";
import { toast } from "react-toastify";
import { HiPlus, HiX } from "react-icons/hi";

export default function Test() {
  const [isHeadlessOpen, setIsHeadlessOpen] = useState(false);
  const get_subject = useGet("subject", {
    key_data: "subject",
    hit_first: true,
    auth: false,
  });

  const get_selected = useGet("student/select_subject", {
    hit_first: true,
    key_data: "selected_subject",
  });

  const select_subject = usePost("student/select_subject", {
    method: "json",
    auth: true,
  });

  const handleSelectSubject = async (subjectId) => {
    try {
      const res = await select_subject.saveData({ subjectId });

      if (res.status) {
        toast.success("Pelajaran berhasil dipilih.");
        get_selected.setData(res.data.selected_subject);
        setIsHeadlessOpen(false);
      }
    } catch (err) {
      return;
    }
  };

  function openHandler() {
    setIsHeadlessOpen(true);
  }

  function closeHandler() {
    setIsHeadlessOpen(false);
  }

  return (
    <div>
      <Nav osisl />
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
      {/* Pelajaran Pilihanku */}
      <div className="container mx-auto relative lg:-mt-[11vh] -mt-[6vh] z-[20px] md:px-0 px-5">
        <div className="text-center font-[ClashDisplay] text-[30px] lg:text-[60px] mb-10">
          Pelajaran Pilihanku
        </div>

        {/* Cards */}
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 max-[400px]:grid-cols-1 justify-center md:gap-10 gap-5">
          {get_selected.loading ? (
            <></>
          ) : (
            (get_selected.data || []).map((el, i) => {
              return <BoxSubject {...el} get_selected={get_selected} />;
            })
          )}
          <div
            onClick={() => openHandler()}
            className="bg-[#d9d9d9] justify-self-center hover:bg-[#d9d9d9]/80 transition-colors duration-500 w-full  grid place-content-center cursor-pointer rounded-3xl md:max-w-[300px] md:h-[400px] h-[320px]"
          >
            <HiPlus className="w-12 h-12" />
          </div>
        </div>
      </div>

      <HeadlessCards open={isHeadlessOpen} setOpen={setIsHeadlessOpen}>
        <div className="grid grid-cols-2 mb-[20px] text-[25px]">
          <div className="text-left">Pelajaran yang tersedia</div>
          <button
            className="text-right font-[ClashDisplay]"
            onClick={closeHandler}
          >
            X
          </button>
        </div>

        <div className="block">
          {(get_subject.data || []).map((el, i) => {
            return (
              <div
                key={i}
                className="bg-white hover:bg-gray-100 pt-[5px] rounded-md px-[10px]"
                onClick={() => handleSelectSubject(el._id)}
              >
                <button className="flex my-[10px]">{el.title}</button>
                <hr />
              </div>
            );
          })}
        </div>
      </HeadlessCards>
      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
}
