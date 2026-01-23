import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

function Project() {
    return (
        <section id="projects" className="container mx-auto px-4 py-20 ">
            <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-black mb-4 text-black dark:text-white">ПРОЕКТЫ</h2>
                <div className="h-1 w-48 mx-auto bg-black dark:bg-white mb-6"></div>
            </div>

            <div className="flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-stretch">
                    <Card className="flex flex-col h-full border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
                        <CardHeader>
                            <CardTitle className="text-2xl font-black">ДОКУМЕНТАЦИЯ ВКОНКТАКТЕ</CardTitle>
                            <CardDescription className="font-bold">Сайт с документацией</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p>Вместе с командой работаем над реализацией и поддержкой Базы Данных «За Христа Пострадавшие» для разных платформ</p>
                        </CardContent>
                        <CardFooter className="mt-auto pt-4">
                            <Button asChild className="bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900 w-full py-4 text-base font-bold">
                                <a href="https://vkfcsapp.pstgu.ru/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-black dark:text-white">
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
                            <Button asChild className="bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white hover:bg-gray-900 dark:hover:bg-gray-100 w-full py-4 text-base font-bold">
                                <a href="link" target="_blank" rel="noopener norefrrer" className="flex items-center justify-center gap-2">
                                    <ExternalLink className="w-4 h-4" />
                                    Перейти
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="flex flex-col h-full border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
                        <CardHeader>
                            <CardTitle className="text-2xl font-black">TODO LIST</CardTitle>
                            <CardDescription className="font-bold">Сайт для добавления и удаления задач</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p>Простенький сайт с списком задач на день. Удобный и понятный интерфейс добавления, удаления</p>
                        </CardContent>
                        <CardFooter className="mt-auto pt-4">
                            <Button asChild className="bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900 w-full py-4 text-base font-bold">
                                <a href="link" target="_blank" rel="noopener norefrrer" className="flex items-center justify-center gap-2">
                                    <ExternalLink className="w-4 h-4" />
                                    Перейти
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Project
