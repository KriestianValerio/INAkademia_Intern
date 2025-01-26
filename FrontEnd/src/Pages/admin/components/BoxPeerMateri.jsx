import { Button } from "flowbite-react";
import { URL_BE } from "../../../utils/axios";
import { useState } from "react";
import { usePut } from "../../../Hooks/usePut";
import { toast } from "react-toastify";
import ConfimationAlert from "./ConfimationAlert";

const customTheme = {
  button: {
    color: {
      gray: "bg-red-500 hover:bg-red-600",
    },
  },
  pill: {
    off: "",
    on: "",
  },
};

export default function BoxPeerMateri({ el, materi }) {
  const [data, setData] = useState(el);
  const [open, setOpen] = useState({
    open: false,
    handleAction: undefined,
  });

  const accept_request = usePut("request_materi/accept_request", {
    method: "json",
    auth: true,
  });

  const handleValidationRequest = async (status_request) => {
    try {
      const res = await accept_request.updateData({
        id: el._id,
        status_request: status_request,
      });

      if (res.status) {
        toast.success("Status request berhasil diubah");
        setData(res.data);
        setOpen({
          open: false,
          handleAction: undefined,
        });
      }
    } catch (err) {
      return;
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url('${URL_BE}/uploads/${
            data?.gambarMateri || ""
          }')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={
          "w-full h-96 transition-all hover:shadow-xl duration-200 relative rounded-3xl"
        }>
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.8015581232492998) 0%, rgba(0,212,255,0) 100%)",
          }}
          className='absolute top-0 h-full w-full bg-gradient-to-t from-[#000]/50 to-[#000]/0 rounded-3xl'>
          <div className='grid w-full h-full items-end text-wrap'>
            <div className='flex flex-col'>
              <div className='p-3'>
                <p className='text-white text-3xl font-semibold font-[ClashDisplay]'>
                  {data?.judul || "-"}
                </p>
                <p className='text-white text-xl font-semibold '>
                  {data?.mapel || "-"} Kelas {data?.jenjangKelas || "-"},{" "}
                  {data?.kurikulum || "-"}
                </p>
              </div>
              {data?.status !== "accepted" ? (
                <Button.Group>
                  <Button
                    className='w-full bg-[#D9D9D9] hover:bg-[#D9D9D9]'
                    size={"xl"}
                    theme={customTheme}
                    style={{
                      borderBottomLeftRadius: "1.2rem",
                      backgroundColor: "#D9D9D9",
                    }}
                    color=''
                    onClick={() => {
                      setOpen({
                        open: true,
                        handleAction: () => handleValidationRequest("declined"),
                      });
                    }}>
                    <span className='text-lg'>Decline</span>
                  </Button>
                  <Button
                    className='w-full'
                    theme={customTheme}
                    style={{
                      borderBottomRightRadius: "1.2rem",
                      backgroundColor: "#E03B37",
                      color: "#FFF",
                    }}
                    size={"xl"}
                    color=''
                    onClick={() => {
                      setOpen({
                        open: true,
                        handleAction: () => handleValidationRequest("accepted"),
                      });
                    }}>
                    <span className='text-lg'>Accept</span>
                  </Button>
                </Button.Group>
              ) : (
                <>
                  <Button
                    className='w-full bg-[#D9D9D9] hover:bg-[#D9D9D9]'
                    size={"xl"}
                    theme={customTheme}
                    style={{
                      borderBottomRightRadius: "1.2rem",
                      borderBottomLeftRadius: "1.2rem",
                      backgroundColor: "#D9D9D9",
                    }}
                    color=''
                    onClick={() => {
                      setOpen({
                        open: true,
                        handleAction: () => handleValidationRequest("declined"),
                      });
                    }}>
                    <span className='text-lg'>Decline</span>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <ConfimationAlert setOpen={setOpen} open={open} />
    </>
  );
}
