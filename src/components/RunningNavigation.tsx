import React from "react";
import { Heart, ArrowUpRight } from "lucide-react";
import { SectionLink } from "../types";

const NAV_ITEMS: SectionLink[] = [
  { label: "Sobre Mim", id: "sobre-mim" },
  { label: "Prova Visual", id: "prova-visual" },
  { label: "Harmonização de ❤️", id: "harmonizacao" },
  { label: "Onde nos Encontrar", id: "onde-encontrar" },
  { label: "Contato", id: "contato" }
];

export default function RunningNavigation() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // We repeat the array multiple times to ensure continuous infinite scrolling ticker
  const repeatedItems = [...NAV_ITEMS, ...NAV_ITEMS, ...NAV_ITEMS, ...NAV_ITEMS];

  return (
    <div className="sticky top-0 z-40 w-full bg-[#1c1917]/95 border-b border-gold-900/40 text-gold-200/90 py-3 shadow-lg backdrop-blur-md overflow-hidden select-none">
      <div className="relative flex items-center">
        {/* Left and Right ambient shadow gradients to blend the edge */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#1c1917] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#1c1917] to-transparent z-10 pointer-events-none" />

        {/* Slow Scrolling Marquee container */}
        <div className="animate-scroll-ticker flex whitespace-nowrap gap-12 items-center">
          {repeatedItems.map((item, index) => (
            <button
              key={`${item.id}-${index}`}
              onClick={() => handleScroll(item.id)}
              className="flex items-center gap-1.5 text-xs tracking-wider uppercase font-medium hover:text-white hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>{item.label}</span>
              <span className="text-gold-400">✦</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
