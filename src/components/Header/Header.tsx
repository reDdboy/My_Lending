import { useState } from "react"
import { Menu, X } from "lucide-react"

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-black text-white border-b border-gray-800">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-white flex items-center justify-center">
                            <span className="text-black font-semibold text-xl">[•]</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight">reDdboy.</span>
                    </div>

                    {/* Десктопное меню */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#projects" className="font-medium hover:text-gray-300 transition-colors">
                            ПРОЕКТЫ
                        </a>
                        <a href="#services" className="font-medium hover:text-gray-300 transition-colors">
                            УСЛУГИ
                        </a>
                        <a href="#about" className="font-medium hover:text-gray-300 transition-colors">
                            ОБО МНЕ
                        </a>
                        <a href="#contact" className="font-medium hover:text-gray-300 transition-colors">
                            КОНТАКТ
                        </a>
                    </div>

                    {/* Кнопка мобильного меню */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Мобильное меню */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
                        <div className="flex flex-col space-y-4">
                            <a href="#projects" className="font-medium py-2">
                                ПРОЕКТЫ
                            </a>
                            <a href="#services" className="font-medium py-2">
                                УСЛУГИ
                            </a>
                            <a href="#about" className="font-medium py-2">
                                ОБО МНЕ
                            </a>
                            <a href="#contact" className="font-medium py-2">
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
