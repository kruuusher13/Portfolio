export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  date: string;
  techStack: string[];
  description: string[];
  link?: string;
}

export interface SkillNode {
  id: string;
  group: number; // 1: Language, 2: Framework, 3: Tool, 4: Core Concept, 5: Soft Skills
  radius: number;
}

export interface SkillLink {
  source: string;
  target: string;
  value: number;
}

export interface Publication {
  id: string;
  title: string;
  conference: string;
  date: string;
  description: string;
  paperLink?: string;
  blogLink?: string;
}
