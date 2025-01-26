import { Button } from "flowbite-react";
import Nav from "../../../Components/Navbar/Nav";
import Footer from "../../../Components/Footer/footer";
import { usePut } from "../../../Hooks/usePut";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function FinishSoal() {
  const { id } = useParams();
  const navigator = useNavigate();

  const change_status = usePut("qualification/change_status", {
    method: "json",
    auth: true,
  });

  const changeStatus = async () => {
    try {
      const res = await change_status.updateData({
        subjectId: id,
      });

      if (res.status) {
        toast.success("Qualification anda sudah dikirim");
        navigator("/BeATutor");
      }
    } catch (err) {
      return;
    }
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto md:px-0 px-5">
        <div className="flex justify-between gap-4 mt-32">
          <h1 className="text-5xl font-[ClashDisplay]">Subject Title</h1>
        </div>
        <div
          className="w-full bg-white p-14 rounded-2xl mt-10"
          style={{ boxShadow: "0px 4px 100px 0px rgba(0, 0, 0, 0.35)" }}
        >
          <div className="flex gap-20 md:flex-nowrap flex-wrap">
            <div className="self-center">
              <img
                src="/assets/images/finish_soal.png"
                className="md:max-w-[320px] w-full "
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2 self-center">
              <p className="md:text-2xl text-lg">
                Silakan submit foto pengerjaan anda berupa (PDF/PNG) dan video
                Anda pada link berikut:
              </p>
              <a
                href="#"
                className="md:text-2xl text-lg text-blue-500 hover:underline"
              >
                https://linkvideoINAKADEMIA
              </a>
              <p className="md:text-2xl text-lg mt-5">
                Jika sudah, silakan tekan tombol Submit.
              </p>
              <div className="mt-10">
                <Button
                  color={"failure"}
                  size={"xl"}
                  onClick={changeStatus}
                  disabled={change_status.loading}
                >
                  Submit
                </Button>
              </div>
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
