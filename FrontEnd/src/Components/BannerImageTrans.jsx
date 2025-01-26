export default function BannerImage({ image, title, className }) {
    return (
      <div className="w-full h-screen flex items-center justify-center relative">
        {/* Background Image */}
        <div
          className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: image ? `url(${image})` : 'none',
            width: '50%', // Width of the image container
            height: '40vh', // Height of the image container
            objectFit: 'cover', // Ensures the image fills the container and crops excess parts
          }}
        >
          {/* Title */}
          <div className="absolute w-full h-full flex items-center justify-center">
            {title && (
              <h1 className="text-3xl text-white font-[ClashDisplay] text-center">
                {title}
              </h1>
            )}
          </div>
        </div>
  
        {/* Optional Wave */}
        <div className="absolute bottom-0 w-full">
          <img src="/assets/images/wave.svg" className="w-full" alt="Wave" />
        </div>
      </div>
    );
  }
  