import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp, CheckCircle, Sparkles, User, Lightbulb, Search, Eye } from 'lucide-react'
import './App.css'

// Importando o componente de animação
import AnimatedSection from '@/components/ui/AnimatedSection.jsx';

// Importando as imagens
// Use os nomes EXATOS dos arquivos na sua pasta assets
import ppdf01Img from './assets/ppdf01.png'; // Verifique a extensão correta aqui (sua lista mostra .png)
import ppdf02Img from './assets/ppdf02.png'; // Verifique a extensão correta aqui
import ppdf04Img from './assets/ppdf04.jpg'; // Exemplo
import ppdf05Img from './assets/ppdf05.jpeg'; // Exemplo
// ... e o resto das suas imagens, certificando-se das extensões corretas.

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    // Ajuste o background geral para usar a nova paleta
    <div className="min-h-screen bg-white font-['Poppins',sans-serif] overflow-x-hidden text-gray-800">
      {/* Hero Section com a nova paleta e layout de imagens */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        
        {/* IMAGEM DE FUNDO GLOBAL (ppdf02) - AGORA EM TODA A SECTION */}
        <div className="absolute inset-0 opacity-10"> {/* Ajuste a opacidade conforme desejar (10% a 30% para fundo sutil) */}
          <img
            src={ppdf02Img}
            alt="Fundo Concurso Polícia Penal"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Overlay para clarear/escurecer e aplicar a cor de fundo principal da section */}
        <div className="absolute inset-0 bg-white/90"></div> {/* Branco com 90% de opacidade para um look clean */}

        {/* Conteúdo Principal */}
        <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* TÍTULO PRINCIPAL */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Concurso <span className="text-[#007BFF]">Polícia Penal</span> 2022
          </h1>

          {/* IMAGEM PRINCIPAL CENTRALIZADA (ppdf01) */}
          <div className="mb-8">
            <img
              src={ppdf01Img}
              alt="Imagem principal Concurso Polícia Penal"
              className="mx-auto w-64 md:w-80 h-auto rounded-lg shadow-xl" // Ajuste o tamanho e adicione estilos de sombra/borda
            />
          </div>

          {/* SUBHEADLINE PERSUASIVA (ajuste o texto para o contexto) */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Prepare-se com os melhores recursos para a sua aprovação.
          </p>

          {/* CHAMADA PARA AÇÃO (ajuste as cores dos botões) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="h-14 px-8 bg-[#007BFF] hover:bg-[#0056b3] text-white font-bold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 border-0"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Quero ser Aprovado
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 border-2 border-gray-400 text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-bold rounded-xl transition-all duration-300"
              onClick={() => scrollToSection('beneficios')}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Ver Conteúdo
            </Button>
          </div>

          {/* Elementos Visuais de Destaque (cores ajustadas) */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#007BFF] rounded-2xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-600">Material Completo</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#007BFF] rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-600">Foco na Aprovação</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#007BFF] rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-600">Aulas Didáticas</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator (ajustar cor) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Demais seções --- */}
      {/* Ajuste as classes de background para 'bg-gray-50' ou 'bg-white' e cores de texto para 'text-gray-800' */}
      {/* Exemplo de uma seção seguinte: */}
      <section className="py-32 px-4 bg-gray-50"> {/* Fundo cinza claro */}
        <div className="max-w-6xl mx-auto text-gray-800"> {/* Texto cinza escuro */}
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Por que escolher o <span className="text-[#007BFF]">Nexus</span>?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Nosso método é focado em resultados, com conteúdo atualizado e estratégias comprovadas.
              </p>
            </div>
          </AnimatedSection>
          
          {/* Aqui você pode distribuir outras imagens (ppdf04, ppdf05, etc.) */}
          {/* Exemplo de onde colocar uma imagem: */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img src={ppdf04Img} alt="Benefício 1" className="w-full h-auto rounded-lg shadow-md mb-8" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Aulas Diretas ao Ponto</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Conteúdo objetivo para você otimizar seu tempo de estudo.
              </p>
            </div>
            <div>
              <img src={ppdf05Img} alt="Benefício 2" className="w-full h-auto rounded-lg shadow-md mb-8" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Simulados Realistas</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Pratique com questões que realmente caem na prova.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Continue ajustando as classes de background e texto para as demais seções */}
      {/* Certifique-se de que todas as classes 'bg-[#0B1016]' e gradientes escuros sejam substituídos por 'bg-white', 'bg-gray-50', 'bg-gray-100' */}
      {/* E as classes de texto de 'text-white' ou 'text-gray-200/300' para 'text-gray-800', 'text-gray-700' */}

      {/* Seção de Ferramentas Práticas */}
      {/* ... (ajuste de cores e distribuição de imagens) */}

      {/* Benefícios */}
      {/* ... (ajuste de cores e distribuição de imagens) */}

      {/* Seção de Prova/Autoridade */}
      {/* ... (ajuste de cores e distribuição de imagens) */}

      {/* Chamada para Ação */}
      {/* ... (ajuste de cores) */}

      {/* Footer */}
      <section>
        <AnimatedSection>
          <footer className="py-12 px-4 bg-gray-100 border-t border-gray-200"> {/* Fundo cinza claro, borda mais clara */}
            <div className="max-w-6xl mx-auto text-center">
              <div className="mb-8">
                {/* Você pode manter a imagem de garantia se ainda for relevante */}
                {/* <img
                  src={garantia7DiasImg}
                  alt="Garantia de 7 dias ou seu dinheiro de volta"
                  className="mx-auto w-48 h-auto"
                /> */}
              </div>
              <p className="text-gray-600 text-lg"> {/* Texto cinza médio */}
                © 2024 Concurso Polícia Penal 2022. Todos os direitos reservados.
              </p>
            </div>
          </footer>
        </AnimatedSection>
      </section>
    </div>
  )
}

export default App
