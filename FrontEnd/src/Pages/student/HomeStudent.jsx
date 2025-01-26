import { useParams } from "react-router-dom";
import FileDnd from "../../Components/FileDnd";
import Footer from "../../Components/Footer/footer";
import FormGroup from "../../Components/Form/FormGroup";
import Input from "../../Components/Form/Input";
import useGet from "../../Components/Hooks/useGet";
import Nav from "../../Components/Navbar/Nav";
import ListMateri from "./ListMateri";
import RequestMateri from "./RequestMateri";

export default function HomeStudent() {
  const { id } = useParams();

  const materi = useGet("request_materi/list", {
    key_data: "materi",
    hit_first: true,
    params: {
      id: id,
    },
  });

  return (
    <>
      <div className="flex flex-col gap-5">
        <Nav />
        <div className="container mx-auto mt-32 px-3 ">
          <div className="grid gap-20">
            <RequestMateri materi={materi} id={id} />
            <ListMateri materi={materi} id={id} />
          </div>
        </div>
        <div className="mt-24">
          <Footer />
        </div>
      </div>
    </>
  );
}
