import { Card, CardContent } from "@/components/ui/card"
import {
    Code2,
    Terminal,
    FileCode,
    Cpu,
    Brackets,
    Database
} from "lucide-react"
import React from "react"

function Tech() {
    const technologies = [
        {
            name: "JAVASCRIPT",
            icon: <Code2 className="w-6 h-6 sm:w-8 sm:h-8" />,
        },
        {
            name: "TYPESCRIPT",
            icon: <Terminal className="w-6 h-6 sm:w-8 sm:h-8" />,
        },
        {
            name: "C++",
            icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />,
        },
        {
            name: "HTML",
            icon: <FileCode className="w-6 h-6 sm:w-8 sm:h-8" />,
        },
        {
            name: "CSS",
            icon: <Brackets className="w-6 h-6 sm:w-8 sm:h-8" />,
        },
        {
            name: "PHP",
            icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
        }
    ]

    return (
        <section id="tech" className="container mx-auto px-4 py-20">
            <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-black mb-4 text-black dark:text-white tracking-widest">
                    ТЕХНОЛОГИИ
                </h2>
                <div className="h-1 w-48 sm:w-64 mx-auto bg-black dark:bg-white mb-8"></div>
            </div>

            <Card className="border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
                <CardContent className="p-6 sm:p-8">
                    {/* Сетка технологий внутри карточки */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center p-4 border-2 border-black dark:border-white bg-white dark:bg-black"
                            >
                                {/* Иконка в квадрате */}
                                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 bg-black dark:bg-white flex items-center justify-center">
                                    <div className="text-white dark:text-black">
                                        {tech.icon}
                                    </div>
                                </div>

                                {/* Название технологии */}
                                <div className="text-center">
                                    <div className="text-lg sm:text-xl font-black text-black dark:text-white uppercase tracking-wide">
                                        {tech.name}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

export default Tech
