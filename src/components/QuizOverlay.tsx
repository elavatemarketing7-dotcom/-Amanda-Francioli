import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, ArrowLeft, Loader2, Award, Shield, Sparkles, MessageCircle, X } from "lucide-react";
import { QuizQuestion, QuizResponses } from "../types";

// Images provided by the user
const HERO_PHOTO_MAIN = "https://i.imgur.com/12OuQYe.png"; // Chest up expert photo
const HERO_PHOTO_OTHER = "https://i.imgur.com/lhlyShJ.png"; // Authority expert photo

// Quiz Questions
const QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual região do seu rosto mais chama sua atenção e você gostaria de melhorar?",
    category: "Foco do Tratamento",
    answers: [
      { text: "Rugas e linhas de expressão (Botox na testa e olhos)", value: "Tratamento de Rugas e Botox" },
      { text: "Lábios (gostaria de mais volume, hidratação ou contorno)", value: "Preenchimento Labial" },
      { text: "Olheiras profundas ou aparência de cansaço constante", value: "Tratamento de Olheiras" },
      { text: "Rosto com efeito 'derretido' / Flacidez geral", value: "Flacidez e Efeito Lifting" },
      { text: "Harmonização Completa (Full Face para rejuvenescimento global)", value: "Harmonização Full Face" }
    ]
  },
  {
    id: 2,
    question: "Qual é a sua prioridade máxima ao realizar um procedimento estético?",
    category: "Prioridade Individual",
    answers: [
      { text: "Naturalidade absoluta (realçar a beleza sem parecer artificial)", value: "Naturalidade Absoluta" },
      { text: "Resultados nítidos, expressivos e marcantes", value: "Resultados Marcantes" },
      { text: "Segurança máxima, produtos premium e técnica avançada", value: "Segurança e Produtos Premium" },
      { text: "Atendimento exclusivo direto e personalizado com a Dra.", value: "Atendimento Personalizado" }
    ]
  },
  {
    id: 3,
    question: "Qual é a sua experiência prévia com procedimentos injetáveis?",
    category: "Experiência Prévia",
    answers: [
      { text: "Nunca fiz nada, esta seria a minha primeira vez", value: "Primeira Vez" },
      { text: "Já fiz preenchimento ou toxina botulínica, mas faz tempo", value: "Já realizou no passado" },
      { text: "Realizo com frequência e busco manutenção de excelência", value: "Manutenção Frequente" }
    ]
  },
  {
    id: 4,
    question: "Qual é a sua faixa etária? (Isso define as necessidades de colágeno da sua pele)",
    category: "Faixa Etária",
    answers: [
      { text: "Menos de 30 anos (foco em prevenção e realce)", value: "Menos de 30 anos" },
      { text: "Entre 30 e 45 anos (foco em estimulação de colágeno e sustentação)", value: "Entre 30 e 45 anos" },
      { text: "Acima de 45 anos (foco em rejuvenescimento estrutural profundo)", value: "Acima de 45 anos" }
    ]
  },
  {
    id: 5,
    question: "Qual é o seu nível de urgência para iniciar a sua transformação?",
    category: "Disponibilidade",
    answers: [
      { text: "Quero realizar o quanto antes (esta semana)", value: "Urgência Alta (esta semana)" },
      { text: "Gostaria de agendar para as próximas semanas", value: "Urgência Média (próximas semanas)" },
      { text: "Estou apenas pesquisando e tirando dúvidas por enquanto", value: "Apenas pesquisando" }
    ]
  }
];

interface QuizOverlayProps {
  onClose: () => void;
}

export default function QuizOverlay({ onClose }: QuizOverlayProps) {
  const [step, setStep] = useState<"welcome" | "quiz" | "analyzing" | "result">("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<QuizResponses>({});
  const [analysisProgress, setAnalysisProgress] = useState(0);

  // Auto increment progress during the "analyzing" screen
  useEffect(() => {
    if (step === "analyzing") {
      setAnalysisProgress(0);
      const interval = setInterval(() => {
        setAnalysisProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setStep("result");
            }, 500);
            return 100;
          }
          return prev + 4; // taking ~2.5 seconds to complete
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [step]);

  const handleStartQuiz = () => {
    setStep("quiz");
    setCurrentQuestionIndex(0);
    setResponses({});
  };

  const handleAnswerSelect = (answerValue: string) => {
    const currentQuestion = QUESTIONS[currentQuestionIndex];
    setResponses((prev) => ({
      ...prev,
      [currentQuestion.id]: answerValue
    }));

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
      }, 250);
    } else {
      setTimeout(() => {
        setStep("analyzing");
      }, 300);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      setStep("welcome");
    }
  };

  const getFormattedQuizSummary = () => {
    let summaryText = `Olá Dra. Amanda Francioli! Acabei de realizar a minha avaliação personalizada na sua página e meu perfil deu compatível como paciente ideal. 

Aqui estão as minhas respostas:
`;
    QUESTIONS.forEach((q) => {
      summaryText += `📌 *${q.category}*: ${responses[q.id] || "Não respondido"}\n`;
    });
    summaryText += `\nEstou ansiosa para agendar a minha consulta de avaliação exclusiva!`;
    return encodeURIComponent(summaryText);
  };

  const handleSendToDoctor = () => {
    const formattedText = getFormattedQuizSummary();
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5511998732653&text=${formattedText}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent("Olá Dra. Amanda, vim através do seu site e gostaria de agendar uma consulta de avaliação sem compromisso.");
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5511998732653&text=${text}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  const handleContinueToSite = () => {
    onClose();
  };

  return (
    <div 
      id="quiz-overlay-container" 
      className="fixed inset-0 z-50 bg-[#faf8f5] text-neutral-900 overflow-y-auto flex flex-col justify-between"
    >
      {/* Background elegant details */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#e5d7af_1px,transparent_1px)] [background-size:16px_16px]" />
      
      {/* HEADER: Dynamic Floating expert photo and title (Persistent throughout) */}
      <header className="relative w-full px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-white/80 backdrop-blur-md z-10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gold-300 rounded-full blur-sm opacity-55 animate-pulse" />
            <img 
              src={HERO_PHOTO_MAIN} 
              alt="Dra. Amanda Francioli" 
              className="w-12 h-12 rounded-full border-2 border-gold-400 object-cover relative z-10 shadow-sm"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="text-sm font-semibold tracking-wide text-neutral-800 uppercase font-serif">Dra. Amanda Francioli</h1>
            <p className="text-[10px] text-gold-600 font-medium tracking-wider uppercase">Harmonização Full Face</p>
          </div>
        </div>
        
        {/* Bypass directly button */}
        <button 
          onClick={handleContinueToSite}
          className="text-xs text-neutral-500 hover:text-neutral-900 transition flex items-center gap-1 font-medium py-1.5 px-3 rounded-full bg-neutral-100/80"
          id="btn-direct-site-header"
        >
          <span>Pular Quiz</span>
          <X size={14} />
        </button>
      </header>

      {/* MAIN CONTAINER */}
      <main className="relative flex-1 flex items-center justify-center p-4 max-w-md mx-auto w-full z-10">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: WELCOME */}
          {step === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col items-center text-center space-y-4 py-2"
            >
              <div className="relative">
                <span className="bg-gold-50 text-gold-700 text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full border border-gold-200 shadow-xs">
                  AVALIAÇÃO EXCLUSIVA
                </span>
              </div>
              
              <div className="space-y-1">
                <h2 className="text-xl md:text-2xl font-serif font-semibold text-neutral-900 tracking-tight leading-snug">
                  Descubra seu perfil de tratamento personalizado
                </h2>
                <p className="text-[11px] text-neutral-500 max-w-[300px] mx-auto leading-normal">
                  Responda a 5 perguntas rápidas e veja se o inovador Método Full Face da Dra. Amanda é adequado para você.
                </p>
              </div>

              {/* Smaller Floating Frame for welcome on mobile */}
              <div className="relative group my-1">
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-400 to-amber-200 rounded-2xl blur-md opacity-30 group-hover:opacity-45 transition duration-500" />
                <div className="relative p-1.5 bg-white rounded-2xl border border-gold-200/60 shadow-md">
                  <img 
                    src={HERO_PHOTO_OTHER} 
                    alt="Dra. Amanda Francioli" 
                    className="w-36 h-36 md:w-48 md:h-48 object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Action options */}
              <div className="w-full flex flex-col space-y-2 pt-1">
                <button
                  id="btn-start-quiz"
                  onClick={handleStartQuiz}
                  className="w-full py-3 px-5 bg-neutral-900 text-white rounded-xl font-medium text-xs flex items-center justify-center gap-2 hover:bg-neutral-850 active:scale-[0.98] transition duration-200 shadow-md border border-neutral-800"
                >
                  <Sparkles size={14} className="text-gold-300 animate-pulse" />
                  <span>Iniciar Avaliação (1 Minuto)</span>
                  <ArrowRight size={14} />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    id="btn-bypass-welcome"
                    onClick={handleContinueToSite}
                    className="py-2 px-3 bg-white hover:bg-neutral-50 text-neutral-700 rounded-xl font-semibold text-[10px] border border-neutral-200 transition active:scale-[0.98] flex items-center justify-center gap-1"
                  >
                    Ir Direto Para o Site
                  </button>
                  <button
                    id="btn-direct-whatsapp-welcome"
                    onClick={handleDirectWhatsApp}
                    className="py-2 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl font-semibold text-[10px] border border-emerald-200 transition active:scale-[0.98] flex items-center justify-center gap-1"
                  >
                    <MessageCircle size={12} className="text-emerald-600 fill-emerald-600" />
                    <span>WhatsApp Direto</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2: ACTIVE QUIZ */}
          {step === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25 }}
              className="w-full flex flex-col space-y-3.5 py-1"
            >
              {/* Question Category & Number */}
              <div className="flex items-center justify-between">
                <button 
                  onClick={handlePrevQuestion}
                  className="text-neutral-500 hover:text-neutral-900 flex items-center gap-1 text-[10px] font-bold py-1 px-2 rounded bg-neutral-50 border border-neutral-200"
                >
                  <ArrowLeft size={10} />
                  <span>Voltar</span>
                </button>
                <div className="text-right">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-gold-600 bg-gold-50 px-2 py-0.5 rounded">
                    {QUESTIONS[currentQuestionIndex].category}
                  </span>
                  <p className="text-[10px] text-neutral-400 mt-0.5 font-mono">
                    {currentQuestionIndex + 1} de {QUESTIONS.length}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-neutral-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-gold-300 to-gold-500 transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* The Question */}
              <div className="py-0.5">
                <h3 className="text-sm md:text-base font-serif font-semibold text-neutral-900 leading-snug">
                  {QUESTIONS[currentQuestionIndex].question}
                </h3>
              </div>

              {/* Answer Option Cards */}
              <div className="flex flex-col space-y-1.5">
                {QUESTIONS[currentQuestionIndex].answers.map((ans, idx) => {
                  const isSelected = responses[QUESTIONS[currentQuestionIndex].id] === ans.value;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswerSelect(ans.value)}
                      className={`w-full text-left p-3 rounded-lg border transition-all duration-200 flex items-start gap-2.5 active:scale-[0.99] group ${
                        isSelected 
                          ? "border-gold-500 bg-gold-50/40 shadow-xs" 
                          : "border-neutral-200 bg-white hover:border-gold-300 hover:bg-neutral-50/50"
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? "bg-gold-500 border-gold-500 text-white" : "border-neutral-300 group-hover:border-gold-400 bg-white"
                      }`}>
                        {isSelected && <Check size={10} strokeWidth={3} />}
                      </div>
                      <span className={`text-[11px] leading-snug font-medium ${isSelected ? "text-neutral-900 font-semibold" : "text-neutral-600"}`}>
                        {ans.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Help tip card */}
              <div className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-100 flex items-start gap-2">
                <Shield size={12} className="text-gold-500 shrink-0 mt-0.5" />
                <p className="text-[10px] text-neutral-400 leading-normal">
                  Suas preferências servem unicamente para personalizar seu atendimento no WhatsApp.
                </p>
              </div>
            </motion.div>
          )}

          {/* STEP 3: ANALYZING BAR (EXTRA 1) */}
          {step === "analyzing" && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex flex-col items-center justify-center text-center space-y-4 py-6"
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-2 border-gold-100 border-t-gold-500 animate-spin flex items-center justify-center">
                  <Sparkles size={20} className="text-gold-500 animate-pulse" />
                </div>
                <span className="absolute bottom-0 right-0 bg-neutral-900 text-white rounded-full p-0.5 shadow">
                  <Check size={10} />
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-widest font-serif">Analisando</h3>
                <p className="text-[11px] text-neutral-400 max-w-[220px] mx-auto">
                  Processando respostas com base no protocolo de Harmonização Full Face...
                </p>
              </div>

              {/* Progress bar with label */}
              <div className="w-56 space-y-1.5">
                <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200/50">
                  <div 
                    className="h-full bg-gradient-to-r from-gold-300 via-gold-500 to-amber-600 transition-all duration-100 ease-out"
                    style={{ width: `${analysisProgress}%` }}
                  />
                </div>
                <div className="flex justify-between text-[9px] text-neutral-400 font-mono">
                  <span>MÉTODO FULL FACE</span>
                  <span>{analysisProgress}%</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 4: COMPACT RESULT SCREEN */}
          {step === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="w-full flex flex-col space-y-3 py-1"
            >
              {/* Header result text visual group */}
              <div className="text-center space-y-1">
                <span className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[9px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-full shadow-xs">
                  <Award size={10} className="text-emerald-600" />
                  Perfil Compatível. Você é a Paciente ideal.
                </span>
                
                <p className="text-[10px] text-neutral-600 font-medium leading-relaxed max-w-[300px] mx-auto mt-1">
                  "Com base nas suas respostas, o Método da <strong className="text-neutral-900">Dra. Amanda Francioli</strong> consegue entregar exatamente a naturalidade e segurança que você procura."
                </p>
              </div>

              {/* Expert Chest-Up Photo with a sophisticated glowing background */}
              <div className="relative flex justify-center py-0.5">
                <div className="absolute inset-0 max-w-[150px] mx-auto bg-gradient-to-tr from-gold-100 via-[#faf8f5] to-gold-50 rounded-xl blur-md opacity-70" />
                <div className="relative w-full max-w-[140px] aspect-[4/5] rounded-xl overflow-hidden border border-gold-300 shadow-md bg-white">
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent h-12 z-10" />
                  <img 
                    src={HERO_PHOTO_MAIN} 
                    alt="Dra. Amanda Francioli - Paciente Ideal" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle floating name card on photo */}
                  <div className="absolute bottom-1 inset-x-0 text-center z-20">
                    <span className="text-[8px] bg-white/95 text-neutral-900 uppercase font-extrabold tracking-wider py-0.5 px-1.5 rounded-md shadow-xs border border-gold-200">
                      MÉTODO FULL FACE ✦ AMANDA
                    </span>
                  </div>
                </div>
              </div>

              {/* Compact Visual Info Bullet */}
              <div className="bg-gold-50/40 border border-gold-200/40 rounded-lg p-2.5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <Shield size={14} className="text-gold-600" />
                  <span className="text-[10px] text-neutral-700 font-bold">Vaga Especial Reservada</span>
                </div>
                <span className="text-[8px] font-bold text-amber-800 bg-amber-100 py-0.5 px-1.5 rounded-full animate-pulse-subtle">
                  Suporte Ativo SP
                </span>
              </div>

              {/* Three compact action buttons */}
              <div className="flex flex-col space-y-1.5 pt-0.5">
                <button
                  id="btn-send-quiz-whatsapp"
                  onClick={handleSendToDoctor}
                  className="w-full py-2.5 px-3 bg-emerald-600 text-white rounded-lg font-bold text-[10px] flex items-center justify-center gap-1.5 hover:bg-emerald-700 active:scale-[0.98] transition-all duration-200 shadow-sm animate-pulse-subtle border border-emerald-500 cursor-pointer"
                >
                  <MessageCircle size={14} className="fill-white" />
                  <span>1 - ENVIAR MINHA AVALIAÇÃO À DRA.</span>
                </button>

                <button
                  id="btn-direct-chat-whatsapp"
                  onClick={handleDirectWhatsApp}
                  className="w-full py-2.5 px-3 bg-white text-emerald-800 border border-emerald-300 hover:bg-emerald-50 rounded-lg font-bold text-[10px] flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  <MessageCircle size={13} />
                  <span>2 - CHAMAR NO WHATSAPP SEM COMPROMISSO</span>
                </button>

                <button
                  id="btn-skip-to-site"
                  onClick={handleContinueToSite}
                  className="w-full py-2 px-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-500 rounded-lg font-semibold text-[10px] flex items-center justify-center gap-1 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  <span>3 - NÃO ENVIAR E CONTINUAR NO SITE</span>
                  <ArrowRight size={10} />
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* FOOTER: Trust badge */}
      <footer className="relative w-full py-3 bg-white border-t border-neutral-100 text-center z-10">
        <p className="text-[9px] text-neutral-400 uppercase tracking-widest font-mono">
          © {new Date().getFullYear()} Amanda Francioli ✦ CRM/SP Ativo
        </p>
      </footer>
    </div>
  );
}
