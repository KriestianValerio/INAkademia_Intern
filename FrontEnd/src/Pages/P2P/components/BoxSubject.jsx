import { Link } from "react-router-dom";
import { URL_BE } from "../../../utils/axios";
import { useDelete } from "../../../Hooks/useDelete";
import Swal from "sweetalert2";
import { HiX } from "react-icons/hi";

export default function BoxSubject(el) {
  const delete_subject = useDelete({
    url: "student/select_subject",
    auth: true,
  });

  const handleDeleteSubject = async (id) => {
    try {
      Swal.fire({
        title: "Apakah kamu yakin ingin menghapus pelajaran?",
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Hapus",
        cancelButtonText: "Batal",
        text: "Tindakan ini tidak bisa dibatalkan, data pelajaran kamu akan dihapus dan tidak bisa dikembalikan",
        icon: "question",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await delete_subject.deleteData(id);
          if (res.status) {
            el.get_selected.fetchData();
            Swal.fire("Dihapus!", "", "success");
          }
        }
      });
    } catch (err) {
      return;
    }
  };

  return (
    <>
      <div
        className={`w-full md:max-w-[300px] md:h-[400px] h-[320px] max-[400px]:h-[360px] rounded-3xl relative hover:opacity-80 transition-all duration-500 justify-self-center`}
        style={{ backgroundColor: `${el.subject.color}` }}
      >
        <div className="absolute right-3 top-3">
          <button
            className="text-white"
            onClick={() => handleDeleteSubject(el.subject._id)}
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>
        <Link to={`/student/p2p/P2PSessions/${el.subject._id}`}>
          <div className="w-full h-full p-5 py-8 grid">
            <div className="font-bold text-center text-white md:text-3xl text-xl">
              {el.subject.title}
            </div>
            <div className="flex justify-center">
              <div className="w-full md:p-10 p-5">
                <img
                  src={`${URL_BE}/uploads/${el.subject?.image || ""}`}
                  alt={el.subject?.image}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
