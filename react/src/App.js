import './App.css';
import Header from './Header';
import Hero from './main';
import Promo from './menu';
import Testimonials from './Testimonials';
import About from './AboutUs';
import Footer from './Footer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Reserve from './Reserve';
import Home from './LandingPage'

function App() {
  return (
    <>
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/reserve' element={<Reserve/>}></Route>
    </Routes>



    </>
  );
}

export default App;
