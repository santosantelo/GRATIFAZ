
export type View = 'home' | 'contribute' | 'projects' | 'diary' | 'news';

export interface Project {
  id: number;
  title: string;
  description: string;
  purpose: string;
  mission: string;
  goal: number;
  current: number;
  urgent?: boolean;
}

export interface GratitudeEntry {
  id: string;
  date: string;
  text: string;
}