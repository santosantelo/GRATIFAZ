
export type View = 'home' | 'contribute' | 'projects' | 'diary' | 'news';

// FIX: Add AuthView type to fix import error in AuthScreen.
export type AuthView = 'login' | 'signup' | 'forgot';

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