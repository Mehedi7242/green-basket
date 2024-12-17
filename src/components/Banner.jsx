import React, { useState, useEffect } from "react";

const images = [
  "https://t3.ftcdn.net/jpg/01/47/51/60/240_F_147516063_hCXI8VUIdBYud0B0hhS3Yo5CFTT1a4g8.jpg",
  "https://t4.ftcdn.net/jpg/01/91/27/77/240_F_191277716_tRLBK7L3YqmILp2MOxYjbrrkGw1v50Ho.jpg",
  "https://t3.ftcdn.net/jpg/03/95/57/94/240_F_395579460_HZNM4cdj0GM86YbvqU9VxVPbilYhnxWv.jpg",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden relative rounded-lg">

      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full min-w-full flex-shrink-0 relative"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[200px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-white  rounded-full hover:text-[#555151]"
      >
        &#8592;
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-white  rounded-full hover:text-[#555151]"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Banner;
