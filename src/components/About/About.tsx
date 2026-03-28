import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal, Code, Cpu, BookOpen } from "lucide-react"
import { useSpotlight } from "@/hooks/useSpotlight"

const SPOTLIGHT_STYLE: React.CSSProperties = {
    width: "300px",
    height: "300px",
    transform: "translate(-50%, -50%)",
    opacity: 0,
    transition: "opacity 0.3s ease",
    background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 65%)",
}

function SpotlightDiv({ children, className }: { children: React.ReactNode; className?: string }) {
    const { onMouseMove, onMouseLeave } = useSpotlight()

    return (
        <div className={`relative overflow-hidden ${className ?? ""}`} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
            <div className="spotlight-effect pointer-events-none absolute z-10 rounded-full" style={SPOTLIGHT_STYLE} />
            {children}
        </div>
    )
}

function About() {
    return (
        <section id="about" className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-black dark:text-white">ОБО МНЕ</h2>
                <div className="h-1 w-48 sm:w-64 mx-auto bg-black dark:bg-white mb-8"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Левая часть — текст */}
                <SpotlightDiv className="lg:flex-1">
                    <Card className="border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff] p-6 md:p-8 h-full">
                        <CardHeader className="pb-6">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                                <div className="w-16 h-16 bg-black dark:bg-white flex items-center justify-center flex-shrink-0">
                                    <Terminal className="w-8 h-8 text-white dark:text-black" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <CardTitle className="text-3xl md:text-4xl font-black text-black dark:text-white mb-2">
                                        АЛЕКСАНДР СЕМЧЕНКО
                                    </CardTitle>
                                    <p className="text-xl md:text-2xl font-bold text-black dark:text-white">ВЕБ-РАЗРАБОТЧИК</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                                    Здравствуй, меня зовут <span className="font-bold text-black dark:text-white">Семченко Александр</span>.
                                    Я начинающий веб-разработчик, мой путь в программирование начался с поступления в <span className="font-bold">ПСТГУ</span>.
                                </p>
                                <div className="border-l-4 border-black dark:border-white pl-4 md:pl-6">
                                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 italic">
                                        Изначально начинал изучать программирование с <span className="font-bold text-black dark:text-white">C/C++</span>,
                                        далее в обучающей программе появился предмет с изучением основ <span className="font-bold text-black dark:text-white">PHP, CSS, HTML</span>.
                                    </p>
                                </div>
                                <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                                    Вот тогда я для себя и определил в какую сторону буду дальше двигаться и развиваться.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </SpotlightDiv>

                {/* Правая часть — стек и информация */}
                <div className="lg:flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SpotlightDiv>
                        <Card className="border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff] p-5 md:p-6 h-full">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-black dark:bg-white flex items-center justify-center flex-shrink-0">
                                        <Code className="w-5 h-5 md:w-6 md:h-6 text-white dark:text-black" />
                                    </div>
                                    <CardTitle className="text-xl md:text-2xl font-black text-black dark:text-white">СТЕК</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    {["REACT", "TYPESCRIPT", "TAILWIND", "NODE.JS"].map(tag => (
                                        <span key={tag} className="px-3 py-1.5 md:px-4 md:py-2 bg-black dark:bg-white text-white dark:text-black font-bold text-xs md:text-sm border border-black dark:border-white">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </SpotlightDiv>

                    <SpotlightDiv>
                        <Card className="border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff] p-5 md:p-6 h-full">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-black dark:bg-white flex items-center justify-center flex-shrink-0">
                                        <Cpu className="w-5 h-5 md:w-6 md:h-6 text-white dark:text-black" />
                                    </div>
                                    <CardTitle className="text-xl md:text-2xl font-black text-black dark:text-white">НАЧАЛО</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {["C/C++", "PHP", "HTML/CSS"].map(lang => (
                                        <div key={lang} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-black dark:bg-white flex-shrink-0"></div>
                                            <p className="font-bold text-sm md:text-base text-black dark:text-white">{lang}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </SpotlightDiv>

                    <SpotlightDiv className="md:col-span-2">
                        <Card className="border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff] p-5 md:p-6 h-full">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-black dark:bg-white flex items-center justify-center flex-shrink-0">
                                        <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white dark:text-black" />
                                    </div>
                                    <CardTitle className="text-xl md:text-2xl font-black text-black dark:text-white">ОБРАЗОВАНИЕ</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <p className="text-lg md:text-xl font-bold text-black dark:text-white">ПСТГУ</p>
                                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">Факультет информатики и прикладной математики</p>
                                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">Студент</p>
                                </div>
                            </CardContent>
                        </Card>
                    </SpotlightDiv>
                </div>
            </div>
        </section>
    )
}

export default About
