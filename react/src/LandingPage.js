import './App.css';
import Hero from './main';
import Promo from './menu';
import Testimonials from './Testimonials';
import About from './AboutUs';
import Reserve from './Reserve';
import Footer from './Footer';
import Header from './Header';

function Home()
{
    return (
        <>
        <Header/>
        <Hero />
        <Promo />
        <Testimonials />
        <About />
        <Footer/>
        </>
    );
}

export default Home;