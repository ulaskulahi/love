// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type Slide = {
  image: string;
  title: string;
  description: string;
  date: string;
};

const sliderData: Slide[] = [
  {
    image: "/1.jpg",
    title: "İlk Gece",
    description: "Beni otele bıraktıktan sonra seni uğurlarken.",
    date: "Kasım 20, 2024",
  },
  {
    image: "/2.jpg",
    title: "İlk Yılbaşı",
    description: "Beraber geçireceğimiz onlarca yılbaşının ilki.",
    date: "Ocak 1, 2025",
  },
  {
    image: "/3.jpg",
    title: "Bilardo",
    description:
      "Beni bir kere değil, iki kere değil, tam üç kere yenerek güzel bir ders verdin.",
    date: "Aralık 2, 2024",
  },
  {
    image: "/4.jpg",
    title: "Flamingo",
    description: "Flamingoları görmeye gidip bizim iki flamingo olduğumuz gün.",
    date: "Aralık 12, 2024",
  },
  {
    image: "/5.jpg",
    title: "Yolculuk",
    description: "Seninle her yere gitmek çok güzel.",
    date: "Aralık 15, 2024",
  },
  {
    image: "/6.jpg",
    title: "Matching Socks",
    description: "Bana sonunda aldırdığın beyaz uzun çoraplar.",
    date: "Aralık 18, 2024",
  },
  {
    image: "/7.jpg",
    title: "İlk Kahvaltı",
    description:
      "Seninle kahvaltı yapmanın hobilerimden birisi olduğuna karar verdiğim gün.",
    date: "Kasım 20, 2024",
  },
  {
    image: "/8.jpg",
    title: "İlk Uzun Yol",
    description: "Bodrum'a giderken.",
    date: "Kasım 27, 2024",
  },
  {
    image: "/9.jpg",
    title: "İlk Çiçek",
    description: "Sana söz verdiğim beyaz gülleri zaman bulup alabildiğim gün.",
    date: "Ocak 6, 2025",
  },
];
const PhotoSlider = () => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        breakpoints={{
          650: {
            slidesPerView: 2, // Show 2 slides from 650px onward
          },
          0: {
            slidesPerView: 1, // Show 1 slide below 650px
          },
        }}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        autoplay={{
          delay: 4000,
        }}
        speed={1500}
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[650pxs] rounded-lg overflow-hidden">
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[650px] object-cover rounded-lg"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
              {/* Text Overlay */}
              <div className="absolute bottom-4 left-4 text-white">
                <h1 className="text-xl font-bold">{item.title}</h1>
                <p className="text-sm">{item.description}</p>
                <p className="text-xs opacity-80">{item.date}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <button className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 text-white  p-2 z-50 text-3xl ">
          {"<"}
        </button>
        <button className="custom-next absolute right-2 top-1/2 -translate-y-1/2 text-white  p-2  z-50 text-3xl ">
          {">"}
        </button>
      </Swiper>
    </div>
  );
};

export default PhotoSlider;
