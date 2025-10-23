// src/components/GaleriaSection.jsx

import React from 'react';
import ppdf06Img from '../assets/ppdf06.jpeg'; // Reuso da imagem

const GaleriaSection = () => {
    return (
        <section id="galeria" className="py-20 px-4 bg-[#0B1016] border-t border-[#1C2A35]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-white mb-4">
                    Ambiente e Atuação da Polícia Penal
                </h2>
                <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
                    Visão sobre o cotidiano e a importância do trabalho do Policial Penal do DF.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <img src={ppdf06Img} alt="Ambiente prisional ou instalação" className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 object-cover h-96 w-full"/>
                    <div className="p-8 bg-[#1C2A35]/60 border border-[#0D3A46]/50 rounded-xl flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-[#4FD1C5] mb-4">A Importância do Policial Penal</h3>
                        <p className="text-gray-300 text-lg">
                            A Polícia Penal do Distrito Federal é essencial para a segurança pública, garantindo a ordem e a disciplina no sistema prisional. Seu trabalho vai além da custódia, contribuindo para a ressocialização e a manutenção da paz social.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GaleriaSection;
