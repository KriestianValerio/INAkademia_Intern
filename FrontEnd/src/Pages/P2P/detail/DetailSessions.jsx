import { Button } from "flowbite-react";
import Footer from "../../../Components/Footer/footer";
import Nav from "../../../Components/Navbar/Nav";
import useGet from "../../../Components/Hooks/useGet";
import { useNavigate, useParams } from "react-router-dom";
import { URL_BE } from "../../../utils/axios";
import Swal from "sweetalert2";
import { usePost } from "../../../Components/Hooks/usePost";
import { toast } from "react-toastify";
import BannerImage from "../../../Components/BannerImage";

export default function DetailSesions() {
  const { id } = useParams();
  const navigate = useNavigate();
  const detail = useGet("session/detail", {
    key_data: "sessions",
    hit_first: true,
    params: {
      id: id,
    },
  });

  const join = usePost("student/join", {
    method: "json",
    auth: true,
  });

  const handleJoin = async () => {
    try {
      Swal.fire({
        title: "Apakah kamu yakin ingin bergabung pada pelajaran ini?",
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Bergabung",
        cancelButtonText: "Batal",
        icon: "question",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await join.saveData({
            id: id,
          });

          if (res.status) {
            toast.success("Kamu berhasil bergabung.");
            navigate("/student/p2p/P2PSessions");
          }
        }
      });
    } catch (err) {
      return;
    }
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col gap-5 xl:mt-24 md:mt-20 mt-14">
        <BannerImage
          image={`${URL_BE}/uploads/${detail.data?.data?.id_gambar || ""}`}
          title={detail.data?.data?.judul_seri || "-"}
        />

        <div className="container mx-auto md:px-0 px-5">
          <div className="w-full flex justify-center">
            <div className="flex flex-col gap-3 md:max-w-[50%] w-full">
              <h3 className="font-[ClashDisplay] text-3xl">Tutor Card</h3>
              <div
                className="bg-white border p-10 rounded-3xl relative"
                style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.75)" }}
              >
                <div className="flex gap-10 md:flex-nowrap flex-wrap">
                  <div className="shrink-0 flex md:justify-start justify-center md:w-fit w-full">
                    <img
                      src="/assets/images/tutor_4.jpeg"
                      className="object-cover w-44 h-44 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-1 self-center">
                    <div>
                      <h1 className="text-[25px]">
                        {detail.data?.data?.tutor.namaDepan || "-"}{" "}
                        {detail.data?.data?.tutor.namaBelakang || "-"}
                      </h1>
                      <p className="text-[18px]">
                        Tutor {detail.data?.data?.subject.title || "-"},{" "}
                        {detail.data?.data?.tutor.detailUser?.asalSekolah ||
                          "-"}
                      </p>
                    </div>
                    <p className="text-[18px] mt-4">
                      Saya adalah mahasiswa aktif dari{" "}
                      {detail.data?.data?.tutor.detailUser?.asalSekolah || "-"},
                      salken!
                    </p>
                  </div>
                </div>
                <div className="absolute right-0 bottom-[1px]">
                  <img
                    src="/assets/images/image_bottom.svg"
                    className="w-[90px] h-[90px]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <p>{detail.data?.data?.deskripsi_sesi || "-"}</p>

            {detail.data?.selected.length === 0 ? (
              <div className="my-20 text-center">
                <h3 className="font-[ClashDisplay] text-3xl">
                  Tertarik untuk bergabung kelas ini?
                </h3>
                <div className="flex justify-center mt-4">
                  <Button
                    pill
                    color={"failure"}
                    size={"xl"}
                    className="px-10"
                    onClick={handleJoin}
                  >
                    Bergabung
                  </Button>
                </div>
              </div>
            ) : (
              <h3 className="font-[ClashDisplay] text-3xl text-center my-28">
                Kamu sudah bergabung pada sesi ini
              </h3>
            )}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
}
