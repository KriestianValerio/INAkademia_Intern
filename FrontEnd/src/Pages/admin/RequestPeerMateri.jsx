import Skeleton from "react-loading-skeleton";
import BoxPeerMateri from "./components/BoxPeerMateri";
import "react-loading-skeleton/dist/skeleton.css";

export default function RequestPeerMateri({ materi }) {
  return (
    <>
      <div className='flex flex-col gap-10'>
        <h3 className='text-center text-4xl font-medium font-[ClashDisplay]'>
          Requests from Peers
        </h3>

        <div className='grid grid-cols-1 gap-14 xl:grid-cols-3 md:grid-cols-2'>
          {materi.loading ? (
            Array.from({ length: 5 }).map((_, i) => {
              return <Skeleton height={384} className='rounded-xl' />;
            })
          ) : materi.data.length !== 0 ? (
            materi.data.map((el, i) => {
              return <BoxPeerMateri materi={materi} el={el} key={i} />;
            })
          ) : (
            <>
              <div className='text-center'>Materi tidak tersedia</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
