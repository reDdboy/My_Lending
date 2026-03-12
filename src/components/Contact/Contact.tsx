import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, Mail, Github, ExternalLink } from "lucide-react"

function Contact() {
    const contacts = [
        {
            title: "Telegram",
            subtitle: "@pust0tta",
            description:
                "Быстрые ответы, обсуждение проектов и оперативная связь",
            link: "https://t.me/pust0tta",
            linkText: "Написать",
            logo: Send,
        },
        {
            title: "EMAIL",
            subtitle: "rephose@mail.ru",
            description:
                "Для официальных предложений, документов и сотрудничества",
            link: "mailto: rephose@mail.ru",
            linkText: "Перейти",
            logo: Mail,
        },
        {
            title: "GITHUB",
            subtitle: "github.com/reDdboy",
            description: "Портфолио проектов, исходный код и технические решения",
            link: "https://github.com/reDdboy",
            linkText: "Перейти",
            logo: Github,
        }
    ]

    return (
        <section id="contacts" className="container mx-auto px-4 py-20 ">
            <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-black mb-4 text-black dark:text-white">Контакты</h2>
                <div className="h-1 w-48 mx-auto bg-black dark:bg-white mb-6"></div>
            </div>

            <div className="flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-stretch">
                    {contacts.map(({ title, subtitle, description, link, linkText, logo: Logo }, idx) => (
                        <Card key={idx} className="flex flex-col w-full h-full border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
                            <CardHeader>
                                <div className="flex items-center justify-center w-16 h-16 bg-black dark:bg-white mx-auto mb-4">
                                    <Logo className="w-8 h-8 text-white dark:text-black" />
                                </div>
                                <CardTitle className="text-2xl font-black text-center text-black dark:text-white">{title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-center font-bold text-lg mb-4 text-black dark:text-white"> {subtitle} </p>
                                <p className="text-center text-gray-700 dark:text-gray-300"> {description} </p>
                            </CardContent>
                            <CardFooter className="mt-auto pt-4">
                                <Button asChild className="bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900 w-full py-4 text-base font-bold">
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-black dark:text-white">
                                        <ExternalLink className="w-4 h-4" />
                                        {linkText}
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Contact
