import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from './pages/storePage/Store';
import Home from './pages/homePage/Home';
import About from './pages/aboutPage/About';
import ShopDetail from './pages/shopDetailPage/ShopDetail';
import Contact from './pages/contactPage/Contact';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './app.scss';

const App = () => {
    return (
        <BrowserRouter>

            <Header />
            <Routes>
                <Route path='/' element={<Store />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/shopDetail' element={<ShopDetail />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
