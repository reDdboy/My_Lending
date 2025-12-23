import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Snow from './components/Snow/Snow'


function App() {
    return (
        <div className="min-h-screen bg-white">
            {/* Зимний снег */}
            <Snow />

            {/* Шапка */}
            <Header />

            <main>
                {/* Обо мне */}
                <About />
            </main>

            {/* Подвал */}
            <Footer />
        </div>
    )
}

export default App
