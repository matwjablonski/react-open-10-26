import { useMemo, useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "../../context/ThemeContext"

type ThemeProviderProps = {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>('light')

    const value = useMemo(() => ({
        theme,
        toggleTheme: () => {
            setTheme(v => v === 'light' ? 'dark' : 'light')
        }
    }), [theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}