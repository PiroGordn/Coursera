import './App.css';
import './Reserve'
import { Link } from "react-router-dom";

function Nav() {
    return (
    <>
    <ul className='navflx'>
        <li><a href='/'>Home</a></li>
        <li><a href='/'>About</a></li>
        <li><a href='/'>Menu</a></li>
        <li></li>
        <li><a href='/'>Online Order</a></li>
        <li><a href='/'>Login</a></li>
    </ul>
    </>
    );
}

export default Nav;