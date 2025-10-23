import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp, CheckCircle, Sparkles, User, Lightbulb, Search, Eye } from 'lucide-react'
import './App.css'

// Importando o componente de animação
import AnimatedSection from '@/components/ui/AnimatedSection.jsx';

// Importando as imagens (Verifique as extensões na sua pasta assets)
import ppdf01Img from './assets/ppdf01.png'; // Imagem Principal
import ppdf02Img from './assets/ppdf02.png'; // Imagem de Fundo
import ppdf04Img from './assets/ppdf04.jpg'; // Exemplo
import ppdf05Img from './assets/ppdf05.jpeg'; // Exemplo
import digitalToolsImg from './assets/1000395915.jpg'; // Imagem das ferramentas
import brainAIImg from './assets/1000393262.jpg'; // Imagem da IA
import xadrezStrategiaImg from './assets/xadrez-estrategia.jpg'; // Imagem de Estratégia
import servicosIAImg from './assets/servicos-ia.jpg'; // Imagem de Serviços IA
import garantia7DiasImg from './assets/7-dias-garantido.jpg'; // Imagem de Garantia

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    // Fundo geral Branco/Cinza
    <div className="min-h-screen bg-white font-['Poppins',sans-serif] overflow-x-hidden text-gray-800">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        
        {/* IMAGEM DE FUNDO GLOBAL (ppdf02) */}
        <div className="absolute inset-0 opacity-10">
          <img
            src={ppdf02Img}
            alt="Fundo Concurso Polícia Penal"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Overlay Branco */}
        <div className="absolute inset-0 bg-white/95"></div>

        {/* Conteúdo Principal */}
        <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* TÍTULO PRINCIPAL */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Concurso <span className="text-blue-600">Polícia Penal</span> 2022
          </h1>

          {/* IMAGEM PRINCIPAL CENTRALIZADA (ppdf01) */}
          <div className="mb-8">
            <img
              src={ppdf01Img}
              alt="Imagem principal Concurso Polícia Penal"
              className="mx-auto w-64 md:w-80 h-auto rounded-lg shadow-xl"
            />
          </div>

          {/* SUBHEADLINE PERSUASIVA */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Prepare-se com os melhores recursos para a sua aprovação.
          </p>

          {/* CHAMADA PARA AÇÃO */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 border-0"
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

          {/* Elementos Visuais de Destaque */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-600">Material Completo</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-600">Foco na Aprovação</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-600">Aulas Didáticas</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Demais seções (Cores ajustadas para branco/cinza) --- */}
      
      {/* Footer */}
      <section>
        <AnimatedSection>
          <footer className="py-12 px-4 bg-gray-100 border-t border-gray-200">
            <div className="max-w-6xl mx-auto text-center">
              <div className="mb-8">
                <img
                  src={garantia7DiasImg}
                  alt="Garantia de 7 dias ou seu dinheiro de volta"
                  className="mx-auto w-48 h-auto"
                />
              </div>
              <p className="text-gray-600 text-lg">
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
