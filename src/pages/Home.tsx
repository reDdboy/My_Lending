import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Project from '../components/Project/Project';
import Tech from '../components/Tech/Tech';
import Contact from '../components/Contact/Contact';
import Header from '@/components/Header/Header';

function Home() {
    return (
        <main>
            {/* Шапка */}
            <Header />

            {/* Блок Герой */}
            <Hero />

            {/* Обо мне */}
            <About />

            {/* Блок с проектами */}
            <Project limit={3} showOtherProjects={true} />

            {/* Блок с технологиями */}
            <Tech />

            {/* Блок с контактами */}
            <Contact />
        </main>
    );
}

export default Home;
