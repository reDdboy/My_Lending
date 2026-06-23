import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import ThemeToggle from "../components/ThemeToggle/ThemeToggle"

import { SpotlightCard } from "@/components/ProjectCard/ProjectCard";
import { projects } from "@/data/projects";

function MoreProject() {
    return (
        <section className="min-h-screen py-10 px-4 bg-white dark:bg-black">
            <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between ">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 text-lg font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 mb-12 transition-colors group"
                    >
                        <ArrowLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                        Вернуться на главную
                    </Link>
                    <ThemeToggle />
                </div>

                {/* Заголовок */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black mb-4 text-black dark:text-white">
                        ДРУГИЕ ПРОЕКТЫ
                    </h1>
                    <div className="h-1 w-48 mx-auto bg-black dark:bg-white mb-6"></div>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Полный список всех разрабатываемых проектов
                    </p>
                </div>

                {/* Карточки с spotlight-эффектом */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <SpotlightCard key={idx} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MoreProject;
