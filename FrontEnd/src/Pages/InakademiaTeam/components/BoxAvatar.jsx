import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { URL_BE } from "../../../utils/axios";

export default function BoxAvatar(el) {
  return (
    <>
      <div className="w-full">
        <div
          className="flex flex-col gap-5 bg-white rounded-3xl py-10 px-5"
          style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.75)" }}
        >
          <div className="self-center">
            <img
              src={`${URL_BE}/uploads/${el.image || ""}`}
              className="object-cover w-[144px] h-[144px] rounded-full"
              alt=""
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-medium">
              {el.namaDepan} {el.namaBelakang}
            </h3>
            <p>{el.short_description}</p>
          </div>
          <div className="self-center">
            <Link to={`/TutorHub/${el._id}`}>
              <Button pill color={"failure"} size={"lg"} className="md:px-10">
                Portofolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
