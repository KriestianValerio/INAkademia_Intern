import React from "react";

// Component
import Checklist from "../../Components/Checklist";
import Nav from "../../Components/Navbar/Nav";
import Footer from "../../Components/Footer/footer";
import ContentText from "../../Components/Content/ContentText";

// Image
import TutorImage from "../../Images/Community2.JPG";
import WordMark from "../../Assets/wordmark_inakademia.png";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const BeATutor = () => {
  return (
    <div>
      <Nav osisl />
      <div className="w-full h-auto mt-8  py-16 ">
        <div className="flex flex-col gap-3">
          <div className="container mx-auto md:px-0 px-5 my-20">
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-1 gap-0 lg:space-y-0 space-y-14 place-content-center w-full h-full">
              <div className="lg:ml-4 xl:ml-1">
                <img
                  src="/assets/images/tutor_1.png"
                  className="w-full md:w-3/4 md:container md:mx-auto lg:inline lg:w-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-8 col-span-2 md:mx-12">
                <h1 className="font-[ClashDisplay] xl:text-6xl text-4xl">
                  Be a Tutor!
                </h1>
                <div className="grid gap-5">
                  <div
                    className="flex xl:gap-14 gap-5 p-2 px-4 rounded-2xl text-white"
                    style={{
                      background:
                        "linear-gradient(100deg, rgba(224,59,55,1) 0%, rgba(232,72,72,0) 70%)",
                    }}
                  >
                    <span
                      className="xl:text-6xl text-4xl italic font-bold"
                      style={{
                        filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.24))",
                      }}
                    >
                      1
                    </span>
                    <span
                      className="xl:text-[1.80rem] text-xl italic self-center"
                      style={{
                        filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.24))",
                      }}
                    >
                      Dapatkan sertifikasi
                    </span>
                  </div>
                  <div
                    className="flex xl:gap-14 gap-5 p-2 px-4 rounded-2xl text-white"
                    style={{
                      background:
                        "linear-gradient(100deg, rgba(224,59,55,1) 0%, rgba(232,72,72,0) 100%)",
                    }}
                  >
                    <span
                      className="xl:text-6xl text-4xl italic font-bold"
                      style={{
                        filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.24))",
                      }}
                    >
                      2
                    </span>
                    <span
                      className="xl:text-[1.80rem] text-xl italic self-center"
                      style={{
                        filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.24))",
                      }}
                    >
                      Join tutor hub di bawah mentorship lead tutors
                    </span>
                  </div>
                  <div
                    className="flex xl:gap-14 gap-5 p-2 px-4 rounded-2xl text-white"
                    style={{
                      background:
                        "linear-gradient(100deg, rgba(224,59,55,1) 0%, rgba(232,72,72,0) 55%)",
                    }}
                  >
                    <span
                      className="xl:text-6xl text-4xl italic font-bold"
                      style={{
                        filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.24))",
                      }}
                    >
                      3
                    </span>
                    <span
                      className="xl:text-[1.80rem] text-xl italic self-center"
                      style={{
                        filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.24))",
                      }}
                    >
                      Mulai berdampak!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative xl:h-[500px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                style={{
                  filter: "drop-shadow(0px -70px 50px rgba(0,0,0,0.10))",
                }}
              >
                <path
                  fill="#fcfcfc"
                  fill-opacity="1"
                  d="M0,160L60,170.7C120,181,240,203,360,202.7C480,203,600,181,720,154.7C840,128,960,96,1080,106.7C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="xl:absolute top-32 w-full h-fit flex justify-center">
              <div className="w-full container">
                <div className="p-10 bg-white rounded-3xl shadow-2xl">
                  <div className="flex gap-8 xl:flex-nowrap flex-wrap">
                    <div className="flex justify-center">
                      <img
                        src="/assets/images/bridge.png"
                        className="max-w-[400px] w-full"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-3 self-center w-full">
                      <h3 className="font-[ClashDisplay] xl:text-4xl text-3xl">
                        Manfaatnya apa aja sih?
                      </h3>
                      <ul className="list-decimal pl-4 xl:text-xl text-md flex flex-col gap-2">
                        <li>
                          Memberi <span className="text-red-500">dampak</span>{" "}
                          bagi pelajar di{" "}
                          <span className="text-red-500">
                            seluruh Indonesia
                          </span>
                        </li>
                        <li>
                          Membangun{" "}
                          <span className="text-red-500">koneksi</span> dengan
                          bersama tutors dari{" "}
                          <span className="text-red-500">
                            berbagai latar belakang
                          </span>
                        </li>
                        <li>
                          Menjadi bagian dari{" "}
                          <span className="text-red-500">“Tutor Hub”</span> dan{" "}
                          <span className="text-red-500">“INACrew”</span>
                        </li>
                        <li>
                          Mendapatkan{" "}
                          <span className="text-red-500">
                            portofolio khusus INAkademia
                          </span>
                          yang dikurasi oleh tim kami
                        </li>
                        <li>
                          Mendapatkan{" "}
                          <span className="text-red-500">sertifikat</span> P2P
                          volunteer tutor{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto md:px-0 px-5 mt-20">
            <div className="flex flex-col gap-36">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-14">
                <div>
                  <img
                    src="/assets/images/tutor_2.png"
                    className="xl:max-w-[90%] w-full"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-3 self-center">
                  <h3 className="text-3xl font-[ClashDisplay]">
                    Dapatkan Sertifikasi
                  </h3>
                  <div className="grid gap-6">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-[500]">
                        1. Pilih topik / sub-topik yang ingin disertifikasi{" "}
                      </h3>
                      <p>
                        Topik / Sub-topik inilah yang dapat peers tutor kepada
                        peers lainnya
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-[500]">
                        2. Kerjakan soal yang telah kami siapkan
                      </h3>
                      <p>
                        Proses ini dapat dilakukan secara live melalui zoom
                        bersama sesama tutors atau secara pribadi melalui
                        rekaman zoom sendiri yang kemudian dikumpul
                      </p>
                      <div className="flex gap-3 mt-2 md:flex-nowrap flex-wrap">
                        <Link to={"/qualification/select_subject"}>
                          <Button
                            color={"failure"}
                            size={"lg"}
                            className="md:px-10"
                            pill
                          >
                            Qualification
                          </Button>
                        </Link>
                        {/* <Link to={"/BeATutor/rekamsendiri"}>
                          <Button
                            color={"failure"}
                            size={"lg"}
                            className="md:px-10"
                            pill
                          >
                            Rekam sendiri
                          </Button>
                        </Link> */}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-[500]">3. Review Tutors</h3>
                      <p>
                        Rekaman peers akan direview oleh tim tutors kami. Bila
                        dianggap cukup baik, maka akan dijadwalkan zoom singkat
                        bersama lead tutors kami untuk screening dan sedikit
                        pemaparan mengenai INAkademia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-14">
                <div>
                  <img
                    src="/assets/images/tutor_3.png"
                    className="xl:max-w-[90%] w-full"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-3 self-center">
                  <h3 className="text-3xl font-[ClashDisplay]">
                    Join “Tutor Hub”
                  </h3>
                  <p className="text-2xl">
                    Di INAkademia, kami memegang nilai{" "}
                  </p>
                  <p className="text-2xl italic">
                    “We grow through{" "}
                    <span className="text-red-500">mentorships</span> that are
                    fostered through
                    <span className="text-red-500"> relationships</span>”
                  </p>
                  <p>
                    Oleh karena itu, setiap tutor akan bergabung dalam sebuah
                    tutor hub yang dipimpin oleh lead tutors kami. Di hub ini,
                    kamu dapat membangun relasi dengan sesama tutors dan
                    mendapatkan bimbingan oleh lead tutors kami. Setiap anggota
                    tim INAkademia juga akan bergabung dalam INACrew mentorship
                    groups dimana kamu bisa bertanya dan berbagi mengenai
                    sekolah, perkuliahan, dll kepada seluruh keluarga INAkademia
                  </p>
                </div>
              </div>

              <div className="w-full  h-full">
                <div
                  className="bg-cover bg-center bg-no-repeat min-h-[600px] rounded-t-3xl"
                  style={{
                    backgroundImage: "url(/assets/images/tutor_4.jpeg)",
                  }}
                ></div>
                <div
                  className=" rounded-b-3xl py-5 px-6"
                  style={{
                    background:
                      "linear-gradient(100deg, rgba(224,74,74,1) 20%, rgba(232,72,72,0.2) 100%)",
                  }}
                >
                  <h3 className="text-white font-[ClashDisplay] text-2xl mb-1">
                    Mulai Berdampak!
                  </h3>
                  <p className="text-white">
                    Jadwalkan sesi tutoring dan berdampak bagi seluruh pelajar
                    di Indonesia!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default BeATutor;
