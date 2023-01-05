import greeksalad from './Images/greek salad.jpg';
import bruchetta from './Images/bruchetta.png';
import lemondessert from './Images/lemon dessert.jpg';
import icon from './Images/icon.png';
import './App.css';

function Promo()
{
    return (
    <>
    <span className='mtitle'>Specials</span>
    <button className='mbutton'>Online Menu</button>
    <div className="promo">
        <div className='card'>
        <img className="card-img" src={greeksalad} alt="Greek Salad" />
        <span className='card-title'>Greek Salad</span>
        <span className='card-price'>$5.99</span>
        <p className='card-txt'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary... </p>
        <span className='card-title'>Order For Delivery</span>
        <img className='card-order' src={icon} alt="icon" />
        </div>

        <div className='card'>
        <img className="card-img" src={bruchetta} alt="Bruchetta" />
        <span className='card-title'>Bruchetta</span>
        <span className='card-price'>$5.99</span>
        <p className='card-txt'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil... </p>
        <span className='card-title'>Order For Delivery</span>
        <img className='card-order' src={icon} alt="icon" />
        </div>

        <div className='card'>
        <img className="card-img" src={lemondessert} alt="Lemon Dessert" />
        <span className='card-title'>Lemon Desert</span>
        <span className='card-price'>$5.00</span>
        <p className='card-txt'>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined...</p>
        <span className='card-title'>Order For Delivery</span>
        <img className='card-order' src={icon} alt="icon" />
        </div>
    </div>
    </>
    );
}

export default Promo
