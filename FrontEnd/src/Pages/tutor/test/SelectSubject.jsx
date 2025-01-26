import { Button, Label, Select } from "flowbite-react";
import Nav from "../../../Components/Navbar/Nav";
import Footer from "../../../Components/Footer/footer";
import useGet from "../../../Components/Hooks/useGet";
import { usePost } from "../../../Components/Hooks/usePost";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useGetUserInfo } from "../../middleware";

export default function SelectSubject() {
  const [subject, setSubject] = useState("");
  const [user] = useGetUserInfo();
  const navigation = useNavigate();

  const get_subject = useGet("subject", {
    key_data: "subject",
    hit_first: true,
    auth: false,
  });

  useEffect(() => {
    if (user) {
      if (user.status === "in_qualification") {
        navigation(`/qualification/soal/${user.subjectId}`);
      } else if (user.status === "pending_qualification") {
        navigation("/qualification/status");
      }
    }
  }, [user]);

  const navigate = useNavigate();

  const save_subject = usePost("qualification/select_subject", {
    method: "json",
    auth: true,
  });

  const handleSubmit = async () => {
    try {
      if (subject.length === 0) {
        toast.error("Subject harus diisi terlebih dahulu.");
        return;
      }

      const res = await save_subject.saveData({
        subject: subject,
      });

      if (res.status) {
        toast.success("Subject berhasil disimpan");
        navigate(`/qualification/${subject}`);
      }
    } catch (err) {
      return;
    }
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto py-32 mt-10 flex justify-center">
        <div className="max-w-[800px] w-full">
          <h1 className="font-[ClashDisplay] text-4xl mb-5">Pilih subjects</h1>
          <div className="w-full px-10 py-5 bg-[#D9D9D9] rounded-[20px]">
            <div className="flex flex-col gap-5">
              <div className="grid gap-2">
                <Label>Subject</Label>
                <Select
                  id="countries"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                >
                  <option value="">Pilih Subject</option>
                  {(get_subject.data || []).map((el, i) => {
                    return <option value={el._id}>{el.title}</option>;
                  })}
                </Select>
              </div>
              <Button
                pill
                color={"failure"}
                onClick={handleSubmit}
                disabled={save_subject.loading}
              >
                Selanjutnya
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </>
  );
}
