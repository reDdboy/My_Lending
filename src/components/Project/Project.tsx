import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

function Project() {
    return (
        <section id="projects" className="container py-20 ">
            <div className="flex flex-col items-center justufy-center min-h-screen">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <Card className="border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
                        <CardHeader>
                            <CardTitle className="text-2xl font-black">BRUTAL CARD</CardTitle>
                            <CardDescription className="font-bold">В брутальном стиле</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Содержимое карточки в минималистичном стиле</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="bg-black text-white dark:bg-white dark:text-black border-2">
                                <ExternalLink w-4 h-4></ExternalLink>
                                <a href="link" className="flex">
                                    Перейти
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
                        <CardHeader>
                            <CardTitle className="text-2xl font-black">BRUTAL CARD</CardTitle>
                            <CardDescription className="font-bold">В брутальном стиле</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Содержимое карточки в минималистичном стиле</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="bg-black text-white dark:bg-white dark:text-black border-2">
                                <ExternalLink w-4 h-4></ExternalLink>
                                <a href="link" className="flex">
                                    Перейти
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
                        <CardHeader>
                            <CardTitle className="text-2xl font-black">BRUTAL CARD</CardTitle>
                            <CardDescription className="font-bold">В брутальном стиле</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Содержимое карточки в минималистичном стиле</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="bg-black text-white dark:bg-white dark:text-black border-2">
                                <ExternalLink w-4 h-4></ExternalLink>
                                <a href="link" className="flex">
                                    Перейти
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section >
    )
}

export default Project
