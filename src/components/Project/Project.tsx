import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useSpotlight } from "@/hooks/useSpotlight"

interface ProjectData {
    title: string
    subtitle: string
    description: string
    link: string
    linkText: string
    external?: boolean
}

function SpotlightCard({ project }: { project: ProjectData }) {
    const { onMouseMove, onMouseLeave } = useSpotlight()

    return (
        <div
            className="relative flex w-full h-full overflow-hidden"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            {/* Световое пятно */}
            <div
                className="spotlight-effect pointer-events-none absolute z-10 rounded-full"
                style={{
                    width: "300px",
                    height: "300px",
                    transform: "translate(-50%, -50%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 65%)",
                }}
            />

            <Card className="flex flex-col w-full h-full border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
                <CardHeader>
                    <CardTitle className="text-2xl font-black">{project.title}</CardTitle>
                    <CardDescription className="font-bold">{project.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p>{project.description}</p>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                    <Button asChild className="bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900 w-full py-4 text-base font-bold">
                        <a
                            href={project.link}
                            {...(project.external !== false ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="flex items-center justify-center gap-2 text-black dark:text-white"
                        >
                            <ExternalLink className="w-4 h-4" />
                            {project.linkText}
                        </a>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

function Project() {
    const projects: ProjectData[] = [
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
            description: "Сайт для добавления задач на день.",
            link: "https://todo.reddboy.ru",
            linkText: "Перейти",
        },
    ]

    return (
        <section id="projects" className="container mx-auto px-4 py-20">
            <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-black mb-4 text-black dark:text-white">ПРОЕКТЫ</h2>
                <div className="h-1 w-48 mx-auto bg-black dark:bg-white mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {projects.map((project, idx) => (
                    <SpotlightCard key={idx} project={project} />
                ))}
            </div>

            <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-10">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black to-black dark:via-white dark:to-white"></div>
                    <h3 className="text-3xl md:text-4xl font-black tracking-widest text-black dark:text-white whitespace-nowrap">
                        ДРУГИЕ ПРОЕКТЫ
                    </h3>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-black to-black dark:via-white dark:to-white"></div>
                </div>

                {/* Одна широкая карточка с акцентом */}
                <div className="flex justify-center">
                    <div className="w-full max-w-2xl transition-all duration-300">
                        <SpotlightCard
                            project={{
                                title: "Все остальные работы",
                                subtitle: "",
                                description:
                                    "Здесь собраны все другие разрабатываемые проекты.",
                                link: "/MoreProject",
                                linkText: "Смотреть",
                                external: false,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export type { ProjectData }
export { SpotlightCard }
export default Project
