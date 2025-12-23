import { ArrowRight, Check } from 'lucide-react'

export default function Hero() {
    return (
        <section className="pt-32 pb-20 px-4">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto text-center">

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Создайте потрясающий лендинг
                        <span className="text-blue-600 linaer-gradient "> за минуты</span>
                    </h1>

                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        React + Tailwind + TypeScript. Готовые компоненты, адаптивный дизайн,
                        высокая скорость загрузки. Начните бесплатно.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg inline-flex items-center gap-2 transition-all">
                            Начать бесплатно
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-all">
                            Посмотреть демо
                        </button>
                    </div>

                    {/* Features list */}
                    <div className="mt-12 flex flex-wrap justify-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-500" />
                            <span>Адаптивный дизайн</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-500" />
                            <span>Готовые компоненты</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-500" />
                            <span>TypeScript поддержка</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-500" />
                            <span>Бесплатные обновления</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
