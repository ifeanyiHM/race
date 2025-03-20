import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Link from "next/link";
import { EffectCoverflow } from "swiper/modules";
import { countries } from "../../utils/constant";
import BlurImage from "../BlurImage";

export function CountriesSwiper() {
  return (
    <div className="w-full">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          slideShadows: false,
          modifier: 3,
        }}
        modules={[EffectCoverflow]}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 100,
          },
          1024: {
            spaceBetween: 100,
            slidesPerView: 2,
          },
          1280: {
            spaceBetween: 130,
            slidesPerView: 2,
          },
        }}
      >
        <ul className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto grid grid-cols-2 gap-3 md:gap-8">
          {countries.map((country, index) => (
            <SwiperSlide key={index}>
              <li key={country} className="text-center w-full">
                <Link href={country.toLowerCase()} className="space-y-3">
                  {" "}
                  <div className="relative overflow-hidden group rounded-md md:rounded-xl lg:rounded-2xl w-full">
                    <BlurImage
                      src={`/country${index + 1}.png`}
                      alt={`country${index}`}
                      width={550}
                      height={376}
                      classname="shadow-[inset_25px_35px_35px_rgba(0,0,0,0.5)] w-full"
                    />
                    {/* <Image
                className="block rounded-[5px]"
                src={`/homepageImages/moments/moment-desktop${1}.png`}
                alt="moment"
                layout="responsive"
                width="657"
                height="519"
              /> */}
                    <div className="absolute inset-0 group-hover:shadow-[inset_0_25px_35px_rgba(0,0,0,0.2)] rounded-md md:rounded-xl lg:rounded-2xl"></div>
                  </div>
                  <p className="text-sm md:text-base lg:text-xl font-semibold text-[#333333]">
                    Study in {country}
                  </p>
                </Link>
              </li>
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </div>
  );
}
