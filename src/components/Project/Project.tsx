import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

function Project() {
    const projects = [
        {
            title: "ДОКУМЕНТАЦИЯ ВКОНКТАКТЕ",
            subtitle: "Сайт с документацией",
            description:
                "Вместе с командой работаем над реализацией и поддержкой Базы Данных «За Христа Пострадавшие» для разных платформ.",
            link: "https://vkfcsapp.pstgu.ru/",
            linkText: "Перейти",
        },
        {
            title: "Сайт Храма",
            subtitle: "Сайт с информацией про храм",
            description:
                "Работаю над сайтом для Храма Серафима Саровского. Поддерживаю обновление данных.",
            link: "https://hram.site.reddboy.ru",
            linkText: "Перейти",
        },
        {
            title: "Todo List",
            subtitle: "Простенький лист задач",
            description: "Сайт для добавления задач на день",
            link: "https://todo.reddboy.ru",
            linkText: "Перейти",
        }
    ]

    return (
        <section id="projects" className="container mx-auto px-4 py-20 ">
            <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-black mb-4 text-black dark:text-white">ПРОЕКТЫ</h2>
                <div className="h-1 w-48 mx-auto bg-black dark:bg-white mb-6"></div>
            </div>

            <div className="flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-stretch">
                    {projects.map((project, idx) => (
                        < Card key={idx} className="flex flex-col h-full border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
                            <CardHeader>
                                <CardTitle className="text-2xl font-black"> {project.title} </CardTitle>
                                <CardDescription className="font-bold"> {project.subtitle} </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p> {project.description} </p>
                            </CardContent>
                            <CardFooter className="mt-auto pt-4">
                                <Button asChild className="bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900 w-full py-4 text-base font-bold">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-black dark:text-white">
                                        <ExternalLink className="w-4 h-4" />
                                        {project.linkText}
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Project
