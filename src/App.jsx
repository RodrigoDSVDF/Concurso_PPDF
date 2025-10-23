// src/App.jsx

import { useState, useEffect } from 'react';
import { Clock, BarChart, FileText } from 'lucide-react';
import './App.css';

// 1. IMPORTAÇÕES DOS COMPONENTES DE SEÇÃO:
import VagasSection from './components/VagasSection.jsx';
import EstatisticasSection from './components/EstatisticasSection.jsx';
import NomeacoesSection from './components/NomeacoesSection.jsx';
import GaleriaSection from './components/GaleriaSection.jsx';

// 2. IMPORTAÇÕES DE IMAGENS QUE FICAM SOMENTE NA HERO SECTION:
import ppdf01Img from './assets/ppdf01.png'; 
import ppdf02Img from './assets/ppdf02.png'; 

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B1016] font-['Poppins',sans-serif] overflow-x-hidden">

      {/* ==================================================================== */}
      {/* HERO SECTION */}
      {/* ==================================================================== */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        
        {/* Elementos de fundo e overlay */}
        <div className="absolute inset-0 opacity-20">
          <img src={ppdf02Img} alt="Fundo" className="w-full h-full object-cover object-right"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1016]/90 via-[#14222E]/80 to-[#0B1016]/85"></div>
        
        {/* Conteúdo Principal */}
        <div className={`relative z-10 text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#4FD1C5]/30 to-[#38B2AC]/40 border border-[#4FD1C5]/50 rounded-full text-[#4FD1C5] text-sm font-medium mb-8 backdrop-blur-sm">
            <BarChart className="w-4 h-4 mr-2" />
            INFORMATIVO E ACOMPANHAMENTO - CONCURSO PPDF 2022
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Análise e Nomeações dos Aprovados <span className="bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] bg-clip-text text-transparent">Polícia Penal DF</span>
          </h1>

          <div className="mb-8">
            <img
              src={ppdf01Img}
              alt="Imagem Polícia Penal DF"
              className="mx-auto w-64 md:w-80 h-auto rounded-lg shadow-xl border-4 border-[#0D3A46]"
            />
          </div>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Dados consolidados sobre o certame PPDF 2022, status das convocações e estatísticas operacionais do sistema prisional do Distrito Federal.
          </p>

          {/* Menus Maiores e Profissionais */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="h-16 px-10 bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] text-black text-lg font-bold rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 flex items-center justify-center"
              onClick={() => scrollToSection('vagas')}
            >
              <FileText className="w-6 h-6 mr-3" />
              Ver Detalhes do Concurso
            </button>
            
            <button
              className="h-16 px-10 border-2 border-[#8AB4B8] text-white text-lg font-bold rounded-xl transition-all duration-300 hover:bg-[#1C2A35] flex items-center justify-center"
              onClick={() => scrollToSection('estatisticas')}
            >
              <BarChart className="w-6 h-6 mr-3" />
              Ver Estatísticas PPDF
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SEÇÕES EXTERNAS (COMPONENTES) */}
      {/* ==================================================================== */}
      
      <VagasSection />
      <EstatisticasSection />
      <NomeacoesSection />
      <GaleriaSection />
      
      {/* ==================================================================== */}
      {/* FOOTER */}
      {/* ==================================================================== */}
      <section>
        <div className="py-12 px-4 bg-[#0B1016] border-t border-[#1C2A35]">
            <div className="max-w-6xl mx-auto text-center">
              <p className="text-gray-400 text-lg">
                © 2024 INFORMATIVO CONCURSO PPDF | Dados do concurso 2022.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Site de acompanhamento baseado em publicações do DODF e relatórios públicos.
              </p>
            </div>
        </div>
      </section>
    </div>
  );
}

export default App;
