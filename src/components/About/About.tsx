import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal, Code, Cpu, BookOpen } from "lucide-react"

function About() {
    return (
        <section id="about" className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black mb-4 text-black">ОБО МНЕ</h2>
                <div className="h-1 w-64 mx-auto bg-black mb-8"></div>
                <p className="text-2xl font-bold uppercase tracking-wider text-black">
                    ОТ C++ ДО ВЕБ-РАЗРАБОТКИ
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Левая часть - текст */}
                <Card className="flex-1 border-2 border-black dark:border-white bg-white dark:bg-black shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#fff] p-8">
                    <CardHeader className="pb-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-black dark:bg-white flex items-center justify-center">
                                <Terminal className="w-8 h-8 text-white dark:text-black" />
                            </div>
                            <CardTitle className="text-4xl font-black text-black dark:text-white">
                                АЛЕКСАНДР<br />СЕМЧЕНКО
                            </CardTitle>
                        </div>
                        <p className="text-2xl font-bold text-black dark:text-white">ВЕБ-РАЗРАБОТЧИК</p>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                                Здравствуй, меня зовут <span className="font-bold text-black dark:text-white">Семченко Александр</span>.
                                Я начинающий веб-разработчик, мой путь в программирование начался с поступления в <span className="font-bold">ПСТГУ</span>.
                            </p>
                            <div className="border-l-4 border-black dark:border-white pl-6">
                                <p className="text-lg text-gray-800 dark:text-gray-300 italic">
                                    Изначально начинал изучать программирование с <span className="font-bold text-black dark:text-white">C/C++</span>,
                                    далее в обучающей программе появился предмет с изучением основ <span className="font-bold text-black dark:text-white">PHP, CSS, HTML</span>.
                                </p>
                            </div>
                            <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed font-bold">
                                Вот тогда я для себя и определил в какую сторону буду дальше двигаться и развиваться.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Правая часть - стек и информация */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff] p-6">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center">
                                    <Code className="w-6 h-6 text-white dark:text-black" />
                                </div>
                                <CardTitle className="text-2xl font-black text-black dark:text-white">
                                    СТЕК
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-bold text-sm border border-black dark:border-white">
                                        REACT
                                    </span>
                                    <span className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-bold text-sm border border-black dark:border-white">
                                        TYPESCRIPT
                                    </span>
                                    <span className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-bold text-sm border border-black dark:border-white">
                                        TAILWIND
                                    </span>
                                    <span className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-bold text-sm border border-black dark:border-white">
                                        NODE.JS
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff] p-6">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center">
                                    <Cpu className="w-6 h-6 text-white dark:text-black" />
                                </div>
                                <CardTitle className="text-2xl font-black text-black dark:text-white">
                                    НАЧАЛО
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-black dark:bg-white"></div>
                                    <p className="font-bold text-black dark:text-white">C/C++</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-black dark:bg-white"></div>
                                    <p className="font-bold text-black dark:text-white">PHP</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-black dark:bg-white"></div>
                                    <p className="font-bold text-black dark:text-white">HTML/CSS</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-black dark:bg-white"></div>
                                    <p className="font-bold text-black dark:text-white">MODERN WEB</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff] p-6 md:col-span-2">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center">
                                    <BookOpen className="w-6 h-6 text-white dark:text-black" />
                                </div>
                                <CardTitle className="text-2xl font-black text-black dark:text-white">
                                    ОБРАЗОВАНИЕ
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <p className="text-xl font-bold text-black dark:text-white">ПСТГУ</p>
                                <p className="text-lg text-gray-700 dark:text-gray-300">Факультет информатики и прикладной математики</p>
                                <p className="text-gray-600 dark:text-gray-400 font-medium">Студент</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default About
