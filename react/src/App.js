import './App.css';
import Header from './Header';
import Hero from './main';
import Promo from './menu';
import Testimonials from './Testimonials';
import About from './AboutUs';
import Footer from './Footer';

function App() {
  return (
    <>
    <div>
    <Header/>
    </div>

    <div>
      <Hero/>
    </div>

    <div>
     <Promo/>
    </div>

    <div>
     <Testimonials/>
    </div>

    <div>
     <About/>
    </div>

    <div>
     <Footer/>
    </div>
    </>
  );
}

export default App;
