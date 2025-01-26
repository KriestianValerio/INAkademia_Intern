import moment from "moment";
import { limitCharacters } from "../../utils/utils";
import { URL_BE } from "../../utils/axios";

export default function Timeline(el) {
  return (
    <>
      <div className="w-full drop-shadow-2xl rounded-[30px] bg-white">
        <div
          className="bg-cover bg-center bg-no-repeat w-full h-full relative rounded-t-[30px]"
          style={{
            background: `url(${URL_BE}/uploads/${el?.id_gambar || ""})`,
          }}
        >
          <div
            className="w-full h-full absolute top-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(255,255,255,1) 40%, rgba(255,255,255,0.1741071428571429) 100%)",
            }}
          />
          <div className="grid content-center w-full h-full md:max-w-[50%] relative p-12">
            <div className="flex flex-col gap-5 ">
              <h3 className="text-2xl font-bold ">
                {el?.subject?.title} {el?.type_sesi === "series" && "- Seri"}
              </h3>
              <h1 className="text-4xl font-[ClashDisplay]">{el?.judul_seri}</h1>
              <p>{el?.deskripsi_sesi}</p>
              <div className="flex gap-5 md:flex-nowrap flex-wrap font-semibold">
                <p>Jumlah sesi: {el?.jumlah_sesi || 0}</p>
                <p>
                  {el?.type_sesi === "single"
                    ? moment(el.tanggal_sesi).format("DD MMM YYYY")
                    : `${moment(el.start_date).format("DD MMM")} - ${moment(el.end_date).format("DD MMM")}`}
                </p>
                <p>
                  by “{el?.tutor?.namaDepan} {el?.tutor?.namaBelakang}”
                </p>
              </div>
            </div>
          </div>
        </div>
        {el?.series && (
          <div className="px-12 py-10 overflow-x-auto">
            <ol class="flex items-center">
              {el.series.map((sesi, i) => {
                return (
                  <div className="max-w-[300px] w-full shrink-0">
                    <li
                      class={`flex items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-[#000000]  after:border-4 after:inline-block dark:after:border-[#000000] relative`}
                    >
                      <span
                        class={`flex items-center absolute left-[110px] bg-[#E03B37] rounded-full h-8 w-8 shrink-0`}
                      ></span>
                    </li>
                    <div className="max-w-[250px] mt-10">
                      <div className="drop-shadow-2xl p-5 bg-white mt-5 flex flex-col gap-3 place-items-center rounded-[30px]">
                        <p className="text-lg">Sesi {i + 1}</p>
                        <h3 className="text-2xl text-center">
                          {sesi?.judul_seri}
                        </h3>
                        <p className="text-center">
                          {moment(sesi?.tanggal_sesi).format("DD MMMM YYYY")},
                          {moment(sesi?.waktu_sesi, "HH:mm").format("HH:mm A")}
                        </p>
                        <p>{limitCharacters(sesi?.deskripsi_sesi || "", 50)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ol>
          </div>
        )}
      </div>
    </>
  );
}
