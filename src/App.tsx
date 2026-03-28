import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Snow from './components/Snow/Snow'
import Hero from './components/Hero/Hero'
import Project from './components/Project/Project'
import Tech from './components/Tech/Tech'
import Contact from './components/Contact/Contact'

function App() {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Зимний снег */}
            <Snow />

            {/* Шапка */}
            <Header />

            <main>
                {/* Блок Герой */}
                <Hero />

                {/* Обо мне */}
                <About />

                {/* Блок с проектами */}
                <Project />

                {/* Блок с технологиями */}
                <Tech />

                {/* Блок с контактами */}
                <Contact />
            </main>

            {/* Подвал */}
            <Footer />
        </div>
    )
}

export default App
