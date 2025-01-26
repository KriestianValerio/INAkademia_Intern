import { Button } from "flowbite-react";
import Footer from "../../Components/Footer/footer";
import Nav from "../../Components/Navbar/Nav";
import NavAdmin from "./components/NavAdmin";
import { Table } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useGet from "../../Components/Hooks/useGet";
import moment from "moment";
import { useDelete } from "../../Hooks/useDelete";
import { toast } from "react-toastify";

export default function TutorPortfolio() {
  const portfolio = useGet("portfolio_tutor", {
    key_data: "portfolio",
    hit_first: true,
  });

  const delete_portfolio = useDelete({
    url: "portfolio_tutor",
    auth: true,
  });

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Apakah yakin ingin menghapus data ini?")) {
        const res = await delete_portfolio.deleteData(id);

        if (res.status) {
          toast.success("Portfolio berhasil dihapus");
          portfolio.fetchData();
          return;
        }
      }
    } catch (err) {
      return;
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <Nav />
        <div className="container mx-auto mt-32 px-3 ">
          <NavAdmin />
          <div className="flex flex-col gap-5">
            <h3 className="text-center text-4xl font-medium font-[ClashDisplay]">
              Portfolio Tutor
            </h3>

            <div className="w-full">
              <div className="flex justify-end">
                <Link to={"/admin/porfolio_tutor/editor"}>
                  <Button color={"failure"}>Tambah Portfolio</Button>
                </Link>
              </div>

              <div className="bg-white border rounded-2xl p-3 mt-8">
                <div className="overflow-x-auto">
                  <Table hoverable>
                    <Table.Head>
                      <Table.HeadCell>Nama</Table.HeadCell>
                      <Table.HeadCell>Deskripsi Singkat</Table.HeadCell>
                      <Table.HeadCell>Tanggal Dibuat</Table.HeadCell>
                      <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                      </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                      {portfolio.loading ? (
                        <p>Loading...</p>
                      ) : (
                        portfolio.data.map((el, i) => {
                          return (
                            <>
                              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {el.namaDepan} {el.namaBelakang}
                                </Table.Cell>
                                <Table.Cell>{el.short_description}</Table.Cell>
                                <Table.Cell>
                                  {moment(el.createdAt).format("DD-MM-YYYY")}
                                </Table.Cell>
                                <Table.Cell>
                                  <div className="flex gap-3">
                                    <Link
                                      to={`/admin/porfolio_tutor/editor/${el._id}`}
                                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                    >
                                      Detail
                                    </Link>
                                    <button
                                      className="!p-0 font-medium text-red-500 hover:underline dark:text-cyan-500"
                                      onClick={() => handleDelete(el._id)}
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </Table.Cell>
                              </Table.Row>
                            </>
                          );
                        })
                      )}
                    </Table.Body>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-64">
          <Footer />
        </div>
      </div>
    </>
  );
}
