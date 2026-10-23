import { createContext } from "react";

export type Theme = 'light' | 'dark';

type ThemeValueType = {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeValueType | null>(null);