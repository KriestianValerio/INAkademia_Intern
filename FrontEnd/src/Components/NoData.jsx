export default function NoData({ className = "" }) {
  return (
    <>
      <div
        className={`grid justify-center py-20 gap-5 place-content-center ${className}`}
      >
        <img src="/assets/images/no_data.png" alt="" />
        <h1 className="font-[ClashDisplay] text-3xl text-center md:w-fit w-full">
          Tidak ada data.
        </h1>
      </div>
    </>
  );
}
