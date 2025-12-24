import { useState } from "react"
import { Menu, X } from "lucide-react"
import ThemeToggle from "../ThemeToggle/ThemeToggle"

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 w-full z-50 bg-white dark:bg-black text-black dark:text-white border-b border-gray-300 dark:border-gray-800 backdrop-blur-sm bg-white/80 dark:bg-black/80">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-black dark:bg-white flex items-center justify-center border-2 border-black dark:border-white brutal-shadow-sm">
                            <span className="text-white dark:text-black font-bold text-xl">R</span>
                        </div>
                        <span className="font-black text-xl tracking-tighter">REDDBOY</span>
                    </div>

                    {/* Десктопное меню */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="font-bold text-sm uppercase tracking-wider hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                            ОБО МНЕ
                        </a>
                        <a href="#projects" className="font-bold text-sm uppercase tracking-wider hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                            ПРОЕКТЫ
                        </a>
                        <a href="#tech" className="font-bold text-sm uppercase tracking-wider hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                            ТЕХНОЛОГИИ
                        </a>
                        <a href="#contact" className="font-bold text-sm uppercase tracking-wider hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                            КОНТАКТ
                        </a>

                        <ThemeToggle />
                    </div>

                    {/* Мобильное меню + переключатель */}
                    <div className="flex items-center space-x-4 md:hidden">
                        <ThemeToggle />
                        <button
                            className="p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Мобильное меню */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-300 dark:border-gray-800 pt-4">
                        <div className="flex flex-col space-y-4">
                            <a href="#about" className="font-bold uppercase tracking-wider py-2">
                                ОБО МНЕ
                            </a>
                            <a href="#projects" className="font-bold uppercase tracking-wider py-2">
                                ПРОЕКТЫ
                            </a>
                            <a href="#tech" className="font-bold uppercase tracking-wider py-2">
                                ТЕХНОЛОГИИ
                            </a>
                            <a href="#contact" className="font-bold uppercase tracking-wider py-2">
                                КОНТАКТ
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header
