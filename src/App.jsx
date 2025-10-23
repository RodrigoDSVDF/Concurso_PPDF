import { useState, useEffect } from 'react';

// Ícones (Lucide)
import { 
  Home, Link, ChartPie, GalleryHorizontal, ChevronLeft, ChevronRight, 
  ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp, CheckCircle, Sparkles, User, Lightbulb, Search, Eye, Users, FileText, Calendar, Trophy, BarChart, Clock, Hash, Percent, AlertTriangle, LayoutGrid 
} from 'lucide-react';
import './App.css';

// Bibliotecas de Animação e Gráficos
import Marquee from "react-fast-marquee";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'; 
import { 
  BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts'; 

// ====================================================================
// IMPORTANDO TODAS AS IMAGENS DA GALERIA
// ====================================================================
import ppdf01Img from './assets/ppdf01.png';
import ppdf02Img from './assets/ppdf02.png';
import ppdf04Img from './assets/ppdf04.jpg';
import ppdf05Img from './assets/ppdf05.jpeg';
import ppdf06Img from './assets/ppdf06.jpeg';
import ppdf07Img from './assets/ppdf07.jpeg';
import ppdf08Img from './assets/ppdf08.webp';
import ppdf09Img from './assets/ppdf09.webp';

// ====================================================================
// COMPONENTE AUXILIAR: DataCard
// (O mesmo que já tínhamos)
// ====================================================================
const DataCard = ({ icon: Icon, title, value, description, colorClass }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const prefix = value.startsWith('~') ? '~' : '';
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const separator = numericValue > 999 ? '.' : '';

  return (
    <div 
      ref={ref}
      className={`p-6 bg-[#1C2A35]/60 border border-[#0D3A46]/50 rounded-xl transition-all duration-300 hover:border-[#4FD1C5] hover:shadow-lg ${colorClass}`}
    >
      <div className="flex items-center mb-4">
        <Icon className={`w-8 h-8 mr-3 ${colorClass}`} />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className={`text-4xl font-bold mb-3 ${colorClass}`}>
        {inView ? (
          <CountUp 
            start={0} 
            end={numericValue} 
            duration={2.5}
            separator={separator}
            prefix={prefix}
          />
        ) : (
          `${prefix}0`
        )}
      </p>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};


// ====================================================================
// COMPONENTE PRINCIPAL: App (Página Única)
// ====================================================================
function App() {
  const [isVisible, setIsVisible] = useState(false);

  // ====================================================================
  // LÓGICA DA NOVA GALERIA
  // ====================================================================
  const galleryImages = [
    ppdf01Img, ppdf02Img, ppdf04Img, ppdf05Img, ppdf06Img, ppdf07Img, ppdf08Img, ppdf09Img
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };
  // ====================================================================

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // ====================================================================
  // NOVO: EFEITO PARA O SLIDESHOW AUTOMÁTICO
  // ====================================================================
  useEffect(() => {
    // Define um temporizador que executa a cada 4 segundos
    const timerId = setInterval(() => {
      // Usa a forma de 'callback' do setState para avançar para a próxima imagem
      // Isto evita a necessidade de listar 'nextImage' ou 'currentImageIndex' como dependências
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % galleryImages.length
      );
    }, 4000); // 4000ms = 4 segundos

    // A função de 'cleanup' (limpeza) é essencial
    // Ela será chamada quando o componente for desmontado, parando o temporizador
    return () => {
      clearInterval(timerId);
    };
  }, [galleryImages.length]); // A única dependência é o tamanho da galeria
  // ====================================================================


  // Função de Scroll Suave
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -64; // Altura do navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };


  return (
    <div className="min-h-screen bg-[#0B1016] font['Poppins',sans-serif] overflow-x-hidden">
      
      {/* NAVBAR (Menu Fixo com Scroll) - "Gráficos" REMOVIDO */}
      <nav className="sticky top-0 z-50 w-full bg-[#0B1016]/80 backdrop-blur-md border-b border-[#1C2A35]">
        {/* ... (Conteúdo do Navbar sem alterações) ... */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span 
              className="text-2xl font-bold text-white cursor-pointer" 
              onClick={() => scrollToSection('hero')} 
            >
              PPDF<span className="text-[#4FD1C5]">.info</span>
            </span>
            <div className="flex space-x-2">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
              >
                <Home className="w-4 h-4 mr-2" />
                Início
              </button>
              <button 
                onClick={() => scrollToSection('links')} 
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
              >
                <Link className="w-4 h-4 mr-2" />
                Links
              </button>
              <button 
                onClick={() => scrollToSection('galeria')} 
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
              >
                <GalleryHorizontal className="w-4 h-4 mr-2" />
                Galeria
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* SECÇÃO 1: HERO (ID="hero") */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* ... (Conteúdo da Hero Section sem alterações) ... */}
        <div className="hidden md:block absolute top-20 left-20 w-72 h-72 bg-[#0D3A46]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-[#0D3A46]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 opacity-40"> 
          <img src={ppdf02Img} alt="Fundo" className="w-full h-full object-cover object-center md:object-right"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1016]/70 via-[#14222E]/60 to-[#0B1016]/70"></div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="h-14 px-8 bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] text-black font-bold rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-0"
              onClick={() => scrollToSection('vagas')}
            >
              <FileText className="w-5 h-5 mr-2" />
              Ver Detalhes do Concurso
            </button>
            <button
              className="h-14 px-8 border-2 border-[#8AB4B8] text-white font-bold rounded-xl transition-all duration-300 hover:bg-[#1C2A35]"
              onClick={() => scrollToSection('estatisticas')}
            >
              <BarChart className="w-5 h-5 mr-2" />
              Ver Estatísticas PPDF
            </button>
          </div>
        </div>
      </section>

      {/* SECÇÃO 2: MARQUEE */}
      <div className="py-3 bg-[#0D3A46]/70 border-t border-b border-[#4FD1C5]/30 overflow-hidden">
        {/* ... (Conteúdo do Marquee sem alterações) ... */}
        <Marquee pauseOnHover={true} speed={60}>
          <span className="text-xl text-white font-semibold mx-8 uppercase">Nomeação de Todos</span>
          <span className="text-xl text-[#4FD1C5] font-bold mx-8 uppercase">Juntos somos mais fortes</span>
          <span className="text-xl text-white font-semibold mx-8 uppercase">PPDF</span>
          <span className="text-xl text-white font-semibold mx-8 uppercase">Nomeação de Todos</span>
          <span className="text-xl text-[#4FD1C5] font-bold mx-8 uppercase">Juntos somos mais fortes</span>
          <span className="text-xl text-white font-semibold mx-8 uppercase">PPDF</span>
        </Marquee>
      </div>

      {/* SECÇÃO 3: VAGAS (ID="vagas") */}
      <section id="vagas" className="py-20 px-4 bg-[#14222E]/80 border-t border-b border-[#0D3A46]">
        {/* ... (Conteúdo da Seção Vagas sem alterações) ... */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Análise do Concurso PPDF 2022 (Vagas e Nomeações)
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Acompanhamento dos números oficiais, nomeações já realizadas e projeções futuras.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <DataCard icon={Users} title="Vagas Imediatas (Edital)" value="400" description="Total de vagas de provimento imediato previstas no Edital (preenchidas em diversas turmas)." colorClass="text-[#4FD1C5]" />
            <DataCard icon={Trophy} title="Cadastro Reserva (CR)" value="779" description="Candidatos classificados no CR com potencial de nomeação dentro da validade do concurso." colorClass="text-[#FBBF24]" />
            <DataCard icon={CheckCircle} title="Nomeações Registradas" value="~272" description="Conjunto de nomeações já publicadas no DODF (até Nov/2024 - Fonte: Artigos de Concursos)." colorClass="text-[#3B82F6]" />
            <DataCard icon={TrendingUp} title="Projeção LDO 2026" value="990" description="Previsão orçamentária para nomeações de Policiais Penais do DF na Lei de Diretrizes Orçamentárias 2026." colorClass="text-[#EF4444]" />
          </div>
          <div className="mt-10 p-6 bg-[#0D3A46]/70 rounded-lg border-l-4 border-[#4FD1C5] text-white">
            <p className="font-semibold text-lg flex items-center"><Clock className="w-5 h-5 mr-2" /> Validade do Concurso</p>
            <p className="text-gray-300 mt-1">A validade do concurso de 2022 foi **prorrogada até agosto de 2027**, garantindo mais tempo para o chamamento dos candidatos do Cadastro Reserva.</p>
          </div>
        </div>
      </section>

      {/* SECÇÃO 4: ESTATÍSTICAS (ID="estatisticas") */}
      <section id="estatisticas" className="py-20 px-4">
        {/* ... (Conteúdo da Seção Estatísticas sem alterações) ... */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Estatísticas Operacionais da Polícia Penal do DF
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Dados relevantes sobre o ambiente de trabalho e a demanda por novos policiais penais no DF.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <DataCard icon={Hash} title="População Carcerária (SEAPE)" value="~16.200" description="Número total de internos (dado de 2021, mas o mais consistente para estimativa da demanda)." colorClass="text-[#F97316]" />
            <DataCard icon={Percent} title="Déficit de Cargos" value="~1.286 Vagos" description="Total de cargos vagos (julho/2023), justificando a necessidade de nomeação do CR." colorClass="text-[#8B5CF6]" />
            <DataCard icon={Search} title="Proporção Policial/Presso" value="Aprox. 1 para 9" description="Relação estimada entre o efetivo atual de policiais penais e a população carcerária do DF." colorClass="text-[#EF4444]" />
          </div>
        </div>
      </section>

      {/* SECÇÃO 5: NOMEAÇÕES (ID="nomeacoes") */}
      <section id="nomeacoes" className="py-20 px-4 bg-[#14222E]/80 border-t border-b border-[#0D3A46]">
        {/* ... (Conteúdo da Seção Nomeações sem alterações) ... */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Acompanhamento das Próximas Nomeações
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Informações essenciais sobre os atos de nomeação, posse e o andamento dos trâmites burocráticos.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#0B1016]/80 border border-[#0D3A46]/50 rounded-xl">
              <Clock className="w-8 h-8 text-[#4FD1C5] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">Próximas Convocatórias (2025/2026)</h3>
              <ul className="text-gray-300 space-y-3 list-disc list-inside">
                <li><strong className="text-white">LDO 2026:</strong> Previsão orçamentária para nomear até **990** novos servidores.</li>
                <li><strong className="text-white">Despacho de Crédito:</strong> Solicitação para custear a nomeação de um novo grupo de **150** aprovados em 2025.</li>
                <li><strong className="text-white">Decisão do TCDF:</strong> Determinação para que o GDF apresente um cronograma de nomeações em 2025.</li>
              </ul>
            </div>
            <div className="p-8 bg-[#0B1016]/80 border border-[#0D3A46]/50 rounded-xl">
              <Rocket className="w-8 h-8 text-[#FBBF24] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">Links e Documentos Oficiais</h3>
              <ul className="text-gray-300 space-y-3 list-disc list-inside">
                <li><strong className="text-white">DODF:</strong> Diário Oficial do Distrito Federal (fonte primária para atos de nomeação).</li>
                <li><strong className="text-white">SEAPE/DF:</strong> Secretaria de Estado de Administração Penitenciária (acompanhamento institucional).</li>
                <li><strong className="text-white">Instituto AOCP:</strong> Resultado final e homologação do certame.</li>
              </ul>
              <button
                className="mt-6 w-full h-12 border-2 border-[#FBBF24] text-[#FBBF24] font-bold rounded-lg transition-all duration-300 hover:bg-[#FBBF24]/10"
                onClick={() => alert("Link para o DODF será inserido aqui.")}
              >
                Acessar Diário Oficial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECÇÃO 6: ANÁLISE CRÍTICA (ID="analise-critica") */}
      <section id="analise-critica" className="py-20 px-4">
        {/* ... (Conteúdo da Seção Análise Crítica sem alterações) ... */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-white mb-4">
              Análise Crítica: O Risco da Inércia
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
              Uma síntese do cenário atual, combinando dados, obrigações legais e o risco ético da paralisação do GDF.
            </p>
            <div className="p-8 bg-[#1C2A35]/60 border-t-4 border-[#EF4444] rounded-xl shadow-2xl space-y-6">
              <div className="flex items-center">
                <AlertTriangle className="w-10 h-10 text-[#EF4444] mr-4" />
                <h3 className="text-2xl font-bold text-white">
                  O Ponto de Inflexão: Dois Pesos e Duas Medidas
                </h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                A segurança do DF vive um paradoxo. Enquanto o Estado tem o dever <strong className="text-white">inalienável (Art. 5º da CF)</strong> de zelar pela integridade do preso, o mesmo Estado ignora os profissionais essenciais para essa tarefa. Com um défice de <strong className="text-white">1.262 cargos vagos</strong> (Jul/2023) e um orçamento já previsto na LDO 2026 para <strong className="text-white">753 nomeações</strong>, a inércia do GDF é injustificável.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Esta paralisia, que se arrasta há mais de dois anos, forçou o <strong className="text-white">Tribunal de Contas (TCDF)</strong> a exigir um cronograma. Isso prova que o GDF só age sob pressão, não por planejamento. Manter o défice não é uma "economia", é uma <strong className="text-white">sabotagem da Inteligência Prisional</strong> e um convite ao colapso do sistema, como indica o aumento de <strong className="text-white">21% em mortes</strong> evitáveis nas unidades (2019-2024).
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                O mais grave é a <strong className="text-white">quebra da Boa-Fé Administrativa</strong>: o Estado treina centenas de candidatos, expondo-os a informações sensíveis e a um ambiente de risco, e depois os abandona no limbo, sem nomeação. Esta é uma <strong className="text-white">contradição ética e moral</strong>. A nomeação não é um favor; é um dever legal e um imperativo de segurança pública.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECÇÃO 7: GRÁFICOS (ID="graficos") */}
      <section id="graficos" className="py-20 px-4 bg-[#14222E]/80 border-t border-b border-[#0D3A46]">
        {/* ... (Conteúdo da Seção Gráficos sem alterações) ... */}
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white mb-12 text-center"
          >
            Análise Gráfica do <span className="text-[#4FD1C5]">Concurso</span>
          </motion.h1>
          {(() => {
            const CustomTooltip = ({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-[#0B1016] p-4 border border-[#0D3A46] rounded-lg shadow-lg">
                    <p className="label text-white font-bold">{`${label || payload[0].name}`}</p>
                    <p className="intro text-gray-300">{`Valor : ${payload[0].value}`}</p>
                  </div>
                );
              }
              return null;
            };

            const dataDistribuicao = [
              { name: 'Nomeados', value: 272, fill: '#4FD1C5' },
              { name: 'Aguardando Nomeação (CR + Vagas)', value: 907, fill: '#FBBF24' },
            ];
            const dataDemanda = [
              { name: 'Déficit de Cargos', Demanda: 1286, fill: '#EF4444' },
              { name: 'Projeção LDO 2026', Demanda: 990, fill: '#8B5CF6' },
              { name: 'Cadastro Reserva (CR)', Demanda: 779, fill: '#F97316' },
            ];

            return (
              <>
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-[#1C2A35]/60 p-8 rounded-xl border border-[#0D3A46]/50"
                  >
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">Distribuição Total (Vagas + CR)</h2>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={dataDistribuicao} cx="50%" cy="50%" labelLine={false}
                          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                          outerRadius={110} fill="#8884d8" dataKey="value" stroke="#0B1016" strokeWidth={2}
                        >
                          {dataDistribuicao.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.fill} />))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-[#1C2A35]/60 p-8 rounded-xl border border-[#0D3A46]/50"
                  >
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">Demanda por Novos Policiais</h2>
                    <ResponsiveContainer width="100%" height={300}>
                      <ReBarChart data={dataDemanda}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#0D3A46" />
                        <XAxis dataKey="name" stroke="#8AB4B8" fontSize={12} />
                        <YAxis stroke="#8AB4B8" />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend wrapperStyle={{ color: '#8AB4B8' }} />
                        <Bar dataKey="Demanda" fill="#4FD1C5" />
                      </ReBarChart>
                    </ResponsiveContainer>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                  className="grid md:grid-cols-4 gap-6"
                >
                  <DataCard icon={Users} title="Total de Vagas (Edital + CR)" value="1.179" description="Soma das 400 vagas imediatas + 779 do CR." colorClass="text-[#4FD1C5]" />
                  <DataCard icon={CheckCircle} title="Nomeações" value="~272" description="Servidores já nomeados (até Nov/2024)." colorClass="text-[#3B82F6]" />
                  <DataCard icon={LayoutGrid} title="Déficit Atual" value="~1.286" description="Cargos vagos (Julho/2023)." colorClass="text-[#EF4444]" />
                  <DataCard icon={TrendingUp} title="Projeção LDO" value="990" description="Previsão de nomeações (LDO 2026)." colorClass="text-[#F97316]" />
                </motion.div>
              </>
            );
          })()}
        </div>
      </section>

      {/* SECÇÃO 8: LINKS ÚTEIS (ID="links") */}
      <section id="links" className="py-20 px-4">
        {/* ... (Conteúdo da Seção Links sem alterações) ... */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-4">
            Links Úteis e Documentos
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Acesso rápido aos documentos oficiais e portais de acompanhamento do concurso PPDF 2022.
          </p>
          {(() => {
            const LinkCard = ({ href, icon: Icon, title, description, iconColor }) => (
              <a 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block p-6 bg-[#1C2A35]/60 border border-[#0D3A46]/50 rounded-xl transition-all duration-300 hover:border-[#4FD1C5] hover:scale-105"
              >
                <Icon className={`w-10 h-10 mb-4 ${iconColor}`} />
                <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-400">{description}</p>
              </a>
            );
            return (
              <div className="grid md:grid-cols-2 gap-6">
                <LinkCard href="https://www.dodf.df.gov.br/" icon={FileText} title="Diário Oficial (DODF)" description="Fonte primária para todos os atos de nomeação e convocações oficiais." iconColor="text-[#3B82F6]" />
                <LinkCard href="https://www.seape.df.gov.br/" icon={Globe} title="Portal SEAPE/DF" description="Secretaria de Estado de Administração Penitenciária do DF." iconColor="text-[#4FD1C5]" />
                <LinkCard href="https://www.institutoaocp.org.br/" icon={BookOpen} title="Instituto AOCP" description="Página da banca organizadora com resultados e homologação." iconColor="text-[#FBBF24]" />
                <LinkCard href="#" icon={Key} title="Assinatura Digital" description="Informações sobre como obter e usar o certificado digital para a posse." iconColor="text-[#EF4444]" />
              </div>
            );
          })()}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECÇÃO 9: GALERIA (ID="galeria") - NOVO FORMATO AUTOMÁTICO
      {/* ==================================================================== */}
      <section id="galeria" className="py-20 px-4 bg-[#14222E]/80 border-t border-b border-[#0D3A46]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Galeria de Imagens
          </h2>
          
          <div className="relative w-full max-w-3xl mx-auto">
            {/* Imagem Principal */}
            <motion.img
              key={currentImageIndex} // Força a re-renderização com animação
              src={galleryImages[currentImageIndex]} 
              alt={`Galeria Imagem ${currentImageIndex + 1}`} 
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-xl"
              initial={{ opacity: 0.5, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Botão Anterior */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-0 md:-left-12 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition-all"
              aria-label="Imagem Anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Botão Próximo */}
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-0 md:-right-12 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition-all"
              aria-label="Próxima Imagem"
            >
              <ChevronRight size={24} />
            </button>

            {/* Contador */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      </section>

      {/* SECÇÃO 10: FOOTER */}
      <section>
        {/* ... (Conteúdo do Footer sem alterações) ... */}
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
