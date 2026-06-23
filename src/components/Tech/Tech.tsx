import { Card, CardContent } from "@/components/ui/card"
import { useSpotlight } from "@/hooks/useSpotlight"
import type { TechData } from "@/data/tech"
import { technologies } from "@/data/tech"

function SpotlightTechCard({ name, icon }: TechData) {
    const { onMouseMove, onMouseLeave } = useSpotlight()

    return (
        <div
            className="relative overflow-hidden flex flex-col items-center p-4 border-2 border-black dark:border-white bg-white dark:bg-black"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            <div
                className="spotlight-effect pointer-events-none absolute z-10 rounded-full"
                style={{
                    width: "200px",
                    height: "200px",
                    transform: "translate(-50%, -50%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 65%)",
                }}
            />

            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 bg-black dark:bg-white flex items-center justify-center relative z-20">
                <div className="text-white dark:text-black">
                    {icon}
                </div>
            </div>

            <div className="text-center relative z-20">
                <div className="text-lg sm:text-xl font-black text-black dark:text-white uppercase tracking-wide">
                    {name}
                </div>
            </div>
        </div>
    )
}

function Tech() {

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
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                        {technologies.map((tech, index) => (
                            <SpotlightTechCard key={index} {...tech} />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

export default Tech
