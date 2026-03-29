import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from './components/Footer/Footer';
import Snow from './components/Snow/Snow';

import Home from './pages/Home';
import MoreProject from './pages/MoreProject';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white dark:bg-black">
                {/* Зимний снег */}
                <Snow />

                <Routes>
                    {/* Главная страница */}
                    <Route path="/" element={<Home />} />

                    {/* Страница других проектов */}
                    <Route path="/MoreProject" element={<MoreProject />} />
                </Routes>

                {/* Подвал */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
