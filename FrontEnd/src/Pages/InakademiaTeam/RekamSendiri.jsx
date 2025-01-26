import { Link } from "react-router-dom";
import Nav from "../../Components/Navbar/Nav";
import { HiChevronLeft } from "react-icons/hi";
import Footer from "../../Components/Footer/footer";

export default function RekamSendiri() {
  return (
    <>
      <Nav />
      <div className="w-full container mx-auto mt-32 md:px-0 px-5">
        <div className="flex flex-col gap-3">
          <div>
            <Link
              className="flex gap-1 text-xl hover:underline"
              to={"/BeATutor"}
            >
              <HiChevronLeft className="self-center w-8 h-8" /> Go Back{" "}
            </Link>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-14 mt-14">
            <div className="flex flex-col gap-7 self-center">
              <h1 className="text-5xl font-[ClashDisplay]">Rekam sendiri</h1>
              <ol className="list-decimal pl-5 text-lg leading-loose">
                <li>
                  Soal yang dikerjakan akan dikirim melalui email dalam bentuk
                  pdf
                </li>
                <li>
                  Layar soal dan wajah peers wajib terlihat jelas pada video
                </li>
                <li>
                  Tidak wajib menulis pengerjaan di layar soal, namun proses
                  pengerjaannya wajib dijelaskan secara lisan
                </li>
                <li>
                  Peers dapat menggunakan recording feature di zoom (On-cam dan
                  share screen pdf)
                </li>
                <li>
                  Hasil rekaman diupload pada google drive yang akan dibagikan
                  melalui email
                </li>
              </ol>
            </div>
            <div className="justify-center flex">
              <img
                src="/assets/images/tutor_2.png"
                className="max-w-[500px] w-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </>
  );
}
