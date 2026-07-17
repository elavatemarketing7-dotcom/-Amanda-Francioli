export interface QuizAnswer {
  text: string;
  value: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  category: string;
  answers: QuizAnswer[];
}

export interface QuizResponses {
  [key: number]: string;
}

export interface SectionLink {
  label: string;
  id: string;
}

export interface GalleryItem {
  url: string;
  alt: string;
  category: "antes-depois" | "bastidores" | "detalhe";
  caption?: string;
}
