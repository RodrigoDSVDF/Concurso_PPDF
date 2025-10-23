import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp, CheckCircle, Sparkles, User, Lightbulb, Search, Eye, Users, FileText, Calendar, Trophy, BarChart, Clock } from 'lucide-react';
import './App.css';

// Importando as imagens (Mantenha essas linhas)
import ppdf01Img from './assets/ppdf01.png'; // Imagem Principal
import ppdf02Img from './assets/ppdf02.png'; // Imagem de Fundo (ou banner)

// Componente simples para as caixas de dados
const DataCard = ({ icon: Icon, title, value, description, colorClass }) => (
  <div className={`p-6 bg-[#1C2A35]/60 border border-[#0D3A46]/50 rounded-xl transition-all duration-300 hover:border-[#4FD1C5] hover:shadow-lg ${colorClass}`}>
    <div className="flex items-center mb-4">
      <Icon className={`w-8 h-8 mr-3 ${colorClass}`} />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className={`text-4xl font-bold mb-3 ${colorClass}`}>{value}</p>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        
        {/* Elementos de fundo e overlay (mantidos para o visual escuro) */}
        <div className="hidden md:block absolute top-20 left-20 w-72 h-72 bg-[#0D3A46]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-[#0D3A46]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="absolute inset-0 opacity-20">
          <img src={ppdf02Img} alt="Fundo" className="w-full h-full object-cover object-right"/>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1016]/90 via-[#14222E]/80 to-[#0B1016]/85"></div>
        
        {/* Conteúdo Principal */}
        <div className={`relative z-10 text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge Informativo */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#4FD1C5]/30 to-[#38B2AC]/40 border border-[#4FD1C5]/50 rounded-full text-[#4FD1C5] text-sm font-medium mb-8 backdrop-blur-sm">
            <BarChart className="w-4 h-4 mr-2" />
            ANÁLISE DE DADOS E NOMEAÇÕES - CONCURSO PPDF 2022
          </div>

          {/* HEADLINE PRINCIPAL */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Situação Atual dos Aprovados <span className="bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] bg-clip-text text-transparent">Polícia Penal DF</span> 2022
          </h1>

          {/* IMAGEM PRINCIPAL CENTRALIZADA */}
          <div className="mb-8">
            <img
              src={ppdf01Img}
              alt="Imagem Polícia Penal DF"
              className="mx-auto w-64 md:w-80 h-auto rounded-lg shadow-xl border-4 border-[#0D3A46]"
            />
          </div>

          {/* SUBHEADLINE INFORMATIVA */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Acompanhe em detalhes o quantitativo de vagas, a distribuição entre imediatas e Cadastro Reserva, e as informações mais recentes sobre as nomeações.
          </p>

          {/* CHAMADA PARA AÇÃO: Navegação Informativa */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="h-14 px-8 bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] text-black font-bold rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-0"
              onClick={() => scrollToSection('vagas')}
            >
              <FileText className="w-5 h-5 mr-2" />
              Ver Detalhes das Vagas
            </button>
            
            <button
              className="h-14 px-8 border-2 border-[#8AB4B8] text-white font-bold rounded-xl transition-all duration-300 hover:bg-[#1C2A35]"
              onClick={() => scrollToSection('nomeacoes')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Acompanhar Nomeações
            </button>
          </div>
        </div>
        {/* Fim do Conteúdo Hero */}
      </section>

      {/* ==================================================================== */}
      {/* SEÇÃO 1: VAGAS E DISTRIBUIÇÃO OFICIAL (id="vagas") */}
      {/* ==================================================================== */}
      <section id="vagas" className="py-20 px-4 bg-[#14222E]/80 border-t border-b border-[#0D3A46]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Quadro Oficial de Vagas (Edital PPDF 2022)
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Os números abaixo refletem a distribuição prevista no edital, separando as vagas de provimento imediato e o Cadastro Reserva.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <DataCard
              icon={Users}
              title="Vagas Imediatas (Total)"
              value="400"
              description="Vagas com provimento imediato previsto no edital para todos os cargos."
              colorClass="text-[#4FD1C5]"
            />
            <DataCard
              icon={Trophy}
              title="Cadastro Reserva (Total)"
              value="776"
              description="Total de candidatos classificados no Cadastro Reserva (CR) com potencial de nomeação."
              colorClass="text-[#FBBF24]"
            />
            <DataCard
              icon={BarChart}
              title="Total de Vagas Previstas"
              value="1.176"
              description="Soma de vagas imediatas mais o Cadastro Reserva para aproveitamento futuro."
              colorClass="text-[#3B82F6]"
            />
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SEÇÃO 2: ACOMPANHAMENTO DE NOMEAÇÕES (id="nomeacoes") */}
      {/* ==================================================================== */}
      <section id="nomeacoes" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Acompanhamento e Status das Nomeações
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Informações essenciais sobre os atos de nomeação, posse e o andamento do curso de formação.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Box 1: Última Nomeação */}
            <div className="p-8 bg-[#1C2A35]/60 border border-[#0D3A46]/50 rounded-xl">
              <Clock className="w-8 h-8 text-[#FBBF24] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">
                Último Ato de Nomeação
              </h3>
              <p className="text-gray-300 mb-4">
                **Última Atualização de Dados:** 22/10/2025
              </p>
              <p className="text-3xl font-bold text-[#FBBF24] mb-4">
                0 Candidatos Nomeados (Última Publicação)
              </p>
              <p className="text-gray-400">
                Acompanhe o Diário Oficial do Distrito Federal (DODF) para novas publicações. Geralmente, as nomeações ocorrem em lotes conforme a necessidade da SEAPE/DF e a disponibilidade orçamentária.
              </p>
            </div>

            {/* Box 2: Próximos Passos */}
            <div className="p-8 bg-[#1C2A35]/60 border border-[#0D3A46]/50 rounded-xl">
              <Rocket className="w-8 h-8 text-[#4FD1C5] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">
                Próximos Marcos no Cronograma
              </h3>
              <ul className="text-gray-300 space-y-3 list-disc list-inside">
                <li><strong className="text-white">Fase de Ingresso:</strong> Monitoramento dos trâmites administrativos pós-resultado final.</li>
                <li><strong className="text-white">Publicação de Cronograma:</strong> Aguardando o cronograma oficial da SEAPE para o próximo Curso de Formação (se aplicável ao CR).</li>
                <li><strong className="text-white">Validade do Concurso:</strong> Informações sobre a prorrogação da validade do certame.</li>
              </ul>
              <button
                className="mt-6 w-full h-12 border-2 border-[#4FD1C5] text-[#4FD1C5] font-bold rounded-lg transition-all duration-300 hover:bg-[#4FD1C5]/10"
                onClick={() => alert("Simule aqui o andamento")}
              >
                Simulador de Posse (A Desenvolver)
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* FOOTER */}
      {/* ==================================================================== */}
      <section>
        <div className="py-12 px-4 bg-[#0B1016] border-t border-[#1C2A35]">
            <div className="max-w-6xl mx-auto text-center">
              <p className="text-gray-400 text-lg">
                © 2024 CONCURSO PPDF | Site informativo e não oficial.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Acompanhamento baseado em publicações do DODF e informações públicas.
              </p>
            </div>
        </div>
      </section>
    </div>
  );
}

export default App;
