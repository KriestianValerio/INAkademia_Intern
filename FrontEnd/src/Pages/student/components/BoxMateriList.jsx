import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import { Button } from "flowbite-react";
import { URL_BE } from "../../../utils/axios";
import { toast } from "react-toastify";
import { usePost } from "../../../Components/Hooks/usePost";
import { useState } from "react";
import { HiX } from "react-icons/hi";

export default function BoxMateriList({ el, materi }) {
  const updownvote = usePost("request_materi/updownvote", {
    method: "json",
    auth: true,
  });

  const [data, setData] = useState(el);

  const handleVote = async (type_vote) => {
    try {
      const res = await updownvote.saveData({
        id: data?._id,
        type_vote: type_vote,
      });

      if (res.status) {
        setData(res.data);
        console.log("DONE");
      }
    } catch (err) {
      return;
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#D9D9D9",
        }}
        className="bg-[#D9D9D9] p-3 rounded-2xl flex justify-between md:flex-nowrap flex-wrap gap-4"
      >
        <div
          className="flex gap-5 w-full md:flex-nowrap flex-wrap"
          style={{
            gap: "1.25rem",
          }}
        >
          <div>
            <div
              className="w-24 h-24 bg-contain bg-center bg-no-repeat bg-white rounded-xl"
              style={{
                backgroundImage: `url('${URL_BE}/uploads/${
                  data?.gambarMateri || ""
                }')`,
              }}
            />
          </div>
          <div className="flex flex-col gap-2 self-center">
            <p className="text-xl font-medium text-[#292929]">
              {data?.judul || "-"}
            </p>
            <span className="text-md">
              {data?.mapel || "-"} Kelas {data?.jenjangKelas || "-"},{" "}
              {data?.kurikulum || "-"}
            </span>
          </div>
        </div>
        <div className="flex gap-4 self-center mr-2 md:w-fit w-full">
          <div className="md:w-fit w-full">
            <Button
              size={"lg"}
              className={`${data.count_up !== 0 && "bg-slate-500"} md:w-fit w-full`}
              color={"failure"}
              disabled={updownvote.loading}
              onClick={() => handleVote("upvote")}
            >
              {data.count_up !== 0 ? (
                <>
                  {" "}
                  <HiX className="mr-2 h-4 w-4 self-center" /> Cancel
                </>
              ) : (
                <>
                  <ArrowUpIcon className="mr-2 h-4 w-4 self-center" /> Upvote
                </>
              )}
              ({data.count_up || "0"})
            </Button>
          </div>
          {/* <div className=''>
              <Button
                size={"lg"}
                onClick={() => handleVote("downvote")}
                color={"failure"}
                className=''
                disabled={updownvote.loading}>
                <ArrowDownIcon className='mr-2 h-4 w-4 self-center' />
                Downvote ({data?.count_down || "0"})
              </Button>
            </div> */}
        </div>
      </div>
    </>
  );
}
