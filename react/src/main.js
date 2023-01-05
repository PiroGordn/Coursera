import Rf1 from './Images/restauranfood.jpg';
import Nav from './Nav.js';
import './App.css';

function Hero()
{
    return (
    <>
    <div className="hero">
        <div>
        <span className='Title'>Little Lemon</span>
        <span className='subTitle'>Chicago</span>
        <p className='txt'>Little Lemon is a Mediterranean restaurant owned by two brothers Adrian and Mario. Our Menu includes dishes from Italian, Mediterranean and Turkish Cuisines.</p>
        <button className='mbutton'>Reserve A Table</button>
        </div>
        
        <div>
        <img className="mlogo" src={Rf1} alt="Header Logo" />
        </div>
        </div>
    </>
    );
}

export default Hero
