'use client'
import Image from "next/image";
import { useState } from "react";

export default function About() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <section className="px-5 sm:px-10">
            <div className="flex flex-col-reverse lg:flex-row p-5 sm:p-10 gap-10 justify-center items-center">
                <div>
                    <h2 className="font-bold sm:text-[16px] text-[14px] pb-2">
                        Por que aprender com Doni muda o jogo?
                    </h2>
                    <h1 className="font-bold sm:text-[48px] text-[36px] mb-10">
                        Donizete Caetano
                    </h1>

                    <div className="flex flex-col items-start justify-start">
                        <div className="flex mb-3">
                            {/* Botão 1 */}
                            <button
                                onClick={() => setActiveTab(1)}
                                className={`py-3 px-2 sm:px-4 rounded-l-lg font-bold cursor-pointer sm:text-[16px] text-[12px] transition-all duration-300
                                    ${activeTab === 1
                                        ? 'bg-gradient text-black'
                                        : 'bg-[#141414] text-[#ccc] hover:bg-[#2b2b2b] hover:text-white'
                                    }
                                    ${activeTab !== 1 ? 'hover:brightness-125' : ''}`}
                                aria-label="Botão fundador da tegbe"
                            >
                                Fundador da TegBe
                            </button>

                            {/* Botão 2 */}
                            <button
                                onClick={() => setActiveTab(2)}
                                className={`py-3 px-2 sm:px-4 rounded-r-lg font-bold cursor-pointer sm:text-[16px] text-[14px] transition-all duration-300
                                    ${activeTab === 2
                                        ? 'bg-gradient text-black'
                                        : 'bg-[#141414] text-[#ccc] hover:bg-[#2b2b2b] hover:text-white'
                                    }`}
                                aria-label="Consultor oficial do mercado livre"
                            >
                                Consultor oficial do Mercado Livre
                            </button>
                        </div>

                        <div className="bg-[#2b2b2b] p-8 rounded-lg max-w-[700px]">
                            {activeTab === 1 && (
                                <p className="text-[#F0F0F0] flex flex-col gap-5 lg:min-h-[250px] lg:max-h-[250px]">
                                    <span>Doni criou a Agência TegBe para ajudar empreendedores a venderem de forma prática e estratégica.</span>
                                    <span>A agência atua no estado de São Paulo, com foco em tráfego pago, criação de campanhas de alta performance e estruturação de vendas para produtos físicos.</span>
                                    <span>É da experiência direta com esses negócios que nasceu o método TegPro — validado no campo, com resultados reais.</span>
                                </p>
                            )}

                            {activeTab === 2 && (
                                <p className="text-[#F0F0F0] flex flex-col gap-5 lg:min-h-[250px] lg:max-h-[250px]">
                                    <span>Consultor certificado oficialmente pelo Mercado Livre em vendas e estruturação de lojas na plataforma.</span>
                                    <span>Já ajudou dezenas de vendedores a crescerem no maior marketplace da América Latina, utilizando anúncios otimizados, posicionamento estratégico e técnicas práticas que aumentam visibilidade, tráfego e conversão.</span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-10 lg:mt-0">
                    <Image
                        src={'/doni.avif'}
                        alt="Donizete Caetano, CEO Tegbe"
                        width={534}
                        height={761}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
