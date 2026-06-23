import { SpotlightCard } from "../ProjectCard/ProjectCard";
import { projects } from "@/data/projects"

interface ProjectProps {
    limit?: number
    showOtherProjects?: boolean
}

function Project({ limit, showOtherProjects = true }: ProjectProps) {
    const projectsToShow = limit ? projects.slice(0, limit) : projects;

    return (
        <section id="projects" className="container mx-auto px-4 py-20">
            <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-black mb-4 text-black dark:text-white">ПРОЕКТЫ</h2>
                <div className="h-1 w-48 mx-auto bg-black dark:bg-white mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {projectsToShow.map((project, idx) => (
                    <SpotlightCard key={idx} project={project} />
                ))}
            </div>
            {showOtherProjects && (
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-10">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black to-black dark:via-white dark:to-white"></div>
                        <h3 className="text-3xl md:text-4xl font-black tracking-widest text-black dark:text-white whitespace-nowrap">
                            ДРУГИЕ ПРОЕКТЫ
                        </h3>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-black to-black dark:via-white dark:to-white"></div>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-full max-w-2xl transition-all duration-300">
                            <SpotlightCard
                                project={{
                                    title: "Все остальные работы",
                                    subtitle: "",
                                    description:
                                        "Здесь собраны все другие разрабатываемые проекты.",
                                    link: "/projects",
                                    linkText: "Смотреть",
                                    external: false,
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Project
