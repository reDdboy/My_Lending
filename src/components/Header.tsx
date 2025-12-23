import { Menu, X, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const navItems = [
    { name: 'Главная', link: '#' },
    { name: 'Возможности', link: '#features' },
    { name: 'Цены', link: '#pricing' },
    { name: 'О нас', link: '#about' },
    { name: 'Контакты', link: '#contact' },
    { name: 'Технологии', link: '#tech' },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Логотип */}
                    <div className="text-2xl font-bold text-blue-600">LandingPro</div>

                    {/* Десктопное меню */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                            Начать <ChevronRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>

                    {/* Мобильное меню кнопка */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Мобильное меню */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                className="block py-2 text-gray-700 hover:text-blue-600"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                            Начать бесплатно
                        </button>
                    </div>
                )}
            </nav>
        </header>
    )
}
