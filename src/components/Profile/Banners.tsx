"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export function BannersProfile() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className} bg-red-500"> </span>`;
    },
  };
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={pagination}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Image
            className="h-[25vh] object-cover"
            src={"/galeria/rede-economia-av1/2022-08-23.jpg"}
            alt={"imagem ilustrativa"}
            width={1500}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="h-[25vh] object-cover"
            src={"/galeria/rede-economia-av1/2024-02-26.jpg"}
            alt={"imagem ilustrativa"}
            width={1500}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="h-[25vh] object-cover"
            src={"/galeria/rede-economia-av1/redeeconomiaitaipuacu1.jpg"}
            alt={"imagem ilustrativa"}
            width={1500}
            height={700}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
