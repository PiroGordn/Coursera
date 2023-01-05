import './App.css';
import Header from './Header';
import Hero from './main';
import Promo from './menu';
import Testimonials from './Testimonials';

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
    </>
  );
}

export default App;
