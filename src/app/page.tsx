'use client'
import About from "@/components/About";
import Assessment from "@/components/Assessment";
import ButtonWhatsapp from "@/components/ButtonWhatsapp";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionBanner from "@/components/SectionBanner";
import SectionImages from "@/components/SectionImages";
import SectionLearn from "@/components/SectionLearn";
import SectionVideo from "@/components/SectionVideo";
import TableBenefits from "@/components/TableBenefits";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const fallbackData = {
  "title-init":
  "Quer saber se o TegPro é pra você? Assista ao vídeo abaixo.",
  "description-init": `Quer saber se o TegPro é pra você? Assista ao vídeo abaixo.`,
  "title-video": "Quer saber se o TegPro é pra você? Assista ao vídeo abaixo.",
  "description-video":
    "Estudos mostram que muitas pequenas e médias empresas falham no digital — não por falta de investimento, mas por focar em  <b>métricas de vaidade</b> (curtidas, alcance) e negligenciar uma estratégia de  <b>vendas real.</b> <br /> <br /> <b>   Talvez sua empresa esteja nesse grupo. </b> <br /> <br /> Na <b>TegBe</b>, mudamos esse cenário com estratégia, automação e inteligência comercial para transformar o digital em um canal de <b> lucro real</b> — e não só de likes.",
  "title-funil": "Esqueça o funil de vendas",
  "description-funil": `O objetivo principal do modelo <br /> Flywheel é <b className="font-bold">construir audiência</b><br />com conteúdo,<br /> <b> engajar o público,<br /> criar confiança<br /> e expandir a memória </b><br /> por meio das experiências.`,
  "description-decisao": `
    Esses alunos escolheram agir — e hoje sabem exatamente como vender na internet. <strong> Você está a uma escolha de distância.</strong>
`,
};

export default function Home() {
  const [data, setData] = useState<any>(fallbackData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://mavellium-dashboard.vercel.app/api/tegpro");
        if (!res.ok) throw new Error("Erro ao buscar dados");
        const json = await res.json();
        setData(json.values);
      } catch (error) {
        console.error("Erro no fetch:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const router = useRouter();
  const [cityParam, setCityParam] = useState('Garça');

  useEffect(() => {
    const cidadePadrao = 'Garça';

    const params = new URLSearchParams(window.location.search);
    const existingCity = params.get('city');
    if (existingCity) {
      setCityParam(existingCity);
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          const fetchCity = async () => {
            try {
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
              );
              const data = await response.json();

              const city =
                data.address.city ||
                data.address.town ||
                data.address.village ||
                data.address.hamlet;

              if (city) {
                setCityParam(city);
                const cityEncoded = encodeURIComponent(city);
                router.replace(`/?city=${cityEncoded}`);
              } else {
                router.replace(`/?city=${encodeURIComponent(cidadePadrao)}`);
              }
            } catch (err) {
              router.replace(`/?city=${encodeURIComponent(cidadePadrao)}`);
            }
          };

          fetchCity();
        },
        () => {
          router.replace(`/?city=${encodeURIComponent(cidadePadrao)}`);
        }
      );
    } else {
      router.replace(`/?city=${encodeURIComponent(cidadePadrao)}`);
    }
  }, [router]);

  return (
    <>
      <Header />
      <main>
        <SectionBanner city={cityParam} title={data["title-init"]} description={data["description-init"]} cityGarca={data["title-garca"]} cityMarilia={data["title-marilia"]} />
        <SectionVideo title={data["title-video"]} />
        <SectionImages title={data["title-decisao"]} description={data["description-decisao"]} />
        <Assessment />
        <SectionLearn />
        <About />
        <TableBenefits />
        <Faq />
      </main>
      <Footer />
      <ButtonWhatsapp />
    </>
  );
}
