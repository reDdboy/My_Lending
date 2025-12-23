import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        name: "Алексей Петров",
        role: "Frontend Developer",
        content: "Лучший стек для быстрого прототипирования. Компоненты из коробки экономят часы работы.",
        rating: 5
    },
    {
        name: "Мария Иванова",
        role: "UI/UX Designer",
        content: "Tailwind позволяет создавать уникальный дизайн без написания тонн CSS. Очень гибко!",
        rating: 5
    },
    {
        name: "Дмитрий Смирнов",
        role: "Product Manager",
        content: "TypeScript + React = идеальное сочетание для масштабируемых проектов.",
        rating: 5
    }
]

export default function Testimonials() {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
                        <Quote className="w-6 h-6" />
                        <span className="font-medium">Отзывы</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Что говорят разработчики
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl border border-gray-200"
                        >
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 italic">
                                "{testimonial.content}"
                            </p>
                            <div>
                                <div className="font-semibold text-gray-900">
                                    {testimonial.name}
                                </div>
                                <div className="text-gray-600 text-sm">
                                    {testimonial.role}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
