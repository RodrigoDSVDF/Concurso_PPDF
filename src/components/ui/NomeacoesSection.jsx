// src/components/NomeacoesSection.jsx

import React from 'react';
import { Gavel, ClipboardCheck, Clock } from 'lucide-react';

// Importa a imagem que será usada nesta seção
import ppdf05Img from '../assets/ppdf05.jpeg'; // Use a imagem que você quiser para esta seção

const NomeacoesSection = () => {
    return (
        <section id="nomeacoes" className="py-20 px-4 bg-[#14222E]/80 border-t border-b border-[#0D3A46]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-white mb-4">
                    Acompanhamento das Próximas Nomeações
                </h2>
                <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
                    Informações essenciais sobre os atos de nomeação, posse e o andamento dos trâmites burocráticos.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    
                    {/* Box 1: Previsão de Chamamento */}
                    <div className="p-8 bg-[#0B1016]/80 border border-[#0D3A46]/50 rounded-xl">
                        <ClipboardCheck className="w-8 h-8 text-[#4FD1C5] mb-4" />
                        <h3 className="text-2xl font-semibold text-white mb-2">Previsões e Próximos Passos</h3>
                        <ul className="text-gray-300 space-y-3 list-disc list-inside">
                            <li><strong className="text-white">LDO 2026:</strong> Previsão orçamentária para nomear até **990** novos servidores.</li>
                            <li><strong className="text-white">Despacho de Crédito:</strong> Solicitação para custear a nomeação de um novo grupo de **150** aprovados em 2025.</li>
                            <li><strong className="text-white">Decisão do TCDF:</strong> Determinação para que o GDF apresente um cronograma de nomeações em 2025.</li>
                        </ul>
                    </div>

                    {/* Box 2: Links e Documentos */}
                    <div className="p-8 bg-[#0B1016]/80 border border-[#0D3A46]/50 rounded-xl">
                        <Gavel className="w-8 h-8 text-[#FBBF24] mb-4" />
                        <h3 className="text-2xl font-semibold text-white mb-2">Links e Documentos Oficiais</h3>
                        <ul className="text-gray-300 space-y-3 list-disc list-inside">
                            <li><strong className="text-white">DODF:</strong> Diário Oficial do Distrito Federal (fonte primária para atos de nomeação).</li>
                            <li><strong className="text-white">SEAPE/DF:</strong> Secretaria de Estado de Administração Penitenciária.</li>
                            <li><strong className="text-white">Instituto AOCP:</strong> Resultados e informações do certame.</li>
                        </ul>
                        <button
                            className="mt-6 w-full h-12 border-2 border-[#FBBF24] text-[#FBBF24] font-bold rounded-lg transition-all duration-300 hover:bg-[#FBBF24]/10"
                            onClick={() => window.open("https://www.dodf.df.gov.br/", "_blank")}
                        >
                            Acessar Diário Oficial do DF
                        </button>
                    </div>
                </div>

                <div className="flex justify-center mt-12">
                    <img 
                        src={ppdf05Img} 
                        alt="Documento oficial de nomeação"
                        className="w-full md:w-3/4 lg:w-2/3 h-auto rounded-xl shadow-lg border-2 border-[#0D3A46]"
                    />
                </div>
            </div>
        </section>
    );
};

export default NomeacoesSection;
