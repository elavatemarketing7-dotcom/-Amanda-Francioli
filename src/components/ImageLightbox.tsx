import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, ChevronLeft, ChevronRight, ShieldAlert, Sparkles } from "lucide-react";
import { GalleryItem } from "../types";

// ==========================================
// 🚨 ADICIONE NOVOS LINKS DE IMAGENS AQUI:
// ==========================================
const GALLERY_ITEMS: GalleryItem[] = [
  // 1. RESULTADOS REAIS (ANTES E DEPOIS / PROVAS SOCIAIS)
  {
    url: "https://i.imgur.com/B7Wh0dH.png",
    alt: "Caso Clínico de Harmonização Facial 1",
    category: "antes-depois",
    caption: "Definição de contorno mandibular e sustentação malar"
  },
  {
    url: "https://i.imgur.com/kySdwBV.png",
    alt: "Caso Clínico de Harmonização Facial 2",
    category: "antes-depois",
    caption: "Protocolo completo de rejuvenescimento full face"
  },
  {
    url: "https://i.imgur.com/YFB28lR.png",
    alt: "Caso Clínico de Harmonização Facial 3",
    category: "antes-depois",
    caption: "Melhoria de olheiras e estruturação do terço médio"
  },
  {
    url: "https://i.imgur.com/fBFy1AG.png",
    alt: "Caso Clínico de Harmonização Facial 4",
    category: "antes-depois",
    caption: "MD Codes para efeito lifting e preenchimento sutil"
  },
  {
    url: "https://i.imgur.com/SncmOKl.png",
    alt: "Caso Clínico de Harmonização Facial 5",
    category: "antes-depois",
    caption: "Preenchimento labial com foco em naturalidade e simetria"
  },

  // 2. DETALHES E BASTIDORES DO CUIDADO (DE 💚)
  {
    url: "https://i.imgur.com/uHF2930.png",
    alt: "Detalhe do Cuidado 1",
    category: "detalhe",
    caption: "Dra. Amanda Francioli - Consulta e diagnóstico exclusivo"
  },
  {
    url: "https://i.imgur.com/QZsOGQz.png",
    alt: "Detalhe do Cuidado 2",
    category: "detalhe",
    caption: "Acompanhamento minucioso de cada fase do procedimento"
  },
  {
    url: "https://i.imgur.com/2IkJ76L.png",
    alt: "Detalhe do Cuidado 3",
    category: "detalhe",
    caption: "Resultados com refinamento estético e segurança clínica"
  },
  {
    url: "https://i.imgur.com/iLgz5gw.png",
    alt: "Detalhe do Cuidado 4",
    category: "detalhe",
    caption: "Amor por devolver a autoestima e autoconfiança de cada olhar"
  },

  // BASTIDORES DA EXPERT
  {
    url: "https://i.imgur.com/lhlyShJ.png",
    alt: "Dra. Amanda Francioli em Atendimento",
    category: "bastidores",
    caption: "Dra. Amanda Francioli - Dedicação profissional em cada detalhe"
  }
];

export default function ImageLightbox() {
  const [activeCategory, setActiveCategory] = useState<"todos" | "antes-depois" | "bastidores-detalhe">("todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter logic
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === "todos") return true;
    if (activeCategory === "antes-depois") return item.category === "antes-depois";
    return item.category === "detalhe" || item.category === "bastidores";
  });

  const openLightbox = (url: string) => {
    const idx = GALLERY_ITEMS.findIndex((item) => item.url === url);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="prova-visual" className="py-16 px-4 bg-white">
      {/* Encapsulated styling for the smooth infinite auto-scroll marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 1rem)); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .hover-pause:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-gold-50 border border-gold-200 text-gold-700 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
            <Sparkles size={12} className="text-gold-500" />
            GALERIA DE CASOS REAIS
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 tracking-tight">
            A Arte da Naturalidade
          </h2>
          <p className="text-xs text-neutral-500 max-w-md mx-auto leading-relaxed">
            Resultados reais que ressaltam a harmonia e preservam as expressões únicas de cada paciente. Toque em qualquer imagem para ampliar.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-1.5 max-w-sm mx-auto p-1 bg-neutral-100 rounded-xl">
          <button
            onClick={() => setActiveCategory("todos")}
            className={`flex-1 py-2 text-center rounded-lg text-xs font-semibold transition ${
              activeCategory === "todos"
                ? "bg-white text-neutral-950 shadow-sm"
                : "text-neutral-500 hover:text-neutral-800"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setActiveCategory("antes-depois")}
            className={`flex-1 py-2 text-center rounded-lg text-xs font-semibold transition ${
              activeCategory === "antes-depois"
                ? "bg-white text-neutral-950 shadow-sm"
                : "text-neutral-500 hover:text-neutral-800"
            }`}
          >
            Antes & Depois
          </button>
          <button
            onClick={() => setActiveCategory("bastidores-detalhe")}
            className={`flex-1 py-2 text-center rounded-lg text-xs font-semibold transition ${
              activeCategory === "bastidores-detalhe"
                ? "bg-white text-neutral-950 shadow-sm"
                : "text-neutral-500 hover:text-neutral-800"
            }`}
          >
            Bastidores / ❤️
          </button>
        </div>

        {/* Continuous Horizontal Marquee Container */}
        <div className="relative w-full overflow-hidden py-4 hover-pause">
          {/* Elegant Left/Right Gradient Fades */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Marquee Track Group */}
          <div className="flex gap-4 w-max">
            {/* First Track Copy */}
            <div className="animate-marquee flex gap-4 shrink-0">
              {filteredItems.map((item, index) => (
                <div
                  key={`track1-${item.url}-${index}`}
                  onClick={() => openLightbox(item.url)}
                  className="relative w-44 h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden cursor-zoom-in bg-neutral-100 border border-neutral-200/50 shrink-0 group shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay Hover effect */}
                  <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 z-10">
                    <div className="self-end p-1.5 bg-white/90 backdrop-blur rounded-full text-neutral-900 shadow-sm">
                      <ZoomIn size={12} />
                    </div>
                    {item.caption && (
                      <p className="text-[10px] text-white font-medium tracking-wide leading-normal">
                        {item.caption}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Second Identical Track Copy for seamless infinite loop */}
            <div className="animate-marquee flex gap-4 shrink-0" aria-hidden="true">
              {filteredItems.map((item, index) => (
                <div
                  key={`track2-${item.url}-${index}`}
                  onClick={() => openLightbox(item.url)}
                  className="relative w-44 h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden cursor-zoom-in bg-neutral-100 border border-neutral-200/50 shrink-0 group shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay Hover effect */}
                  <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 z-10">
                    <div className="self-end p-1.5 bg-white/90 backdrop-blur rounded-full text-neutral-900 shadow-sm">
                      <ZoomIn size={12} />
                    </div>
                    {item.caption && (
                      <p className="text-[10px] text-white font-medium tracking-wide leading-normal">
                        {item.caption}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="p-3 bg-neutral-50 rounded-2xl border border-neutral-100 max-w-md mx-auto flex items-center justify-center gap-2 text-neutral-500 text-[10px] text-center">
          <ShieldAlert size={14} className="text-neutral-400 shrink-0" />
          <span>Aviso discreto: Resultados podem variar de pessoa para pessoa. Cada tratamento é planejado sob medida.</span>
        </div>

      </div>

      {/* LIGHTBOX FULLSCREEN MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 lightbox-backdrop flex flex-col justify-between p-4"
          >
            {/* Header: Close */}
            <div className="w-full flex justify-between items-center text-white p-2">
              <span className="text-xs font-mono text-neutral-400">
                Caso {lightboxIndex + 1} de {GALLERY_ITEMS.length}
              </span>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
                id="btn-close-lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content: Main Image with Nav buttons */}
            <div className="relative flex-1 flex items-center justify-center">
              
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white transition z-10"
                id="btn-prev-lightbox"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Centered Image Container */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-full max-h-[70vh] md:max-h-[80vh] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black/40"
              >
                <img
                  src={GALLERY_ITEMS[lightboxIndex].url}
                  alt={GALLERY_ITEMS[lightboxIndex].alt}
                  className="max-w-full max-h-[70vh] md:max-h-[80vh] object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white transition z-10"
                id="btn-next-lightbox"
              >
                <ChevronRight size={24} />
              </button>

            </div>

            {/* Footer: Caption */}
            <div className="w-full text-center p-4 text-white space-y-1">
              <p className="text-sm font-serif">
                {GALLERY_ITEMS[lightboxIndex].caption || GALLERY_ITEMS[lightboxIndex].alt}
              </p>
              <p className="text-[10px] text-gold-400 tracking-wider uppercase">
                Amanda Francioli ✦ Harmonização Facial
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
