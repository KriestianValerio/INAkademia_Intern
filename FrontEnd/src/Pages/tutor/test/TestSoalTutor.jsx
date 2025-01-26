import { Button } from "flowbite-react";
import Nav from "../../../Components/Navbar/Nav";
import Footer from "../../../Components/Footer/footer";
import useGet from "../../../Components/Hooks/useGet";
import { useParams } from "react-router-dom";
import { convertMinutesToHoursAndMinutes } from "../../../utils/utils";
import { Link } from "react-router-dom";

export default function TestSoalTutor() {
  const { id } = useParams();

  const get_soal = useGet("qualification", {
    key_data: "qualification",
    hit_first: true,
    auth: true,
    params: {
      subjectId: id,
    },
  });

  return (
    <>
      <Nav />
      <div className="container mx-auto md:px-0 px-5">
        <div className="flex flex-col gap-4 mt-32">
          <h1 className="text-5xl font-[ClashDisplay]">
            {get_soal.data?.subject_title || "-"}
          </h1>
          <p>{get_soal.data?.description || "-"}</p>
          <div
            className="w-full bg-white p-10 rounded-2xl mt-10"
            style={{ boxShadow: "0px 4px 100px 0px rgba(0, 0, 0, 0.35)" }}
          >
            <div className="flex gap-10 md:flex-nowrap flex-wrap">
              <div className="self-center">
                <img
                  src="/assets/images/bridge.png"
                  className="md:max-w-[480px] w-full "
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-[ClashDisplay]">Rules</h3>
                <ol className="list-decimal pl-5 text-md leading-loose">
                  <li>Lorem ipsum dolor sit amet consectetur. </li>
                  <li>
                    Mattis laoreet eget nunc imperdiet pulvinar turpis.
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.{" "}
                  </li>
                  <li>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </li>
                  <li>
                    Excepteur sint occaecat cupidatat non ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex labore et dolore magna aliqua.{" "}
                  </li>
                  <li>
                    Excepteur sint occaecat cupidatat non ut enim ad minim
                    veniam, quis nostrud exercitation.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col gap-3 mt-5">
            <p className="self-center">
              Time Limit:{" "}
              {convertMinutesToHoursAndMinutes(get_soal.data?.time_limit || 0)}
            </p>
            <div className="self-center">
              <Link to={`/qualification/soal/${get_soal.data?.subjectId}`}>
                <Button color={"failure"} className="px-8" size={"lg"}>
                  Start
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}
