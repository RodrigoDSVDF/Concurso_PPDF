// src/components/EstatisticasSection.jsx

import React from 'react';
import { Hash, Percent, Search, BarChart } from 'lucide-react';
import DataCard from './DataCard.jsx'; // Importa o DataCard
import ppdf05Img from '../assets/ppdf05.jpeg';
import ppdf06Img from '../assets/ppdf06.jpeg';
import ppdf07Img from '../assets/ppdf07.jpeg';

const EstatisticasSection = () => {
    return (
        <section id="estatisticas" className="py-20 px-4 bg-[#0B1016]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-white mb-4">
                    Estatísticas Operacionais da Polícia Penal do DF
                </h2>
                <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
                    Dados relevantes sobre o ambiente de trabalho e a demanda por novos policiais penais no DF.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <DataCard icon={Hash} title="População Carcerária (SEAPE)" value="~16.200" description="Número total de internos (estimativa com base em dados de 2021)." colorClass="text-[#F97316]" />
                    <DataCard icon={Percent} title="Déficit de Cargos" value="~1.286 Vagos" description="Total de cargos vagos (julho/2023), justificando a necessidade de nomeação do CR." colorClass="text-[#8B5CF6]" />
                    <DataCard icon={Search} title="Proporção Policial/Preso" value="Aprox. 1 para 9" description="Relação estimada entre o efetivo atual de policiais penais e a população carcerária." colorClass="text-[#EF4444]" />
                </div>

                {/* Galeria de Imagens - Ilustrando a atuação da PPDF */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <img src={ppdf05Img} alt="Policiais Penais em treinamento" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover h-64 w-full"/>
                    <img src={ppdf06Img} alt="Operação Policial Penal" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover h-64 w-full"/>
                    <img src={ppdf07Img} alt="Viaturas da Polícia Penal" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover h-64 w-full"/>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-500 italic">
                        *Nota: Fonte dos dados: DODF e relatórios públicos da SEAPE/DF e órgãos de controle.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EstatisticasSection;
