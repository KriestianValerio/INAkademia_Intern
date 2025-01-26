import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../../Components/Footer/footer";
import Nav from "../../../Components/Navbar/Nav";
import PdfViewer from "./PdfViewer";
import samplePDF from "./sample.pdf";
import useGet from "../../../Components/Hooks/useGet";
import { URL_BE } from "../../../utils/axios";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Soal() {
  const { id } = useParams();
  const navigator = useNavigate();

  const get_soal = useGet("qualification", {
    key_data: "qualification",
    hit_first: true,
    auth: true,
    params: {
      subjectId: id,
    },
  });

  const [timeLimit, setTimeLimit] = useState(10);

  useEffect(() => {
    if (timeLimit <= 0) {
      toast.info("Waktu anda sudah habis");
      navigator(`/qualification/soal/finish/${id}`);
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLimit((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLimit]);

  useEffect(() => {
    if (get_soal.data?.time_limit) {
      setTimeLimit(get_soal.data?.time_limit * 60);
    }
  }, [get_soal.data]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto md:px-0 px-5">
        <div className="flex justify-between gap-4 mt-32">
          <h1 className="text-5xl font-[ClashDisplay]">
            {get_soal.data?.subject_title || "-"}
          </h1>
          <div className="px-2 py-2 bg-red-500 h-fit w-fit font-[ClashDisplay] text-white text-lg self-center">
            Time Limit: {formatTime(timeLimit)}
          </div>
        </div>
        <div className="grid justify-center mt-5">
          <PdfViewer
            pdfUrl={`${URL_BE}/uploads/${get_soal.data?.file || ""}`}
            id={id}
          />
        </div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </>
  );
}
