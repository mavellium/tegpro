"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import LinkButton from "../Link";
import { useState } from "react";
import "animate.css";

const alunos = [
  "/imagem-aluno1.avif",
  "/imagem-aluno2.avif",
  "/imagem-aluno3.avif",
  "/imagem-aluno4.avif",
  "/imagem-aluno5.avif",
  "/imagem-aluno6.avif",
  "/imagem-aluno7.avif",
  "/imagem-aluno8.avif",
  "/imagem-aluno9.avif",
  "/imagem-aluno10.avif",
  "/imagem-aluno11.avif",
  "/imagem-aluno12.avif",
  "/imagem-aluno13.avif",
  "/imagem-aluno14.avif",
  "/imagem-aluno15.avif",
  "/imagem-aluno16.avif",
  "/imagem-aluno17.avif",
  "/imagem-aluno18.avif",
];

export default function SectionImages({ title, description }: {title: string; description: string;}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-10 bg-[#060606]">
      <h1 className="font-semibold sm:text-[32px] text-[24px] text-gradient text-center mb-5">
        Alunos TegPro
      </h1>

      <Swiper
        slidesPerView={4.5}
        breakpoints={{
          0: { slidesPerView: 2.5 },
          750: { slidesPerView: 4.5 },
        }}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {alunos.map((img, index) => (
          <SwiperSlide key={index}>
            <figure className="border-[2px] border-[var(--primary)] flex justify-center items-center relative">
              <Image
                src={img}
                width={300}
                height={300}
                alt={`aluno ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-0 w-full h-full">
                <Image
                  src="/overlay.avif"
                  alt="overlay imagem"
                  width={300}
                  height={300}
                  className="w-full h-full object-fill"
                  loading="lazy"
                />
              </div>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-center py-10 my-10 px-5 gap-10 text-[#F0F0F0] flex-wrap">
        <div className="max-w-[600px] sm:text-start text-center">
          <h2 className="text-gradient sm:text-[32px] text-[24px] font-bold mb-3 text-center sm:text-start" dangerouslySetInnerHTML={{ __html: title }}>
          </h2>
          <p className="sm:text-[16px] text-[14px] text-center sm:text-start max-w-[300px]"  dangerouslySetInnerHTML={{ __html: description }}>
          </p>
        </div>

        <div
          className={`${
            isHovered ? "animate__animated animate__flipInX" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onAnimationEnd={() => setIsHovered(false)}
        >
          <LinkButton text="QUERO APRENDER A VENDER ONLINE" shadow />
        </div>
      </div>
    </section>
  );
}
