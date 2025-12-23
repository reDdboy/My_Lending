// import { Heart } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <div className="text-2xl font-bold mb-2">LandingPro</div>
                        <p className="text-gray-400">
                            Современные лендинги на React и Tailwind
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Twitter
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            GitHub
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            LinkedIn
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Telegram
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <div className="flex items-center justify-center gap-1">
                        <span>© {currentYear} Личный сайт</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
