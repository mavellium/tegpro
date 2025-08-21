"use client";
import 'animate.css';

export default function LinkButton({
  text,
  shadow,
  full,
}: {
  text: string;
  shadow?: boolean;
  full?: boolean;
}) {
  const handleClick = () => {
    // if (typeof window !== "undefined" && (window as any).gtag) {
    //   (window as any).gtag("event", "conversion", {
    //     send_to: "AW-CONVERSION_ID/LABEL", 
    //   });
    // }

    setTimeout(() => {
      window.open(
        "https://wa.me/5514988281001?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+o+curso",
        "_blank"
      );
    }, 300);
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Abrir conversa no WhatsApp"
      className={`${full && "sm:w-[350px] w-full"} text-black font-bold px-4 py-2 rounded-lg border border-[var(--primary)] uppercase sm:text-[14px] text-[12px] whitespace-nowrap cursor-pointer transition-all hover:text-white shadow-button-hover ${
        shadow && "shadow-button"
      } z-[1] relative`}
      style={{ background: "var(--gradient)" }}
    >
      {text}
    </button>
  );
}
