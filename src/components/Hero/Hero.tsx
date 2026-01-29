import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Hero: React.FC = () => {
    return (
        <section className="container hero mx-auto min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center justify-center px-4 py-10 md:py-20">
            <Card className="w-full max-w-4xl border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff] p-6 sm:p-8 md:p-10 lg:p-12 space-y-6 sm:space-y-8">
                <CardHeader className="p-0 space-y-6 text-center">
                    <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-widest text-black dark:text-white">
                        REDDBOY
                    </h1>

                    <div className="h-2 w-3/5 sm:w-3/4 mx-auto bg-black dark:bg-white" />
                    <p className=" text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-widest text-black dark:text-white">
                        ВЕБ-РАЗРАБОТЧИК
                    </p>
                </CardHeader>

                <CardContent className="p-0 pt-4 sm:pt-6">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                        <a href="#projects" className="hero__button-projects px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-black dark:bg-white text-white dark:text-black text-base sm:text-lg md:text-xl font-black border-2 border-gray/50 dark:border-white hover:translate-y-[-2px] transition-all duration-200 uppercase tracking-widest flex items-center justify-center gap-2">
                            Смотреть проекты
                        </a>

                        <a href="#contacts" className="hero__button-contact px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white dark:bg-black text-black dark:text-white text-base sm:text-lg md:text-xl font-black border-2 border-black dark:border-white hover:translate-y-[-2px] transition-all duration-200 uppercase tracking-widest flex items-center justify-center gap-2">
                            Связаться
                        </a>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};

export default Hero;
