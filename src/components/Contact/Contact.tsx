import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, Mail, Github, ExternalLink } from "lucide-react"
import { useSpotlight } from "@/hooks/useSpotlight"

type ContactData = {
    title: string
    subtitle: string
    description: string
    link: string
    linkText: string
    logo: React.ElementType
}

function SpotlightContactCard({ title, subtitle, description, link, linkText, logo: Logo }: ContactData) {
    const { onMouseMove, onMouseLeave } = useSpotlight()

    return (
        <div
            className="relative flex w-full h-full overflow-hidden"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
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
                    <div className="flex items-center justify-center w-16 h-16 bg-black dark:bg-white mx-auto mb-4">
                        <Logo className="w-8 h-8 text-white dark:text-black" />
                    </div>
                    <CardTitle className="text-2xl font-black text-center text-black dark:text-white">{title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-center font-bold text-lg mb-4 text-black dark:text-white">{subtitle}</p>
                    <p className="text-center text-gray-700 dark:text-gray-300">{description}</p>
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
        </div>
    )
}

function Contact() {
    const contacts: ContactData[] = [
        {
            title: "Telegram",
            subtitle: "@pust0tta",
            description: "Быстрые ответы, обсуждение проектов и оперативная связь",
            link: "https://t.me/pust0tta",
            linkText: "Написать",
            logo: Send,
        },
        {
            title: "GITHUB",
            subtitle: "github.com/reDdboy",
            description: "Портфолио проектов, исходный код и технические решения",
            link: "https://github.com/reDdboy",
            linkText: "Перейти",
            logo: Github,
        },
        {
            title: "EMAIL",
            subtitle: "rephose@mail.ru",
            description: "Для официальных предложений, документов и сотрудничества",
            link: "mailto:rephose@mail.ru",
            linkText: "Написать",
            logo: Mail,
        },
    ]

    return (
        <section id="contacts" className="container mx-auto px-4 py-20">
            <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-black mb-4 text-black dark:text-white">Контакты</h2>
                <div className="h-1 w-48 mx-auto bg-black dark:bg-white mb-6"></div>
            </div>

            <div className="flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-stretch w-full">
                    {contacts.map((contact, idx) => (
                        <SpotlightContactCard key={idx} {...contact} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact
