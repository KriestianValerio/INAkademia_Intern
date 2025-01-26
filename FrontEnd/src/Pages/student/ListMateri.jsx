import { Button, Dropdown } from "flowbite-react";
import BoxMateriList from "./components/BoxMateriList";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function ListMateri({ materi, id }) {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (!materi.loading) {
      materi.fetchData({
        filter: filter.length === 0 ? "all" : filter,
        id: id,
      });
    }
  }, [filter]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 justify-between md:flex-nowrap flex-wrap">
          <h3 className="text-4xl font-medium font-[ClashDisplay] w-full">
            Materi Lainnya
          </h3>
          <div className="self-center w-full">
            <div className="flex gap-2 justify-end">
              <Dropdown
                label="Filter"
                color={"failure"}
                dismissOnClick={true}
                className=""
              >
                <Dropdown.Item
                  value={"most_upvote"}
                  onClick={(e) => setFilter("most_upvote")}
                >
                  Upvote terbanyak
                </Dropdown.Item>
                <Dropdown.Item
                  value={"less_upvote"}
                  onClick={(e) => setFilter("less_upvote")}
                >
                  Upvote paling sedikit
                </Dropdown.Item>
              </Dropdown>
              {filter.length !== 0 && (
                <Button outline onClick={() => setFilter("")}>
                  <XMarkIcon className="w-5 h-5 mr-2 self-center" /> Reset
                </Button>
              )}
            </div>
          </div>
        </div>
        <div
          className="flex flex-col gap-5 mt-3"
          style={{
            gap: "1.25rem",
          }}
        >
          {materi.loading ? (
            Array.from({ length: 5 }).map((_, i) => {
              return <Skeleton height={110} className="rounded-xl" />;
            })
          ) : materi.data.length !== 0 ? (
            materi.data.map((el, i) => {
              return <BoxMateriList el={el} key={i} materi={materi} />;
            })
          ) : (
            <>
              <div className="text-center">Materi tidak tersedia</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
