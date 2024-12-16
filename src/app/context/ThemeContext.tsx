"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextProps{
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme === 'dark'){
            setIsDarkMode(false);
            document.documentElement.classList.add("dark");
        }else{
            setIsDarkMode(true);
            document.documentElement.classList.remove("dark");
        }
    }, [])

    const toggleTheme = () => {
        setIsDarkMode((prev) => {
            const newMode = !prev;
            if(newMode){
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }else{
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark")
            }
            return newMode;
        });
    };

    return(
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("useTheme deve ser usado dentro de ThemeProvider");
    }
    return context;
};