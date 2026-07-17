import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Sparkle, 
  ChevronRight, 
  Instagram, 
  ThumbsUp, 
  Heart, 
  CheckCircle2, 
  Info, 
  User, 
  BookmarkCheck,
  Stethoscope
} from "lucide-react";
import QuizOverlay from "./components/QuizOverlay";
import RunningNavigation from "./components/RunningNavigation";
import VideoSection from "./components/VideoSection";
import ImageLightbox from "./components/ImageLightbox";
import MapSection from "./components/MapSection";

// Primary Expert Info
const EXPERT_NAME = "Dra. Amanda Francioli";
const EXPERT_PROFE = "Harmonização Full Face";
const EXPERT_CITY = "Zona Norte - SP";
const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5511998732653&text=Ol%C3%A1%20Dra.%20Amanda%20Francioli!%20Gostaria%20de%20agendar%20minha%20consulta%20de%20avalia%C3%A7%C3%A3o%20exclusiva.&type=phone_number&app_absent=0";
const INSTAGRAM_URL = "https://www.instagram.com/draamandafrancioli/reels/";

// Images supplied by user
const FOTO_HEROI_MAIN = "https://i.imgur.com/12OuQYe.png"; // Chest up photo
const FOTO_HEROI_OTHER = "https://i.imgur.com/lhlyShJ.png"; // Authority photo

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(true);

  const handleOpenQuiz = () => {
    setIsQuizOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDirectWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-neutral-900 font-sans antialiased overflow-x-hidden selection:bg-gold-200 selection:text-gold-900">
      
      {/* 1. QUIZ OVERLAY CONTAINER */}
      <AnimatePresence>
        {isQuizOpen && (
          <QuizOverlay onClose={() => setIsQuizOpen(false)} />
        )}
      </AnimatePresence>

      {/* 2. TICKER NAVIGATION HEADER (EXTRA 2) */}
      {!isQuizOpen && <RunningNavigation />}

      {/* MAIN CONTENT AREA */}
      <div className={`transition-all duration-500 ${isQuizOpen ? "blur-md pointer-events-none scale-98" : "blur-0"}`}>
        
        {/* 3. HERO SECTION (PRIMEIRA DOBRA) */}
        <header id="hero" className="relative py-12 md:py-20 px-4 bg-gradient-to-b from-[#FAF8F5] to-white overflow-hidden border-b border-neutral-100">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#d4bf83_1.2px,transparent_1.2px)] [background-size:24px_24px] -z-10" />
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Copy column (7 cols on desktop) */}
            <div className="md:col-span-7 space-y-6 text-center md:text-left">
              
              <div className="inline-flex items-center gap-1.5 bg-gold-50 border border-gold-200 text-gold-700 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-xs">
                <Sparkle size={10} className="fill-gold-400 text-gold-400" />
                MÉTODO EXCLUSIVO FULL FACE
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-serif font-semibold text-neutral-900 tracking-tight leading-tight">
                  Eu sou a <span className="text-gold-600 font-serif relative inline-block">Dra. Amanda Francioli</span> e irei revelar a sua melhor versão.
                </h1>
                <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed max-w-xl">
                  Sem exageros, artificialidades ou perda de identidade. Através de um protocolo personalizado, resgatamos os contornos, a sustentação e a elegância da sua face com total segurança.
                </p>
              </div>

              {/* Major Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  id="btn-hero-cta"
                  onClick={handleDirectWhatsApp}
                  className="w-full md:w-auto py-4.5 px-8 bg-emerald-600 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-emerald-700 active:scale-[0.98] transition-all duration-200 shadow-xl hover:shadow-emerald-600/10 cursor-pointer"
                >
                  <MessageCircle size={18} className="fill-white" />
                  <span>CLIQUE AQUI PARA SABER MAIS (WhatsApp)</span>
                  <ChevronRight size={16} />
                </button>
                <p className="text-[11px] text-neutral-400 tracking-wider uppercase font-medium">
                  ✦ primeira consulta sem compromisso ✦
                </p>
              </div>

              {/* Tiny Trust Badges */}
              <div className="flex flex-wrap justify-center md:justify-start gap-5 pt-4 text-xs text-neutral-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-gold-500" />
                  <span>Segurança Médica</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={16} className="text-gold-500" />
                  <span>Atendimento Pontual</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-gold-500" />
                  <span>Resultados Naturais</span>
                </div>
              </div>

            </div>

            {/* Profile Photo Column (5 cols on desktop) */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group max-w-[300px] w-full aspect-[4/5]">
                {/* Gold glowing halo in behind */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-300 via-[#faf8f5] to-amber-200 rounded-3xl blur-md opacity-50 group-hover:opacity-75 transition duration-500" />
                
                {/* Image frame */}
                <div className="relative h-full w-full rounded-3xl overflow-hidden border-2 border-gold-300 shadow-2xl bg-white p-2">
                  <img 
                    src={FOTO_HEROI_MAIN} 
                    alt="Dra. Amanda Francioli" 
                    className="w-full h-full object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating floating label */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 text-neutral-900 border border-gold-300/40 py-1.5 px-4 rounded-xl shadow-md text-center shrink-0 w-max">
                    <span className="text-[10px] font-bold uppercase tracking-wider block text-gold-600">Dra. Amanda Francioli</span>
                    <span className="text-[9px] text-neutral-400 tracking-widest block font-medium uppercase mt-0.5">Especialista Ativa</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </header>

        {/* 4. PROCEDURE VIDEO SECTION (WELL HIGHLIGHTED AT START) */}
        <VideoSection />

        {/* 5. QUEM SOU EU (PERSONAL AUTHORITY) */}
        <section id="sobre-mim" className="py-16 px-4 bg-white border-b border-neutral-100">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Photo Column */}
            <div className="md:col-span-5 flex justify-center order-last md:order-first">
              <div className="relative max-w-[280px] w-full aspect-[3/4]">
                <div className="absolute inset-0 bg-gold-100 rounded-2xl rotate-2" />
                <img 
                  src={FOTO_HEROI_OTHER} 
                  alt="Dra. Amanda Francioli em Atendimento" 
                  className="relative rounded-2xl object-cover shadow-lg w-full h-full border border-neutral-200"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Biography Copy */}
            <div className="md:col-span-7 space-y-6">
              <div className="space-y-3 text-center md:text-left">
                <span className="text-[10px] bg-gold-50 border border-gold-200 text-gold-700 font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-xs">
                  AUTORIDADE PESSOAL
                </span>
                <h2 className="text-3xl font-serif font-semibold text-neutral-900 tracking-tight leading-tight">
                  Minha missão é resgatar a sua autoestima com elegância
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-600 leading-relaxed font-light">
                <p>
                  Olá, sou a <strong className="text-neutral-900 font-medium">Dra. Amanda Francioli</strong>. Meu trabalho é voltado exclusivamente para pessoas que buscam melhorar a aparência sem parecerem "artificiais" ou "infladas".
                </p>
                <p>
                  Acredito que a verdadeira beleza reside na harmonia natural e no respeito à anatomia única de cada rosto. Com o Método Full Face, nós olhamos para a face como um todo, aplicando pontos de sustentação matemáticos que devolvem a jovialidade e o frescor sem alterar a sua expressão natural.
                </p>
              </div>

              {/* Key Differentiators Lists */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <span className="text-gold-500 font-semibold shrink-0 mt-0.5">✦</span>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    <strong className="text-neutral-900">Avaliação Individualizada:</strong> Nenhuma face é idêntica. Desenhamos o plano de aplicação baseado exclusivamente em suas proporções estruturais.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-gold-500 font-semibold shrink-0 mt-0.5">✦</span>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    <strong className="text-neutral-900">Naturalidade Absoluta:</strong> Filosofia de aplicação precisa e conservadora, focada no efeito "descansado" e "rejuvenescido".
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-gold-500 font-semibold shrink-0 mt-0.5">✦</span>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    <strong className="text-neutral-900">Insumos de Excelência:</strong> Utilização estrita dos melhores ácidos hialurônicos e bioestimuladores disponíveis na medicina estética mundial.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 6. RESULTADOS REAIS & PROVAS SOCIAIS (Antes/Depois + Lightbox + Disclaimer) */}
        <ImageLightbox />

        {/* 7. POR QUE CONFIAR EM MIM (TRUST CARDS) */}
        <section id="harmonizacao" className="py-16 px-4 bg-gradient-to-b from-white to-[#FAF8F5] border-t border-neutral-100">
          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* Title */}
            <div className="text-center space-y-3">
              <span className="text-[10px] bg-neutral-950 text-gold-200 font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                DIFERENCIAIS CLAVE
              </span>
              <h2 className="text-3xl font-serif font-semibold text-neutral-900 tracking-tight">
                Por que Escolher o meu Método?
              </h2>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto leading-relaxed">
                Nossa filosofia une sensibilidade estética, rigor técnico e foco total na experiência individual do paciente.
              </p>
            </div>

            {/* Differentiators Grid (4 cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-2xl border border-gold-200/40 shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center text-gold-600">
                  <ThumbsUp size={18} />
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 font-serif">Avaliação Honesta</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  Sem empurrar tratamentos desnecessários. Recomendo estritamente o que trará rejuvenescimento real e harmonia.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-2xl border border-gold-200/40 shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center text-gold-600">
                  <User size={18} />
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 font-serif">Atendimento Exclusivo</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  Do diagnóstico inicial à aplicação e revisões pós-procedimento, tudo é feito pessoalmente por mim.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-2xl border border-gold-200/40 shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center text-gold-600">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 font-serif">Clareza Absoluta</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  Explicação transparente de cada etapa, seringa e material aplicado para que você se sinta 100% no controle.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-2xl border border-gold-200/40 shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center text-gold-600">
                  <Sparkles size={18} />
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 font-serif">Prevenção Sutil</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  Indicações focadas em modular o envelhecimento de forma elegante, preservando sua musculatura facial ativa.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 8. INTERMEDIATE CTA SECTION (OBJECTION BREAK) */}
        <section className="py-12 px-4 bg-[#1c1917] text-white">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-xl md:text-2xl font-serif text-gold-200 font-medium leading-snug">
              Tem receio de perder as suas expressões ou ficar com aparência artificial?
            </h3>
            <p className="text-xs text-neutral-400 max-w-lg mx-auto leading-relaxed">
              Minha filosofia é baseada em realçar o que você já tem de melhor. O segredo está na sutileza dos detalhes. Dê o primeiro passo com total segurança.
            </p>
            <div className="pt-2">
              <button
                id="btn-intermediate-cta"
                onClick={handleDirectWhatsApp}
                className="w-full md:w-auto py-3.5 px-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-xs flex items-center justify-center gap-2 mx-auto active:scale-[0.98] transition cursor-pointer"
              >
                <MessageCircle size={15} className="fill-white" />
                <span>CLIQUE AQUI PARA AGENDAR NO WHATSAPP</span>
              </button>
            </div>
          </div>
        </section>

        {/* 9. COMO FUNCIONA A PRIMEIRA CONSULTA (3 PASSOS) */}
        <section className="py-16 px-4 bg-white border-b border-neutral-100">
          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* Title */}
            <div className="text-center space-y-3">
              <span className="text-[10px] bg-gold-50 border border-gold-200 text-gold-700 font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                JORNADA DA PACIENTE
              </span>
              <h2 className="text-3xl font-serif font-semibold text-neutral-900 tracking-tight">
                Como Funciona a sua Consulta?
              </h2>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto leading-relaxed">
                Criamos uma experiência segura, acolhedora e livre de pressões, pensada inteiramente em você.
              </p>
            </div>

            {/* 3 Step Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Step 1 */}
              <div className="relative p-6 bg-neutral-50 rounded-2xl border border-neutral-100 text-center space-y-4">
                <span className="absolute top-4 left-4 text-3xl font-serif font-bold text-gold-200/50">01</span>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gold-600 shadow-sm mx-auto">
                  <MessageCircle size={20} />
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 font-serif pt-2">1 - Pré-contato WhatsApp</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  Você conversa de forma preliminar conosco, alinha suas preferências de datas e esclarece suas dúvidas iniciais sobre o método.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative p-6 bg-neutral-50 rounded-2xl border border-neutral-100 text-center space-y-4">
                <span className="absolute top-4 left-4 text-3xl font-serif font-bold text-gold-200/50">02</span>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gold-600 shadow-sm mx-auto">
                  <Clock size={20} />
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 font-serif pt-2">2 - Agendamento & Recepção</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  Reservamos uma vaga exclusiva em nosso consultório na Zona Norte de SP. Sem salas de espera cheias ou pressas comerciais.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative p-6 bg-neutral-50 rounded-2xl border border-neutral-100 text-center space-y-4">
                <span className="absolute top-4 left-4 text-3xl font-serif font-bold text-gold-200/50">03</span>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gold-600 shadow-sm mx-auto">
                  <BookmarkCheck size={20} />
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 font-serif pt-2">3 - Avaliação & Planejamento</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  Mapeamos as estruturas ósseas e musculares do seu rosto, propondo o plano de aplicação personalizado e sem compromisso.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 10. MAPA DE LOCALIZAÇÃO (ZONA NORTE - SP) */}
        <MapSection />

        {/* 11. CTA FINAL (DECISION DOBRA) */}
        <section id="contato" className="py-20 px-4 bg-white relative overflow-hidden border-t border-neutral-100">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#d4bf83_1.2px,transparent_1.2px)] [background-size:24px_24px] -z-10" />
          
          <div className="max-w-xl mx-auto text-center space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] bg-gold-50 border border-gold-200 text-gold-700 font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm inline-block">
                RESGATE SUA CONFIANÇA
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-900 tracking-tight leading-tight">
                Pronta para redescobrir a sua harmonia facial natural?
              </h2>
              <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
                As vagas para avaliação exclusiva com a Dra. Amanda Francioli são limitadas semanalmente para garantir um atendimento de excelência incomparável.
              </p>
            </div>

            {/* Action Card */}
            <div className="bg-[#1c1917] text-white p-6 md:p-8 rounded-3xl border border-gold-900/40 shadow-xl space-y-5">
              <p className="text-sm text-gold-200 font-serif italic">
                "Beleza com propósito é aquela que realça quem você é, preservando sua história e valorizando sua expressão singular."
              </p>
              
              <button
                id="btn-final-cta"
                onClick={handleDirectWhatsApp}
                className="w-full py-4 px-6 bg-emerald-600 text-white rounded-xl font-semibold text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-emerald-700 transition shadow-lg cursor-pointer"
              >
                <MessageCircle size={16} className="fill-white" />
                <span>CLIQUE AQUI PARA AGENDAR SUA AVALIAÇÃO</span>
              </button>
              
              <div className="flex justify-center items-center gap-4 text-[11px] text-neutral-400 font-mono">
                <span>✦ CONSULTA INICIAL SEM COMPROMISSO</span>
              </div>
            </div>

          </div>
        </section>

        {/* 12. RODAPÉ LUXURY FOOTER WITH HANDWRITTEN SIGNATURE */}
        <footer className="bg-[#100e0d] text-white py-12 px-6 border-t border-gold-900/30">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Branding side */}
            <div className="text-center md:text-left space-y-2">
              <h4 className="text-base font-serif font-semibold tracking-wide uppercase text-gold-200">
                {EXPERT_NAME}
              </h4>
              <p className="text-xs text-neutral-400 font-light font-sans">
                {EXPERT_PROFE} ✦ {EXPERT_CITY}
              </p>
              <p className="text-[10px] text-neutral-500 font-mono">
                CRM/SP Ativo ✦ Todos os direitos reservados.
              </p>
            </div>

            {/* Handwritten Signature and Badge */}
            <div className="flex flex-col items-center space-y-3">
              <span className="font-signature text-3xl md:text-4xl text-gold-300 transform -rotate-3 select-none leading-none block">
                Amanda Francioli
              </span>
              <span className="text-[9px] uppercase tracking-widest text-neutral-500 block">
                Assinatura de Garantia e Estética Premium
              </span>
            </div>

            {/* Social profiles and direct actions */}
            <div className="flex flex-col items-center md:items-end gap-3.5 text-xs text-neutral-400 font-medium">
              <div className="flex items-center gap-4">
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-gold-300 transition flex items-center gap-1.5 py-1.5 px-3 bg-white/5 rounded-full border border-white/5 hover:border-gold-500/20"
                >
                  <Instagram size={14} className="text-gold-400" />
                  <span>Instagram reels</span>
                </a>
                
                <button
                  id="btn-reopen-assessment"
                  onClick={handleOpenQuiz}
                  className="hover:text-gold-300 transition flex items-center gap-1.5 py-1.5 px-3 bg-white/5 rounded-full border border-white/5 hover:border-gold-500/20 cursor-pointer"
                >
                  <Sparkles size={14} className="text-gold-400" />
                  <span>Refazer Quiz</span>
                </button>
              </div>
            </div>

          </div>
        </footer>

      </div>
      
      {/* Dynamic Floating WhatsApp Trigger Bubble on bottom-right (for maximum conversion) */}
      {!isQuizOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
          id="btn-floating-whatsapp"
          onClick={handleDirectWhatsApp}
          className="fixed bottom-6 right-6 z-40 bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-700 active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer border border-emerald-500"
          title="Fale Conosco no WhatsApp"
        >
          <MessageCircle size={24} className="fill-white" />
          <span className="absolute -top-1 -right-1 bg-amber-500 text-neutral-900 text-[8px] font-bold px-1.5 py-0.5 rounded-full animate-bounce">
            1
          </span>
        </motion.button>
      )}

    </div>
  );
}
