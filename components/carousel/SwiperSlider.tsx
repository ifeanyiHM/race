"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BlurImage from "../BlurImage";

interface SwiperSliderProps {
  imageList: string[];
  imageType: "svg" | "png";
}

export default function SwiperSlider({
  imageList,
  imageType,
}: SwiperSliderProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        slidesPerView={4} // Number of logos visible at a time
        spaceBetween={40} // Adjust spacing
        loop={true}
        autoplay={{
          delay: 3000, // Adjust speed
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {imageList.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <BlurImage
              src={`/${image}.${imageType}`}
              alt={image}
              width={262}
              height={229}
              classname="mb-7"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
