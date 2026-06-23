import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useSpotlight } from "@/hooks/useSpotlight"

export interface ProjectData {
    title: string
    subtitle: string
    description: string
    link: string
    linkText: string
    external?: boolean
}

// interface SpotlightCardProps {
//     project: ProjectData
// }

export function SpotlightCard({ project }: { project: ProjectData }) {
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
