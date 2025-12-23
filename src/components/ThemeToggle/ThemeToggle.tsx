"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
        )
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <button
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800 border-2 border-gray-800 dark:border-gray-200 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 brutal-shadow-sm"
            aria-label="Переключить тему"
        >
            <div className="relative w-5 h-5">
                <Sun className={`absolute inset-0 w-full h-full transition-all duration-300 ${theme === "light" ? "opacity-100 rotate-0 text-yellow-500" : "opacity-0 -rotate-90"}`} />
                <Moon className={`absolute inset-0 w-full h-full transition-all duration-300 ${theme === "dark" ? "opacity-100 rotate-0 text-blue-300" : "opacity-0 rotate-90"}`} />
            </div>
        </button>
    )
}

export default ThemeToggle
