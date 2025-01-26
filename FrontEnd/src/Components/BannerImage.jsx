export default function BannerImage({ image, title, className }) {
  return (
    <>
      <div className="w-full h-full">
        <div
          className="w-full md:h-[580px] h-[480px] relative bg-cover bg-center bg-no-repeat -z-10"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div
            className={`absolute w-full h-full bottom-0 bg-black/30 ${className}`}
          ></div>
          <div className="w-full h-full absolute bottom-0 grid">
            <div className="self-center text-center relative top-20">
              <h1 className="text-5xl  text-white font-[ClashDisplay]">
                {title}
              </h1>
            </div>
            <div className="w-full self-end h-fit">
              <img src="/assets/images/wave.svg" className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
