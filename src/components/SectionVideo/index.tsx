'use client'
import { useState } from "react";

export default function SectionVideo({ title }: { title: string }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="py-10 mb-10">
      <div className="flex justify-center items-center flex-col text-center sm:px-10 px-5 max-w-[1000px] m-auto">
        <h1 className="mb-5 sm:text-[32px] text-[24px] font-semibold text-wrap lg:text-nowrap" dangerouslySetInnerHTML={{ __html: title }}>
        </h1>

        <figure
          className="w-full max-w-[800px] aspect-video relative rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(201,160,80,0.5)] cursor-pointer"
          onClick={() => setShowVideo(true)}
        >
          {showVideo ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/hfJMWlZ0GhY?autoplay=1"
              title="Curso Gestão de E-commerce Tegpro"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              {/* Thumbnail */}
              <div
                className="absolute top-0 left-0 w-full h-full bg-center bg-cover brightness-90 saturate-125 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_32px_rgba(201,160,80,0.8)] hover:brightness-100 hover:saturate-150"
                style={{
                  backgroundImage:
                    "url('https://img.youtube.com/vi/hfJMWlZ0GhY/maxresdefault.jpg')",
                }}
              />

              {/* Botão Play customizado (#C9A050) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#C9A050]/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#C9A050]">
                  <div
                    className="ml-1"
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "15px solid transparent",
                      borderBottom: "15px solid transparent",
                      borderLeft: "25px solid white",
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </figure>
      </div>
    </section>
  );
}
