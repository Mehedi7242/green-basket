import React, { useState, useEffect } from "react";

const images = [
  "https://t4.ftcdn.net/jpg/10/61/61/07/240_F_1061610744_IvIeHDIZmFx3x8gsJfmf6bno7CxPg2L3.jpg",
  "https://t4.ftcdn.net/jpg/01/91/27/77/240_F_191277716_tRLBK7L3YqmILp2MOxYjbrrkGw1v50Ho.jpg",
  "https://cdn.pixabay.com/photo/2017/07/20/09/24/white-cabbage-2521700_960_720.jpg",
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
