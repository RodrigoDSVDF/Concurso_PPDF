import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp, CheckCircle, Sparkles, User, Lightbulb, Search, Eye, Users, FileText, Calendar, Trophy, BarChart, Clock, Hash, Percent, Gavel, Award, ShieldCheck, TrendingDown, ClipboardCheck } from 'lucide-react';
import './App.css';

// Importando APENAS as imagens .png, .jpg e .jpeg
import ppdf01Img from './assets/ppdf01.png'; 
import ppdf02Img from './assets/ppdf02.png'; 
import ppdf04Img from './assets/ppdf04.jpg'; 
import ppdf05Img from './assets/ppdf05.jpeg'; 
import ppdf06Img from './assets/ppdf06.jpeg'; 
import ppdf07Img from './assets/ppdf07.jpeg'; 
// ppdf08.webp e ppdf09.webp foram desconsideradas.

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

      {/* ==================================================================== */}
      {/* HERO SECTION */}
      {/* ==================================================================== */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        
        {/* Elementos de fundo e overlay */}
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
            INFORMATIVO E ACOMPANHAMENTO - CONCURSO PPDF 2022
          </div>

          {/* HEADLINE PRINCIPAL */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Análise e Nomeações dos Aprovados <span className="bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] bg-clip-text text-transparent">Polícia Penal DF</span>
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
            Dados consolidados sobre o certame PPDF 2022, status das convocações e estatísticas operacionais do sistema prisional do Distrito Federal.
          </p>

          {/* CHAMADA PARA AÇÃO: Navegação Informativa (Menus Maiores) */}
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
      {/* SEÇÃO 1: VAGAS, NOMEAÇÕES E DISTRIBUIÇÃO OFICIAL (id="vagas") */}
      {/* ==================================================================== */}
      <section id="vagas" className="py-20 px-4 bg-[#14222E]/80 border-t border-b border-[#0D3A46]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Análise do Concurso PPDF 2022 (Vagas e Nomeações)
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Acompanhamento dos números oficiais, nomeações já realizadas e projeções futuras.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <DataCard
              icon={Users}
              title="Vagas Imediatas (Edital)"
              value="400"
              description="Total de vagas de provimento imediato previstas no Edital (preenchidas em diversas turmas)."
              colorClass="text-[#4FD1C5]"
            />
            <DataCard
              icon={Trophy}
              title="Cadastro Reserva (CR)"
              value="779"
              description="Candidatos classificados no CR com potencial de nomeação dentro da validade do concurso."
              colorClass="text-[#FBBF24]"
            />
             <DataCard
              icon={CheckCircle}
              title="Nomeações Registradas"
              value="~272" 
              description="Conjunto de nomeações já publicadas no DODF (até Nov/2024 - Fonte: Artigos de Concursos)."
              colorClass="text-[#3B82F6]"
            />
            <DataCard
              icon={TrendingUp}
              title="Projeção LDO 2026"
              value="990" 
              description="Previsão orçamentária para nomeações de Policiais Penais do DF na Lei de Diretrizes Orçamentárias 2026."
              colorClass="text-[#EF4444]"
            />
          </div>
          
          {/* Imagem de Contexto para Vagas/Nomeações */}
          <div className="flex justify-center mb-12">
            <img 
              src={ppdf04Img}
              alt="Policiais Penais em formatura ou posse"
              className="w-full md:w-3/4 lg:w-2/3 h-auto rounded-xl shadow-lg border-2 border-[#0D3A46]"
            />
          </div>

          <div className="mt-10 p-6 bg-[#0D3A46]/70 rounded-lg border-l-4 border-[#4FD1C5] text-white">
              <p className="font-semibold text-lg flex items-center">
                  <Clock className="w-5 h-5 mr-2" /> Validade do Concurso
              </p>
              <p className="text-gray-300 mt-1">
                  A validade do concurso de 2022 foi **prorrogada até agosto de 2027**, garantindo mais tempo para o chamamento dos candidatos do Cadastro Reserva.
              </p>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SEÇÃO 2: ESTATÍSTICAS OPERACIONAIS DA PPDF (id="estatisticas") */}
      {/* ==================================================================== */}
      <section id="estatisticas" className="py-20 px-4 bg-[#0B1016]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Estatísticas Operacionais da Polícia Penal do DF
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Dados relevantes sobre o ambiente de trabalho e a demanda por novos policiais penais no DF.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <DataCard
                icon={Hash}
                title="População Carcerária (SEAPE)"
                value="~16.200"
                description="Número total de internos (dado de 2021, mas o mais consistente para estimativa da demanda)."
                colorClass="text-[#F97316]"
            />
            <DataCard
                icon={Percent}
                title="Déficit de Cargos"
                value="~1.286 Vagos" 
                description="Total de cargos vagos (julho/2023), justificando a necessidade de nomeação do CR."
                colorClass="text-[#8B5CF6]"
            />
            <DataCard
                icon={Search}
                title="Proporção Policial/Preso"
                value="Aprox. 1 para 9" 
                description="Relação estimada entre o efetivo atual de policiais penais e a população carcerária do DF."
                colorClass="text-[#EF4444]"
            />
          </div>

          {/* Galeria de Imagens - Ilustrando a atuação da PPDF */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <img src={ppdf05Img} alt="Policiais Penais em treinamento" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover h-64 w-full"/>
            <img src={ppdf06Img} alt="Operação Policial Penal" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover h-64 w-full"/>
            <img src={ppdf07Img} alt="Viaturas da Polícia Penal" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover h-64 w-full"/>
          </div>

          <div className="mt-12 text-center">
              <p className="text-sm text-gray-500 italic">
                  *Nota: A proporção ideal estabelecida por órgãos de controle é frequentemente debatida, sendo a busca por um menor número de custodiados por policial um objetivo constante.
              </p>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SEÇÃO 3: ACOMPANHAMENTO DAS PRÓXIMAS NOMEAÇÕES (id="nomeacoes") */}
      {/* ==================================================================== */}
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
              <h3 className="text-2xl font-semibold text-white mb-2">
                Previsões e Próximos Passos
              </h3>
              <ul className="text-gray-300 space-y-3 list-disc list-inside">
                <li><strong className="text-white">LDO 2026:</strong> Previsão orçamentária para nomear até **990** novos servidores.</li>
                <li><strong className="text-white">Despacho de Crédito:</strong> Solicitação para custear a nomeação de um novo grupo de **150** aprovados em 2025.</li>
                <li><strong className="text-white">Decisão do TCDF:</strong> Determinação para que o GDF apresente um cronograma de nomeações em 2025.</li>
              </ul>
            </div>

            {/* Box 2: Links e Documentos */}
            <div className="p-8 bg-[#0B1016]/80 border border-[#0D3A46]/50 rounded-xl">
              <Gavel className="w-8 h-8 text-[#FBBF24] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">
                Links e Documentos Oficiais
              </h3>
              <ul className="text-gray-300 space-y-3 list-disc list-inside">
                <li><strong className="text-white">DODF:</strong> Diário Oficial do Distrito Federal (fonte primária para atos de nomeação).</li>
                <li><strong className="text-white">SEAPE/DF:</strong> Secretaria de Estado de Administração Penitenciária (acompanhamento institucional).</li>
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

          {/* Imagem de Contexto para Nomeações (Reuso de imagem .jpeg) */}
          <div className="flex justify-center mt-12">
            <img 
              src={ppdf05Img} // Reutilizando ppdf05Img no lugar da webp removida
              alt="Documento oficial de nomeação"
              className="w-full md:w-3/4 lg:w-2/3 h-auto rounded-xl shadow-lg border-2 border-[#0D3A46]"
            />
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SEÇÃO 4: GALERIA ADICIONAL (Opcional - Reuso da última imagem) */}
      {/* ==================================================================== */}
      <section id="galeria" className="py-20 px-4 bg-[#0B1016] border-t border-[#1C2A35]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Ambiente e Atuação da Polícia Penal
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Visão sobre o cotidiano e a importância do trabalho do Policial Penal do DF.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={ppdf06Img} alt="Ambiente prisional ou instalação" className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 object-cover h-96 w-full"/> {/* Reutilizando ppdf06Img */}
            <div className="p-8 bg-[#1C2A35]/60 border border-[#0D3A46]/50 rounded-xl flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-[#4FD1C5] mb-4">A Importância do Policial Penal</h3>
                <p className="text-gray-300 text-lg">
                    A Polícia Penal do Distrito Federal é essencial para a segurança pública, garantindo a ordem e a disciplina no sistema prisional. Seu trabalho vai além da custódia, contribuindo para a ressocialização e a manutenção da paz social.
                </p>
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
