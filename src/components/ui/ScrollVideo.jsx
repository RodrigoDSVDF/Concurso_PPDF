import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Componente que lida com o vídeo de fundo controlado por scroll
const ScrollVideo = ({ src, children }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [videoDuration, setVideoDuration] = useState(0);

  // Hook para obter a duração do vídeo quando ele carregar
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleLoadedMetadata = () => {
        setVideoDuration(videoElement.duration);
      };
      videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
      return () => {
        videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [src]);

  // Hook da Framer Motion para rastrear o progresso da rolagem no container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'], // Começa a rastrear no topo do container e termina no final
  });

  // Hook para transformar o progresso (0 a 1) no tempo do vídeo (0 a duração)
  const currentTime = useTransform(scrollYProgress, [0, 1], [0, videoDuration]);

  // Efeito para atualizar o tempo do vídeo sempre que o valor de 'currentTime' mudar
  useEffect(() => {
    const unsubscribe = currentTime.onChange((latestTime) => {
      if (videoRef.current) {
        videoRef.current.currentTime = latestTime;
      }
    });
    return () => unsubscribe();
  }, [currentTime]);

  return (
    <div ref={containerRef} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          playsInline // Essencial para autoplay em mobile
          muted     // Autoplay só funciona sem som
          className="w-full h-full object-cover"
        />
      </div>
      {/* O conteúdo que rola por cima do vídeo */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ScrollVideo;
