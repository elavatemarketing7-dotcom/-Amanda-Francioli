import React, { useState, useRef, useEffect } from "react";
import { Sparkles, HeartHandshake, Volume2, VolumeX } from "lucide-react";

export default function VideoSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Muted autoplay handled natively.", err);
      });
    }
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMutedState = !videoRef.current.muted;
      videoRef.current.muted = nextMutedState;
      setIsMuted(nextMutedState);
    }
  };

  return (
    <section id="procedimento-video" className="py-14 px-4 bg-gradient-to-b from-[#FAF8F5] to-[#F3EFE9]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gold-200/40">
          
          {/* Video Container (7 cols on desktop) */}
          <div className="md:col-span-7 w-full">
            <div 
              onClick={toggleMute}
              className="relative rounded-2xl overflow-hidden aspect-[9/16] max-w-[340px] mx-auto shadow-2xl border-2 border-gold-300 bg-neutral-900 group cursor-pointer"
            >
              {/* Dynamic Header Overlays */}
              <div className="absolute top-4 inset-x-4 flex justify-between items-center z-20 pointer-events-none">
                <span className="bg-gold-500/90 backdrop-blur-md text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border border-gold-400/50 shadow-sm">
                  DEMONSTRAÇÃO REAL
                </span>
                <div className="p-1.5 bg-black/40 backdrop-blur-md rounded-full">
                  <Sparkles size={14} className="text-gold-300 animate-pulse" />
                </div>
              </div>

              {/* Native Self-Playing Video Element */}
              <video
                ref={videoRef}
                src="https://i.imgur.com/8bXGv1h.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="auto"
              />

              {/* Ambient Shadow Overlays for better contrast */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950/60 to-transparent pointer-events-none z-10" />

              {/* Bottom Custom Sound Overlay Controller */}
              <div className="absolute bottom-4 inset-x-4 flex items-center justify-between z-20">
                <div className="pointer-events-none">
                  <h4 className="text-white text-[11px] font-serif font-bold tracking-wide text-shadow">
                    Método Dra. Amanda Francioli
                  </h4>
                  <p className="text-gold-200 text-[9px] uppercase tracking-wider mt-0.5">
                    Toque para {isMuted ? "ativar" : "desativar"} o som
                  </p>
                </div>

                {/* The Custom Mute/Unmute Pill */}
                <button
                  onClick={toggleMute}
                  className={`p-2.5 rounded-full transition-all duration-300 shadow-lg flex items-center justify-center cursor-pointer ${
                    isMuted 
                      ? "bg-amber-500 hover:bg-amber-600 text-neutral-950 animate-pulse-subtle" 
                      : "bg-white hover:bg-neutral-100 text-neutral-900"
                  }`}
                  id="btn-sound-toggle"
                  title={isMuted ? "Ativar Som" : "Mudar para Mudo"}
                >
                  {isMuted ? (
                    <div className="flex items-center gap-1.5 px-1">
                      <VolumeX size={16} strokeWidth={2.5} />
                      <span className="text-[9px] font-bold tracking-wider uppercase font-sans">Sem Som</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 px-1">
                      <Volume2 size={16} strokeWidth={2.5} />
                      <span className="text-[9px] font-bold tracking-wider uppercase font-sans font-semibold">Com Som</span>
                    </div>
                  )}
                </button>
              </div>

              {/* Glowing Pulse overlay for the sound call-to-action */}
              {isMuted && (
                <div className="absolute inset-0 border-2 border-amber-400/40 rounded-2xl pointer-events-none animate-pulse-subtle z-10" />
              )}
            </div>
          </div>

          {/* Persuasive copy side (5 cols on desktop) */}
          <div className="md:col-span-5 space-y-6 text-center md:text-left">
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-2 text-gold-600">
                <HeartHandshake size={20} />
                <span className="text-[11px] uppercase tracking-widest font-bold">Alta Sensibilidade</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-neutral-900 tracking-tight leading-tight">
                Beleza que respeita a sua identidade
              </h3>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed font-sans font-light">
              Descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito. 
              Resultados naturais e transformadores. Sinta a diferença de ser cuidada 
              por quem entende que sua beleza é única, e merece atenção especial.
            </p>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-neutral-100">
              <div className="space-y-0.5">
                <span className="text-xs text-neutral-400 block">Especialidade</span>
                <span className="text-sm font-semibold text-neutral-850">Full Face MD Codes</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-xs text-neutral-400 block">Atendimento</span>
                <span className="text-sm font-semibold text-neutral-850">Individualizado</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
