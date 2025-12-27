import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

function Project() {
    return (
        <section id="projects" className="container mx-auto px-4 py-20 ">
            <div className="flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-stretch">
                    <Card className="flex flex-col h-full border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
                        <CardHeader>
                            <CardTitle className="text-2xl font-black">ДОКУМЕНТАЦИЯ ВКОНКТАКТЕ</CardTitle>
                            <CardDescription className="font-bold">Сайт с документацией</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p>Вместе с командой работаем над реализацией и поддержкой Базы Данных «За Христа Пострадавшие»</p>
                        </CardContent>
                        <CardFooter className="mt-auto pt-4">
                            <Button asChild className="bg-black text-white dark:bg-white dark:text-black border-2 w-full hover:bg-gray-700 dark:bg-gray-100">
                                <a href="https://vkfcsapp.pstgu.ru/" className="flex items-center justify-center gap-2">
                                    <ExternalLink className="w-4 h-4" />
                                    Перейти
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="flex flex-col h-full border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
                        <CardHeader>
                            <CardTitle className="text-2xl font-black">BRUTAL CARD</CardTitle>
                            <CardDescription className="font-bold">В брутальном стиле</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p>Содержимое карточки в минималистичном стиле</p>
                        </CardContent>
                        <CardFooter className="mt-auto pt-4">
                            <Button asChild className="bg-black text-white dark:bg-white dark:text-black border-2 w-full hover:bg-gray-700 dark:bg-gray-100">
                                <a href="link" className="flex items-center justify-center gap-2">
                                    <ExternalLink className="w-4 h-4" />
                                    Перейти
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="flex flex-col h-full border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
                        <CardHeader>
                            <CardTitle className="text-2xl font-black">BRUTAL CARD</CardTitle>
                            <CardDescription className="font-bold">В брутальном стиле</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p>Содержимое карточки в минималистичном стиле</p>
                        </CardContent>
                        <CardFooter className="mt-auto pt-4">
                            <Button asChild className="bg-black text-white dark:bg-white dark:text-black border-2 w-full hover:bg-gray-700 dark:bg-gray-100">
                                <a href="link" className="flex items-center justify-center gap-2">
                                    <ExternalLink className="w-4 h-4" />
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
