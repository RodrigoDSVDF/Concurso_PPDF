import { useState, useEffect } from 'react'
// import { Button } from '@/components/ui/button.jsx' // COMENTADO: Componente que estava quebrando o código!
import { ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp, CheckCircle, Sparkles, User, Lightbulb, Search, Eye } from 'lucide-react'
import './App.css' 

// import AnimatedSection from '@/components/ui/AnimatedSection.jsx'; // COMENTADO: Componente de animação que pode estar faltando no deploy!

// Importando as imagens (Mantenha essas linhas)
import ppdf01Img from './assets/ppdf01.png'; // Imagem Principal
import ppdf02Img from './assets/ppdf02.png'; // Imagem de Fundo
// Mantenha todas as outras importações de imagem que você precisa
// ... 

// **NOTA**: Usei o design anterior (escuro) para este teste, 
// pois o problema do design branco pode estar nas classes CSS ausentes.

function App() {
  const [isVisible, setIsVisible] = useState(false) 

  useEffect(() => {
    setIsVisible(true)
  }, []) 

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  } 

  return (
    // Se o CSS estiver correto, o fundo escuro/claro vai funcionar
    <div className="min-h-screen bg-[#0B1016] font-['Poppins',sans-serif] overflow-x-hidden">
      {/* Hero Section com Nova Paleta */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Elementos de fundo com nova paleta */}
        <div className="hidden md:block absolute top-20 left-20 w-72 h-72 bg-[#0D3A46]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-[#0D3A46]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Imagem de Fundo */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src={ppdf02Img} // IMAGEM DE FUNDO
            alt="Fundo" 
            className="w-full h-full object-cover object-right"
          />
        </div>
        
        {/* Overlay com gradiente da nova paleta */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1016]/90 via-[#14222E]/80 to-[#0B1016]/85"></div>
        
        {/* Conteúdo Principal */}
        <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge de Destaque */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0D3A46]/30 to-[#14222E]/40 border border-[#0D3A46]/50 rounded-full text-[#8AB4B8] text-sm font-medium mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2" />
            TESTE DE CARREGAMENTO (IGNORANDO ERROS)
          </div>

          {/* HEADLINE PRINCIPAL */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Concurso <span className="bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] bg-clip-text text-transparent">Polícia Penal</span> 2022
          </h1>

          {/* IMAGEM PRINCIPAL CENTRALIZADA (ppdf01) */}
          <div className="mb-8">
            <img
              src={ppdf01Img} // IMAGEM PRINCIPAL
              alt="Imagem principal Concurso Polícia Penal"
              className="mx-auto w-64 md:w-80 h-auto rounded-lg shadow-xl"
            />
          </div>

          {/* SUBHEADLINE PERSUASIVA */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Se você está lendo isso, o código base já está funcionando.
          </p>

          {/* CHAMADA PARA AÇÃO: SUBSTITUIÇÃO DO <Button> por <button> HTML simples */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
              <button // TAG BUTTON SIMPLES
                className="h-14 px-8 bg-gradient-to-r from-[#00d4ff] to-[#00ff88] text-black font-bold rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-0"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Começar Agora (TESTE)
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </a>
            
            <button // TAG BUTTON SIMPLES
              className="h-14 px-8 border-2 border-gray-400 text-white font-bold rounded-xl transition-all duration-300"
              onClick={() => scrollToSection('beneficios')}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Saiba Mais (TESTE)
            </button>
          </div>
          {/* ... (O restante das seções deve ter <AnimatedSection> substituído por <div>) ... */}
        </div>
      </section>
      
      {/* Footer */}
      <section>
        {/* SUBSTITUINDO <AnimatedSection> por <div> */}
        <div className="py-12 px-4 bg-[#0B1016] border-t border-[#1C2A35]">
            <div className="max-w-6xl mx-auto text-center">
              <p className="text-gray-400 text-lg">
                © 2024 TESTE DE ISOLAMENTO.
              </p>
            </div>
        </div>
      </section>
    </div>
  )
} 

export default App
