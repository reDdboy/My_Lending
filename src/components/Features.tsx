import { Zap, Shield, Palette, Code } from 'lucide-react'

const features = [
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Быстрая разработка",
        description: "Готовые компоненты ускоряют создание интерфейсов в 3 раза"
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Надежный код",
        description: "TypeScript обеспечивает типизацию и предотвращает ошибки"
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "Красивый дизайн",
        description: "Tailwind CSS для полного контроля над стилями"
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: "Легко кастомизировать",
        description: "Чистый код, который легко модифицировать под ваши нужды"
    }
]

export default function Features() {
    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Почему выбирают наш стек
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Современные технологии для создания лучших пользовательских интерфейсов
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="text-blue-600 mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
