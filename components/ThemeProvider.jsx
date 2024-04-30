'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const { theme: initialTheme, setTheme: setNextTheme } = useTheme();
    const [theme, setTheme] = useState(initialTheme);

    // Effet pour synchroniser le thème de next-themes avec le thème local
    useEffect(() => {
        setTheme(initialTheme);
    }, [initialTheme]);

    // Fonction pour changer le thème avec stockage dans localStorage
    const setThemeWithStorage = (newTheme) => {
        localStorage.setItem('theme', newTheme);
        setNextTheme(newTheme);
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: setThemeWithStorage }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemes() {
    return useContext(ThemeContext);
}
