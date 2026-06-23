import { Code2, Terminal, FileCode, Cpu, Brackets, Database } from "lucide-react"

export type TechData = {
    name: string
    icon: React.ReactNode
}

export const technologies: TechData[] = [
    { name: "JAVASCRIPT", icon: <Code2 className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "TYPESCRIPT", icon: <Terminal className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "C++", icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "HTML", icon: <FileCode className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "CSS", icon: <Brackets className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "PHP", icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" /> },
]
