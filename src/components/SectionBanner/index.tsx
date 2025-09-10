'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import Image from "next/image"
import LinkButton from "../Link"
import { useState } from "react"
import "animate.css"

export default function SectionBanner({ city, title, description, cityMarilia, cityGarca }: { city: string; title: string; description: string; cityGarca: string; cityMarilia: string; }) {
    const [isHovered, setIsHovered] = useState(false)

    const bgImages = [
        '/background-5.webp',
        '/background-1.webp',
        '/background-2.webp',
        '/background-3.webp',
        '/background-4.webp'
    ]

    return (
        <section className="first-section relative w-full h-[110vh] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="w-full h-full"
                    loop
                >
                    {bgImages.map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-full relative">
                                <Image
                                    src={src}
                                    alt={`background ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="relative z-10 flex justify-start pt-[125px] lg:pt-0 lg:justify-center items-center flex-col p-3 lg:p-5 h-full text-white text-center">
                <div className="max-w-5xl sm:mb-[200px] lg:mb-[70px]">
                    <h1 className="font-black sm:text-[42px] text-[28px]" dangerouslySetInnerHTML={{ __html: title }}>
                    </h1>
                    <p className="py-7 sm:text-[20px] text-[16px] font-bold" dangerouslySetInnerHTML={{ __html: description }}>
                    </p>

                    <div
                        className={`${isHovered ? "animate__animated animate__pulse" : ""}`}
                        onMouseEnter={() => setIsHovered(true)}
                        onAnimationEnd={() => setIsHovered(false)} // reseta para repetir a animação
                    >
                        <LinkButton text="Quero garantir minha vaga agora" />
                    </div>
                </div>

                <div className="bg-black/50 py-2 px-5 rounded-xl mx-3 sm:mx-5 z-[1]">
                    <p className="font-bold sm:text-[16px] text-[14px]">
                        {city != 'Garça'
                            ? <span dangerouslySetInnerHTML={{ __html: cityMarilia }}></span>
                            : <span dangerouslySetInnerHTML={{ __html: cityGarca }}></span>}
                    </p>
                </div>
            </div>
        </section>
    )
}
