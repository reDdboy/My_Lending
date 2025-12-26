function Footer() {
    return (
        <footer className="py-8 bg-white dark:bg-black text-black dark:text-white border-b border-black-300 dark:border-gray-800 backdrop-blur-sm bg-white/80 dark:bg-black/80 border-2">
            <div className="container mx-auto px-4 text-center">
                <p>© Семченко Александр, {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer
