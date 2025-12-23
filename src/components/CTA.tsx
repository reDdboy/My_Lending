import { Rocket, CheckCircle } from 'lucide-react'

export default function CTA() {
    return (
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <Rocket className="w-12 h-12 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Готовы создать свой лендинг?
                    </h2>
                    <p className="text-xl mb-10 opacity-90">
                        Начните бесплатно. Никаких кредитных карт, никаких обязательств.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all">
                            Начать бесплатно
                        </button>
                        <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-all">
                            Заказать демо
                        </button>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            <span>14 дней бесплатно</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            <span>Поддержка 24/7</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            <span>Отмена в любой момент</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
