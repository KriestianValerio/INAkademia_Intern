import { useState } from "react";
import Footer from "../../../Components/Footer/footer";
import Nav from "../../../Components/Navbar/Nav";
import { useGetUserInfo } from "../../middleware";

export default function Status() {
  const [user] = useGetUserInfo();

  return (
    <>
      <Nav />
      <div className="container mx-auto py-32 mt-10 flex justify-center">
        <div className="max-w-[800px] w-full">
          <h1 className="font-[ClashDisplay] text-4xl mb-5">
            Status Qualification
          </h1>
          <div className="w-full px-10 py-5 bg-[#D9D9D9] rounded-[20px]">
            <div className="flex flex-col gap-5">
              <div className="grid gap-2">
                <div className="w-full h-full p-3 bg-red-500 text-white font-bold text-center rounded-2xl capitalize">
                  {user?.status || "-"}
                </div>
              </div>
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
