"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1756803545/7_eiem1e.jpg",
    title: "Paysage Montagneux",
    description: "Découvrez la beauté naturelle des montagnes majestueuses",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1756803550/4_b7v8kz.jpg",
    title: "Océan Tropical",
    description: "Plongez dans les eaux cristallines des tropiques",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1756803547/23_gf06j7.jpg",
    title: "Forêt Mystique",
    description: "Explorez les secrets cachés de la forêt enchantée",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1756803547/22_ek7wmb.jpg",
    title: "Désert Infini",
    description: "Ressentez la magie du désert sous un ciel étoilé",
  },
];

export default function Carousel() {
  return (
    <div className="w-full max-w-6xl mx-auto relative px-5 mt-20">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="relative"
        breakpoints={{
          0: {
            slidesPerView: 1, // mobile
          },
          768: {
            slidesPerView: 2, // tablette
          },
          1024: {
            slidesPerView: 3, // desktop
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-72 border-4 border-white rounded-xl overflow-hidden shadow-lg">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Style custom pour les flèches */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 35px;
          height: 35px;
          background: white;
          border-radius: 9999px; /* rond */
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 14px; /* plus petit */
          color: black;
        }
      `}</style>
    </div>
  );
}
