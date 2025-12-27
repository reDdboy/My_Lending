function Hero() {
    return (
        <section className="min-h-[90vh] flex items-center justify-center px-4">
            <div className="text-center max-w-4xl border-4 border-black dark:border-white p-12 bg-white dark:bg-black space-y-8">
                <div className="text-8xl md:text-9xl font-black tracking-tighter leading-none">
                    REDDBOY
                </div>
                <div className="h-2 w-3/4 mx-auto bg-black dark:bg-white"></div>
                <p className="text-2xl font-bold uppercase tracking-widest">
                    ВЕБ-РАЗРАБОТЧИК
                </p>
                {/* <p className="text-lg max-w-2xl mx-auto font-medium">
                    Студент факультета информатики и прикладной математики
                </p> */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <button className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black text-lg font-bold border-2 border-black dark:border-white hover:translate-y-0.5 transition-transform">
                        <a href="#projects" className="font-bold items-center justify-center gap-2">
                            СМОТРЕТЬ ПРОЕКТЫ
                        </a>
                    </button>
                    <button className="px-10 py-4 bg-white dark:bg-black text-black dark:text-white text-lg font-bold border-2 border-black dark:border-white hover:translate-y-0.5 transition-transform">
                        <a href="#contact" className="items-center justify-center gap-2">
                            СВЯЗАТЬСЯ
                        </a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
