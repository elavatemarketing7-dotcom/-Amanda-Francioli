import React from "react";
import { MapPin, Compass, Shield, Navigation, Calendar } from "lucide-react";

export default function MapSection() {
  // Safe Google Maps Embed URL for Zona Norte, São Paulo, SP
  const mapIframeUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117071.74837562852!2d-46.69742460831627!3d-23.496796468705037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7079d30da29%3A0xb3ca65d6fe4b7407!2sZona%20Norte%20de%20S%C3%A3o%20Paulo%2C%20S%C3%A3o%20Paulo%20-%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1700000000000!5m2!1sen!2sbr";

  return (
    <section id="onde-encontrar" className="py-16 px-4 bg-[#FAF8F5] border-t border-neutral-100">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-neutral-900 text-gold-200 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
            <MapPin size={12} className="text-gold-400" />
            NOSSO CONSULTÓRIO
          </div>
          <h2 className="text-3xl font-serif font-semibold text-neutral-900 tracking-tight">
            Onde nos Encontrar
          </h2>
          <p className="text-xs text-neutral-500 max-w-sm mx-auto leading-relaxed">
            Oferecemos uma estrutura projetada para o seu máximo conforto e total privacidade na Zona Norte de São Paulo.
          </p>
        </div>

        {/* Layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Info and directions (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6 bg-white rounded-3xl p-6 md:p-8 border border-gold-200/40 shadow-xl">
            
            <div className="space-y-5">
              <div className="space-y-2">
                <span className="text-[10px] text-gold-600 font-bold tracking-wider uppercase block">LOCALIZAÇÃO</span>
                <p className="text-sm text-neutral-800 font-medium font-sans leading-relaxed flex items-start gap-2">
                  <MapPin size={16} className="text-gold-500 shrink-0 mt-0.5" />
                  <span>Zona Norte - São Paulo, SP<br /><span className="text-xs text-neutral-400 font-normal">Acesso facilitado e estacionamento no local.</span></span>
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-100">
                <span className="text-[10px] text-gold-600 font-bold tracking-wider uppercase block">COMO CHEGAR</span>
                <div className="space-y-2 text-xs text-neutral-600">
                  <p className="flex items-start gap-2">
                    <Compass size={14} className="text-neutral-400 shrink-0 mt-0.5" />
                    <span>Próximo às principais avenidas da Zona Norte, em uma região residencial e discreta.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Navigation size={14} className="text-neutral-400 shrink-0 mt-0.5" />
                    <span>Ao agendar sua consulta, nossa equipe enviará as coordenadas exatas e ponto de referência direto no WhatsApp.</span>
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-100">
                <span className="text-[10px] text-gold-600 font-bold tracking-wider uppercase block">POLÍTICA DE PRIVACIDADE</span>
                <p className="text-xs text-neutral-500 leading-relaxed flex items-start gap-2">
                  <Shield size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Atendimento com hora marcada e intervalos estendidos para garantir exclusividade e privacidade absoluta de cada paciente.</span>
                </p>
              </div>
            </div>

            {/* Appointment Prompt Callout */}
            <div className="p-4 bg-gold-50 rounded-2xl border border-gold-200/50 flex items-center gap-3">
              <div className="p-2 bg-white rounded-xl text-gold-600 shadow-sm">
                <Calendar size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-neutral-800">Precisa de Ajuda?</p>
                <p className="text-[10px] text-neutral-500">Agende sua vaga de forma simples no WhatsApp.</p>
              </div>
            </div>

          </div>

          {/* Column 2: Interactive map iframe (7 cols) */}
          <div className="md:col-span-7 h-[300px] md:h-auto min-h-[300px] rounded-3xl overflow-hidden shadow-xl border-2 border-gold-200 bg-neutral-100 relative">
            <iframe
              src={mapIframeUrl}
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dra. Amanda Francioli - Localização Zona Norte SP"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
