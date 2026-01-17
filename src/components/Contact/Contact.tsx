import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, Mail, Github } from "lucide-react"

function Contact() {
    return (
        <section id="contacts" className="container mx-auto px-4 py-20">
            <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-black mb-4 text-black">КОНТАКТЫ</h2>
                <div className="h-1 w-48 mx-auto bg-black mb-6"></div>
                <p className="text-xl font-bold uppercase tracking-wider text-black">СВЯЖИТЕСЬ СО МНОЙ</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-stretch">
                <Card className="flex flex-col h-full border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
                    <CardHeader>
                        <div className="flex items-center justify-center w-16 h-16 bg-black dark:bg-white mx-auto mb-4">
                            <Send className="w-8 h-8 text-white dark:text-black" />
                        </div>
                        <CardTitle className="text-2xl font-black text-center text-black dark:text-white">TELEGRAM</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-center font-bold text-lg mb-4 text-black dark:text-white">@pust0tta</p>
                        <p className="text-center text-gray-700 dark:text-gray-300">
                            Быстрые ответы, обсуждение проектов и оперативная связь
                        </p>
                    </CardContent>
                    <CardFooter className="mt-auto pt-4">
                        <Button asChild className="bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white hover:bg-gray-900 dark:hover:bg-gray-100 w-full py-4 text-base font-bold">
                            <a href="https://t.me/pust0tta" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                <Send className="w-4 h-4" />
                                НАПИСАТЬ
                            </a>
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="flex flex-col h-full border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
                    <CardHeader>
                        <div className="flex items-center justify-center w-16 h-16 bg-black dark:bg-white mx-auto mb-4">
                            <Mail className="w-8 h-8 text-white dark:text-black" />
                        </div>
                        <CardTitle className="text-2xl font-black text-center text-black dark:text-white">EMAIL</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-center font-bold text-lg mb-4 text-black dark:text-white">rephose@mail.ru</p>
                        <p className="text-center text-gray-700 dark:text-gray-300">
                            Для официальных предложений, документов и сотрудничества
                        </p>
                    </CardContent>
                    <CardFooter className="mt-auto pt-4">
                        <Button asChild className="bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900 w-full py-4 text-base font-bold">
                            <a href="mailto:rephose@mail.ru" className="flex items-center justify-center gap-2">
                                <Mail className="w-4 h-4" />
                                НАПИСАТЬ
                            </a>
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="flex flex-col h-full border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
                    <CardHeader>
                        <div className="flex items-center justify-center w-16 h-16 bg-black dark:bg-white mx-auto mb-4">
                            <Github className="w-8 h-8 text-white dark:text-black" />
                        </div>
                        <CardTitle className="text-2xl font-black text-center text-black dark:text-white">GITHUB</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-center font-bold text-lg mb-4 text-black dark:text-white">github.com/reDdboy</p>
                        <p className="text-center text-gray-700 dark:text-gray-300">
                            Портфолио проектов, исходный код и технические решения
                        </p>
                    </CardContent>
                    <CardFooter className="mt-auto pt-4">
                        <Button asChild className="bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white hover:bg-gray-900 dark:hover:bg-gray-100 w-full py-4 text-base font-bold">
                            <a href="https://github.com/reDdboy" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                <Github className="w-4 h-4" />
                                ПОСМОТРЕТЬ
                            </a>
                        </Button>
                    </CardFooter>
                </Card>
             </div>
        </section >
    )
}

export default Contact
