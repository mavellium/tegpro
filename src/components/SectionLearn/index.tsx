import Image from "next/image";
import LinkButton from "../Link";

export default function SectionLearn() {
    return (
        <section className="pt-10">
            <h1 className="font-semibold lg:text-[36px] text-[28px] text-gradient text-center mb-10">
                O que você vai aprender:
            </h1>

            <div className="flex flex-col px-5 lg:px-10 gap-5 items-center m-10">

                {/* BLOCO 1 */}
                <div className="w-full flex justify-center lg:items-start items-center gap-10 lg:flex-row flex-col-reverse relative py-10 lg:py-0 text-center lg:text-start">
                    <div className="max-w-[450px] w-full xl:mt-10">
                        <h1 className="lg:text-[32px] text-[24px] font-extrabold mb-3">
                            Introdução ao <span className="text-nowrap">E-commerce</span> e Identificação de Nichos e Oportunidades
                        </h1>
                        <p className="lg:text-[16px] text-[14px]">
                            Descubra como funciona o jogo do <span className="text-nowrap">e-commerce</span> e aprenda a identificar nichos lucrativos e produtos com alta demanda. Saia da dúvida e comece com clareza e direção.
                        </p>
                    </div>
                    <div className="relative">
                        <Image src={'/desktop-1.avif'} alt="desktop" width={1000} height={660} loading="lazy" />
                        <div className="absolute z-[-1] bottom-[94px] right-[-20px] lg:block hidden xl:bottom-[100px] tv-hidden">
                            <Image src={'/lines-1.png'} alt="desktop" width={400} height={700} loading="lazy" className="lg:hidden xl:w-[600px]" />
                        </div>
                    </div>
                    <div className="absolute z-[-1] bottom-[-130px] lg:block hidden lg:left-[300px] lg:bottom-[-100px] xl:bottom-[-280px] xl:left-[200px] tv-hidden">
                        <Image src={'/lines-2.png'} alt="desktop" width={600} height={700} loading="lazy" className="lg:w-[500px] xl:w-[950px]" />
                    </div>
                </div>

                {/* BLOCO 2 */}
                <div className="w-full flex justify-center lg:items-start items-center gap-10 lg:flex-row flex-col relative py-10 lg:py-0 text-center lg:text-start">
                    <div>
                        <Image src={'/desktop-2.avif'} alt="desktop" width={1000} height={660} loading="lazy" />
                    </div>
                    <div className="max-w-[450px] w-full xl:mt-10">
                        <h1 className="lg:text-[32px] text-[24px] font-extrabold mb-3">
                            Criação de Anúncios de Alta Conversão
                        </h1>
                        <p className="lg:text-[16px] text-[14px]">
                            Aprenda como montar anúncios profissionais que atraem, convencem e convertem. Título, imagem, descrição e estratégia para aparecer e vender mais.
                        </p>
                    </div>
                    <div className="absolute z-[-1] bottom-[-140px] lg:block hidden lg:right-[300px] xl:bottom-[-270px] xl:right-[200px] tv-hidden">
                        <Image src={'/lines-3.png'} alt="desktop" width={600} height={700} loading="lazy" className="lg:w-[500px] xl:w-[950px]" />
                    </div>
                </div>

                {/* BLOCO 3 */}
                <div className="w-full flex justify-center lg:items-start items-center gap-10 lg:flex-row flex-col-reverse relative py-10 lg:py-0 text-center lg:text-start">
                    <div className="max-w-[450px] w-full xl:mt-10">
                        <h1 className="lg:text-[32px] text-[24px] font-extrabold mb-3">
                            Marketing Digital e Estratégias de Publicidade
                        </h1>
                        <p className="lg:text-[16px] text-[14px]">
                            Saiba como impulsionar seus produtos com campanhas no Mercado Livre, Instagram e Facebook. Você vai aprender a investir pouco e atrair muitos — mesmo com orçamento apertado.
                        </p>
                    </div>
                    <div>
                        <Image src={'/desktop-3.avif'} alt="desktop" width={1000} height={660} loading="lazy" />
                    </div>
                    <div className="absolute z-[-1] bottom-[-140px] lg:block hidden lg:left-[300px] xl:bottom-[-260px] xl:left-[200px] tv-hidden">
                        <Image src={'/lines-2.png'} alt="desktop" width={600} height={700} loading="lazy" className="lg:w-[500px] xl:w-[950px]" />
                    </div>
                </div>

                {/* BLOCO 4 */}
                <div className="w-full flex justify-center lg:items-start items-center gap-10 lg:flex-row flex-col relative py-10 lg:py-0 text-center lg:text-start">
                    <div>
                        <Image src={'/desktop-4.avif'} alt="desktop" width={1000} height={660} loading="lazy" />
                    </div>
                    <div className="max-w-[450px] w-full xl:mt-10">
                        <h1 className="lg:text-[32px] text-[24px] font-extrabold mb-3">
                            Atendimento e Reputação no <span className="text-nowrap">E-commerce</span> e Logística de Envio
                        </h1>
                        <p className="lg:text-[16px] text-[14px]">
                            Aprenda a lidar com clientes, manter sua reputação nas alturas e organizar envios com eficiência. Quem atende bem, vende mais — e por mais tempo.
                        </p>
                    </div>
                    <div className="absolute z-[-1] bottom-[-290px] lg:block hidden lg:left-[300px] xl:bottom-[-335px] xl:left-[200px] tv-hidden">
                        <Image src={'/lines-4.png'} alt="desktop" width={600} height={700} loading="lazy" className="lg:w-[500px] xl:w-[950px]" />
                    </div>
                </div>

                {/* BLOCO 5 */}
                <div className="w-full flex justify-center lg:items-center items-center gap-10 lg:flex-row flex-col-reverse pt-10 lg:py-0 text-center lg:text-start">
                    <div className="max-w-[450px] w-full xl:mt-10">
                        <h1 className="lg:text-[32px] text-[24px] font-extrabold mb-3">
                            Estrutura Organizacional e Papel do Gerente de <span className="text-nowrap">E-commerce</span>
                        </h1>
                        <p className="lg:text-[16px] text-[14px] mb-3">
                            Você vai aprender como montar a estrutura do seu <span className="text-nowrap">e-commerce</span>, organizar processos e agir como um verdadeiro gerente, pronto para crescer com consistência.
                        </p>

                        {/* DIV que aplica hover */}
                        <div className="group inline-block transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#C9A050]/50 rounded-xl">
                            <LinkButton text="QUERO APRENDER A VENDER ONLINE" full />
                        </div>
                    </div>
                    <div>
                        <Image src={'/desktop-5.avif'} alt="desktop" width={1000} height={660} loading="lazy" />
                    </div>
                </div>


            </div>
        </section>
    );
}
