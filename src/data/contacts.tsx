import { Send, Mail, Github } from "lucide-react"

export type ContactData = {
    title: string
    subtitle: string
    description: string
    link: string
    linkText: string
    logo: React.ElementType
}


export const contacts: ContactData[] = [
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
