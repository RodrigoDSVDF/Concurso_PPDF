import { useState, useEffect } from 'react';

// Ícones (Lucide)
import { 
  Home, Link, ChartPie, GalleryHorizontal, ChevronLeft, ChevronRight, 
  ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp, CheckCircle, Sparkles, User, Lightbulb, Search, Eye, Users, FileText, Calendar, Trophy, BarChart, Clock, Hash, Percent, AlertTriangle, LayoutGrid, Handshake, Shield, Monitor
} from 'lucide-react';
import './App.css';

// Bibliotecas de Animação e Gráficos
import Marquee from "react-fast-marquee";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'; 
import { 
  BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line 
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
// NOVA IMAGEM ADICIONADA:
import ppdf12Img from './assets/ppdf12.png'; 

// ====================================================================
// COMPONENTES AUXILIARES
// ====================================================================

// --- DataCard (O mesmo que já tínhamos) ---
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

// --- Tooltip Personalizado para Gráficos (Reutilizável) ---
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const name = payload[0].payload?.name || label || "Valor";
    const value = payload[0].value;
    const percent = payload[0].payload?.percent;
    const percentString = percent ? ` (${(percent * 100).toFixed(0)}%)` : '';

    return (
      <div className="bg-[#0B1016] p-4 border border-[#0D3A46] rounded-lg shadow-lg">
        <p className="label text-white font-bold">{`${name}`}</p>
        <p className="intro text-gray-300">{`Total: ${value}${percentString}`}</p>
        
        {payload[1] && <p className="intro text-gray-300">{`${payload[1].name} : ${payload[1].value}`}</p>}
        {payload[2] && <p className="intro text-gray-300">{`${payload[2].name} : ${payload[2].value}`}</p>}
      </div>
    );
  }
  return null;
};


// ====================================================================
// COMPONENTE PRINCIPAL: App (Página Única)
// ====================================================================
function App() {
  const [isVisible, setIsVisible] = useState(false);

  // --- Lógica da Galeria ---
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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // --- Efeito para Slideshow Automático ---
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % galleryImages.length
      );
    }, 4000); // 4 segundos
    return () => {
      clearInterval(timerId);
    };
  }, [galleryImages.length]); 

  // --- Função de Scroll Suave ---
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
      
      {/* ==================================================================== */}
      {/* NAVBAR (Menu Fixo com Scroll)
      {/* ==================================================================== */}
      <nav className="sticky top-0 z-50 w-full bg-[#0B1016]/80 backdrop-blur-md border-b border-[#1C2A35]">
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
                onClick={() => scrollToSection('sistema-prisional')} 
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
              >
                <BarChart className="w-4 h-4 mr-2" />
                Sistema
              </button>
              {/* NOVO LINK PARA PAPEL ESTRATÉGICO */}
              <button 
                onClick={() => scrollToSection('papel-estrategico')} 
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
              >
                <Shield className="w-4 h-4 mr-2" />
                Estratégia
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

      {/* ==================================================================== */}
      {/* SECÇÃO 1: HERO (ID="hero")
      {/* ==================================================================== */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* ... (Conteúdo da Hero Section) ... */}
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
            Acompanhamento dos <strong className="text-white">1.541</strong> Policiais Penais já formados. O GDF investiu no treino, mas falha em nomear o efetivo pronto para atuar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="h-14 px-8 bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] text-black font-bold rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-0"
              onClick={() => scrollToSection('vagas-formados')}
            >
              <Users className="w-5 h-5 mr-2" />
              Ver Formados vs. Nomeados
            </button>
            <button
              className="h-14 px-8 border-2 border-[#8AB4B8] text-white font-bold rounded-xl transition-all duration-300 hover:bg-[#1C2A35]"
              onClick={() => scrollToSection('estatisticas')}
            >
              <BarChart className="w-5 h-5 mr-2" />
              Ver Défice do Sistema
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECÇÃO 2: MARQUEE
      {/* ==================================================================== */}
      <div className="py-3 bg-[#0D3A46]/70 border-t border-b border-[#4FD1C5]/30 overflow-hidden">
        {/* ... (Conteúdo do Marquee - com números corretos) ... */}
        <Marquee pauseOnHover={true} speed={60}>
          <span className="text-xl text-white font-semibold mx-8 uppercase">1.541 Policiais Penais Formados</span>
          <span className="text-xl text-[#4FD1C5] font-bold mx-8 uppercase">904 Aguardam Nomeação</span>
          <span className="text-xl text-white font-semibold mx-8 uppercase">O GDF investiu e agora desperdiça</span>
          <span className="text-xl text-[#4FD1C5] font-bold mx-8 uppercase">Nomeação Já!</span>
        </Marquee>
      </div>

      {/* ==================================================================== */}
      {/* SECÇÃO 3: FORMADOS vs. NOMEADOS (ID="vagas-formados")
      {/* ==================================================================== */}
      <section id="vagas-formados" className="py-20 px-4 bg-[#14222E]/80 border-t border-b border-[#0D3A46]">
        {/* ... (Conteúdo da Seção Formados vs. Nomeados - com números corretos) ... */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Análise: Formados vs. Nomeados (Concurso 2022)
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            O Estado já investiu na formação. Agora, falta a nomeação para suprir o défice urgente do sistema.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <DataCard 
              icon={Users} 
              title="Total de Formados" 
              value="1.541" 
              description="Total de candidatos que concluíram o Curso de Formação Profissional." 
              colorClass="text-[#4FD1C5]" 
            />
            <DataCard 
              icon={CheckCircle} 
              title="Nomeações Realizadas" 
              value="637" 
              description="Servidores nomeados e já empossados (até a data)." 
              colorClass="text-[#3B82F6]" 
            />
            <DataCard 
              icon={Users} 
              title="Formados Aguardando" 
              value="904" 
              description="Profissionais treinados pelo GDF aguardando nomeação (1541 - 637)." 
              colorClass="text-[#FBBF24]" 
            />
            <DataCard 
              icon={TrendingUp} 
              title="Finais de Fila (Ampla)" 
              value="45" 
              description="Número de candidatos restantes no final da fila de ampla concorrência." 
              colorClass="text-[#EF4444]" 
            />
          </div>
          <div className="mt-10 p-6 bg-[#0D3A46]/70 rounded-lg border-l-4 border-[#4FD1C5] text-white">
            <p className="font-semibold text-lg flex items-center"><Clock className="w-5 h-5 mr-2" /> Validade do Concurso</p>
            <p className="text-gray-300 mt-1">A validade do concurso de 2022 foi **prorrogada até agosto de 2027**, garantindo mais tempo para o chamamento dos candidatos do Cadastro Reserva.</p>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECÇÃO 4: ESTATÍSTICAS (ID="estatisticas") - DADOS ATUALIZADOS
      {/* ==================================================================== */}
      <section id="estatisticas" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Estatísticas Operacionais da Polícia Penal do DF
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Dados relevantes sobre o ambiente de trabalho e a demanda por novos policiais penais no DF.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* VALOR ATUALIZADO: 18.300 */}
            <DataCard icon={Hash} title="População Carcerária (SEAPE)" value="18.300" description="Número total de internos (Dado recente da SEAPE)." colorClass="text-[#F97316]" />
            <DataCard icon={Percent} title="Déficit de Cargos" value="~1.286 Vagos" description="Total de cargos vagos (julho/2023), justificando a necessidade de nomeação do CR." colorClass="text-[#8B5CF6]" />
            <DataCard icon={Search} title="Proporção Policial/Presso" value="Aprox. 1 para 9" description="Relação estimada entre o efetivo atual de policiais penais e a população carcerária do DF." colorClass="text-[#EF4444]" />
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECÇÃO 5: SISTEMA PRISIONAL (ID="sistema-prisional") - DADOS ATUALIZADOS
      {/* ==================================================================== */}
      <section id="sistema-prisional" className="py-20 px-4 bg-[#14222E]/80 border-t border-b border-[#0D3A46]">
        {(() => {
          // --- Dados para a secção (Atualizar População Carcerária) ---
          // A evolução de 2024 e 2025 precisa ser ajustada para o novo valor de 18.300
          const evolucaoPopulacao = [
            { ano: '2022', presos: 15181 }, { ano: '2023', presos: 15800 },
            { ano: '2024', presos: 17500 }, { ano: '2025', presos: 18300 }, // Último valor: 18.300
          ];
          const crimesComuns = [
            { crime: 'Roubo', '2022': 8457, '2023': 10155, '2024': 11806 },
            { crime: 'Tráfico', '2022': 5183, '2023': 6346, '2024': 6972 },
            { crime: 'Homicídio', '2022': 3316, '2023': 4198, '2024': 5097 },
          ];
          const reincidenciaData = [
            { name: 'Primários', value: 11361, fill: '#4FD1C5' },
            { name: 'Reincidentes', value: 5023, fill: '#FBBF24' },
          ];
          const capacidadeData = [
            { categoria: 'Vagas Disponíveis', quantidade: 6605 },
            { categoria: 'População Atual', quantidade: 18300 }, // VALOR ATUALIZADO
            { categoria: 'Déficit de Vagas', quantidade: 11695 }, // 18300 - 6605
          ];
          // Novo cálculo de Taxa de Ocupação: 18300 / 6605 * 100 = ~277%

          return (
            <div className="max-w-6xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-bold text-white mb-12 text-center"
              >
                Sistema Prisional <span className="text-[#4FD1C5]">DF</span>
              </motion.h1>
              <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img src={ppdf08Img} alt="Sistema Prisional" className="rounded-lg border border-[#0D3A46]/50 shadow-lg" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col justify-center"
                >
                  <h2 className="text-3xl font-bold text-white mb-6">Estrutura e Funcionamento</h2>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    O sistema prisional do Distrito Federal é responsável pela custódia, segurança e ressocialização de pessoas privadas de liberdade. A Polícia Penal é fundamental para manter a ordem e a segurança dentro das unidades prisionais.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Os profissionais trabalham em turnos, garantindo vigilância contínua e cumprimento das normas de segurança estabelecidas pela legislação penitenciária.
                  </p>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid md:grid-cols-4 gap-6 mb-16"
              >
                {/* VALOR E DESCRIÇÃO ATUALIZADOS */}
                <DataCard icon={Users} title="População Carcerária" value="18.300" description="Número de internos (dado atualizado SEAPE)." colorClass="text-[#F97316]" /> 
                <DataCard icon={Globe}
                  title="Unidades Prisionais" value="6" description="Principais complexos penitenciários." colorClass="text-[#3B82F6]" />
                <DataCard icon={ChartPie} title="Taxa de Ocupação" value="277%" description="Superlotação do sistema (18.300 vs 6.605 vagas)." colorClass="text-[#EF4444]" /> {/* VALOR ATUALIZADO */}
                <DataCard icon={AlertTriangle}
                  title="Reincidentes" value="31,1%" description="Percentual de reincidência (2024)." colorClass="text-[#FBBF24]" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-[#1C2A35]/60 p-8 rounded-xl border border-[#0D3A46]/50 mb-12"
              >
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Evolução da População Carcerária (2022-2025)</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={evolucaoPopulacao}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#0D3A46" />
                    <XAxis dataKey="ano" stroke="#8AB4B8" />
                    <YAxis stroke="#8AB4B8" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ color: '#8AB4B8' }} />
                    <Line type="monotone" dataKey="presos" stroke="#4FD1C5" strokeWidth={3} name="Número de Presos" />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-[#1C2A35]/60 p-8 rounded-xl border border-[#0D3A46]/50"
                >
                  <h2 className="text-2xl font-bold text-white mb-6 text-center">Principais Crimes (2022-2024)</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <ReBarChart data={crimesComuns}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#0D3A46" />
                      <XAxis dataKey="crime" stroke="#8AB4B8" fontSize={12} />
                      <YAxis stroke="#8AB4B8" />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ color: '#8AB4B8' }} />
                      <Bar dataKey="2022" fill="#3B82F6" name="2022" />
                      <Bar dataKey="2023" fill="#8B5CF6" name="2023" />
                      <Bar dataKey="2024" fill="#4FD1C5" name="2024" />
                    </ReBarChart>
                  </ResponsiveContainer>
                </motion.div>

                {/* GRÁFICO DE PIZZA CORRIGIDO */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-[#1C2A35]/60 p-8 rounded-xl border border-[#0D3A46]/50"
                >
                  <h2 className="text-2xl font-bold text-white mb-6 text-center">Primários vs Reincidentes (2024)</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ color: '#8AB4B8', paddingTop: '10px' }} />
                      <Pie
                        data={reincidenciaData} 
                        cx="50%" 
                        cy="50%" 
                        labelLine={false} 
                        label={false} 
                        outerRadius={110} 
                        fill="#8884d8" 
                        dataKey="value" 
                        stroke="#0B1016" 
                        strokeWidth={2}
                      >
                        {reincidenciaData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-[#1C2A35]/60 p-8 rounded-xl border border-[#0D3A46]/50 mb-12"
              >
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Capacidade vs População Atual</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <ReBarChart data={capacidadeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#0D3A46" />
                    <XAxis dataKey="categoria" stroke="#8AB4B8" />
                    <YAxis stroke="#8AB4B8" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ color: '#8AB4B8' }} />
                    <Bar dataKey="quantidade" fill="#EF4444" name="Quantidade" />
                  </ReBarChart>
                </ResponsiveContainer>
                <p className="text-gray-300 mt-4 text-center">
                  O sistema prisional do DF opera com <span className="text-white font-bold">277% de ocupação</span>, evidenciando a superlotação crítica.
                </p>
              </motion.div>
            </div>
          );
        })()}
      </section>

      {/* ==================================================================== */}
      {/* SECÇÃO 6: O PAPEL ESTRATÉGICO DA PPDF (ID="papel-estrategico")
      {/* ==================================================================== */}
      <section id="papel-estrategico" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-white mb-4"
          >
            O Papel Estratégico da Polícia Penal do DF
          </motion.h2>
          <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto">
            A PPDF vai além dos muros, atuando diretamente na ressocialização, inteligência criminal e diminuição da criminalidade urbana.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-12 flex justify-center"
          >
            <img 
              src={ppdf12Img} 
              alt="Policiais Penais em Ação" 
              className="rounded-lg shadow-xl border border-[#0D3A46]/50 max-w-full md:max-w-2xl h-auto" 
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Cartão 1: Agentes de Ressocialização e Cidadania */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
              className="p-6 bg-[#1C2A35]/60 border border-[#0D3A46]/50 rounded-xl hover:border-[#FBBF24]"
            >
              <Handshake className="w-10 h-10 text-[#FBBF24] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">Ressocialização e Diminuição da Criminalidade</h3>
              <p className="text-gray-300">
                O policial penal é o principal ator da Lei de Execução Penal (LEP). Eles gerenciam e facilitam programas de trabalho, educação e saúde. Uma custódia humanizada e profissionalizada é o caminho mais eficaz para a **diminuição da reincidência**, transformando o preso em um cidadão produtivo e reduzindo, a longo prazo, a criminalidade na sociedade.
              </p>
            </motion.div>

            {/* Cartão 2: Inteligência e Combate ao Crime Organizado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}
              className="p-6 bg-[#1C2A35]/60 border border-[#0D3A46]/50 rounded-xl hover:border-[#4FD1C5]"
            >
              <Monitor className="w-10 h-10 text-[#4FD1C5] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">Linha de Frente Contra o Crime Organizado</h3>
              <p className="text-gray-300">
                O sistema prisional é o centro de articulação das maiores facções. O trabalho de **Inteligência Prisional** da PPDF é essencial para desmantelar esquemas de dentro para fora, protegendo as ruas do DF. A falta de efetivo enfraquece esta inteligência e permite que o crime organizado floresça sem vigilância adequada.
              </p>
            </motion.div>

            {/* Cartão 3: Custo Social da Negligência Prisional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}
              className="p-6 bg-[#1C2A35]/60 border border-[#0D3A46]/50 rounded-xl hover:border-[#EF4444]"
            >
              <AlertTriangle className="w-10 h-10 text-[#EF4444] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">O Impacto Negativo das Más Condições</h3>
              <p className="text-gray-300">
                A superlotação de **277%** e a falta de efetivo levam a condições sub-humanas para o preso, gerando hostilidade, motins e violência interna. Este ambiente não só viola a Constituição (Art. 5º), como sabota a ressocialização, transformando as unidades em "escolas do crime" e resultando em **maior criminalidade após a soltura**.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECÇÃO 7: NOMEAÇÕES (ID="nomeacoes")
      {/* ==================================================================== */}
      <section id="nomeacoes" className="py-20 px-4 bg-[#0B1016]">
        {/* ... (Conteúdo da Seção Nomeações - ATUALIZADO) ... */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Acompanhamento das Próximas Nomeações
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Informações essenciais sobre os atos de nomeação, posse e o andamento dos trâmites burocráticos.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#1C2A35]/60 border border-[#0D3A46]/50 rounded-xl">
              <Clock className="w-8 h-8 text-[#4FD1C5] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">Próximas Convocatórias (2025/2026)</h3>
              <ul className="text-gray-300 space-y-3 list-disc list-inside">
                <li><strong className="text-white">LDO 2026:</strong> Previsão orçamentária para nomear **990** novos servidores.</li>
                <li><strong className="text-white">Profissionais Prontos:</strong> O número da LDO é próximo do total de <strong className="text-amber-400">904</strong> profissionais já formados que aguardam.</li>
                <li><strong className="text-white">Decisão do TCDF:</strong> Determinação para que o GDF apresente um cronograma de nomeações em 2025.</li>
              </ul>
            </div>
            <div className="p-8 bg-[#1C2A35]/60 border border-[#0D3A46]/50 rounded-xl">
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

      {/* ==================================================================== */}
      {/* SECÇÃO 8: ANÁLISE CRÍTICA (ID="analise-critica")
      {/* ==================================================================== */}
      <section id="analise-critica" className="py-20 px-4 bg-[#14222E]/80 border-t border-b border-[#0D3A46]">
        {/* ... (Conteúdo da Seção Análise Crítica - ATUALIZADO) ... */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-white mb-4">
              Análise Crítica: O Custo do Desperdício
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
              A ênfase na inércia do GDF, que já investiu na formação mas falha em nomear o efetivo pronto.
            </p>
            <div className="p-8 bg-[#1C2A35]/60 border-t-4 border-[#EF4444] rounded-xl shadow-2xl space-y-6">
              <div className="flex items-center">
                <AlertTriangle className="w-10 h-10 text-[#EF4444] mr-4" />
                <h3 className="text-2xl font-bold text-white">
                  O Ponto de Inflexão: O Desperdício do Investimento
                </h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                A segurança do DF vive um paradoxo. O GDF investiu milhões na formação de <strong className="text-white">1.541 Policiais Penais</strong>, mas hoje, <strong className="text-white">904</strong> desses profissionais (1.541 formados - 637 nomeados) estão parados, aguardando nomeação.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Esta inércia, que se arrasta há mais de dois anos, forçou o <strong className="text-white">Tribunal de Contas (TCDF)</strong> a exigir um cronograma. Isso prova que o GDF só age sob pressão, não por planejamento. Manter o défice de <strong className="text-white">~1.286 cargos</strong> não é "economia", é uma <strong className="text-white">sabotagem da Inteligência Prisional</strong> e um convite ao colapso.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                O mais grave é a <strong className="text-white">quebra da Boa-Fé Administrativa</strong>: o Estado gasta o recurso público para treinar o efetivo, expondo-o a risco, e depois o abandona no limbo. É um <strong className="text-amber-400">desperdício de investimento público</strong> e uma contradição ética, enquanto o sistema opera com <strong className="text-white">277% de superlotação</strong>. A nomeação não é um favor; é um dever legal.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECÇÃO 9: GRÁFICOS (ID="graficos")
      {/* ==================================================================== */}
      <section id="graficos" className="py-20 px-4 bg-[#0B1016]">
        {/* ... (Conteúdo da Seção Gráficos - GRÁFICOS CORRIGIDOS) ... */}
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
            const dataDistribuicao = [
              { name: 'Nomeados', value: 637, fill: '#4FD1C5' },
              { name: 'Formados Aguardando', value: 904, fill: '#FBBF24' },
            ];
            const dataDemanda = [
              { name: 'Déficit de Cargos', Demanda: 1286, fill: '#EF4444' },
              { name: 'Formados para Nomear', Demanda: 904, fill: '#8B5CF6' },
              { name: 'Vagas LDO 2026', Demanda: 990, fill: '#F97316' },
            ];

            return (
              <>
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                  {/* GRÁFICO DE PIZZA CORRIGIDO */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
                    className="bg-[#1C2A35]/60 p-8 rounded-xl border border-[#0D3A46]/50"
                  >
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">Distribuição: Formados vs. Nomeados</h2>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend wrapperStyle={{ color: '#8AB4B8', paddingTop: '10px' }} />
                        <Pie
                          data={dataDistribuicao} 
                          cx="50%" cy="50%" 
                          labelLine={false} label={false} 
                          outerRadius={110} 
                          dataKey="value" 
                          stroke="#0B1016" strokeWidth={2}
                        >
                          {dataDistribuicao.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.fill} />))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
                    className="bg-[#1C2A35]/60 p-8 rounded-xl border border-[#0D3A46]/50"
                  >
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">Demanda vs. Efetivo Disponível</h2>
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
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
                  className="grid md:grid-cols-4 gap-6"
                >
                  <DataCard icon={Users} title="Total de Formados" value="1.541" description="Profissionais que concluíram o CFP." colorClass="text-[#4FD1C5]" />
                  <DataCard icon={CheckCircle}
                    title="Nomeações Realizadas" value="637" description="Servidores já nomeados (até Nov/2024)." colorClass="text-[#3B82F6]" />
                  <DataCard icon={Users}
                    title="Formados Aguardando" value="904" description="Profissionais prontos aguardando nomeação." colorClass="text-[#FBBF24]" />
                  <DataCard icon={LayoutGrid} title="Déficit de Cargos" value="~1.286" description="Cargos vagos no sistema (Julho/2023)." colorClass="text-[#EF4444]" />
                </motion.div>
              </>
            );
          })()}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECÇÃO 10: LINKS ÚTEIS (ID="links")
      {/* ==================================================================== */}
      <section id="links" className="py-20 px-4 bg-[#14222E]/80 border-t border-b border-[#0D3A46]">
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
      {/* SECÇÃO 11: GALERIA (ID="galeria")
      {/* ==================================================================== */}
      <section id="galeria" className="py-20 px-4">
        {/* ... (Conteúdo da Seção Galeria sem alterações) ... */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Galeria de Imagens
          </h2>
          <div className="relative w-full max-w-3xl mx-auto">
            <motion.img
              key={currentImageIndex} 
              src={galleryImages[currentImageIndex]} 
              alt={`Galeria Imagem ${currentImageIndex + 1}`} 
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-xl"
              initial={{ opacity: 0.5, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-0 md:-left-12 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition-all"
              aria-label="Imagem Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-0 md:-right-12 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition-all"
              aria-label="Próxima Imagem"
            >
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECÇÃO 12: FOOTER
      {/* ==================================================================== */}
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
