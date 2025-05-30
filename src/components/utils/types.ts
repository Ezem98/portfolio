export interface Career {
  position: string;
  company: string;
  date: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tools: string[];
  link: string;
  github: string;
  image: string;
}
