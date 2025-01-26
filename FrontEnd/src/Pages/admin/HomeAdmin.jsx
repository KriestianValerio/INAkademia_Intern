import Footer from "../../Components/Footer/footer";
import useGet from "../../Components/Hooks/useGet";
import Nav from "../../Components/Navbar/Nav";
import NavAdmin from "./components/NavAdmin";
import RequestPeerMateri from "./RequestPeerMateri";

export default function HomeAdmin() {
  const materi = useGet("request_materi/list", {
    key_data: "materi",
    hit_first: true,
  });

  return (
    <>
      <div className="flex flex-col gap-5">
        <Nav />
        <div className="container mx-auto mt-32 px-3 ">
          <NavAdmin />
          <div className="grid gap-20">
            <RequestPeerMateri materi={materi} />
          </div>
        </div>
        <div className="mt-64">
          <Footer />
        </div>
      </div>
    </>
  );
}
