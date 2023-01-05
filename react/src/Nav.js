import './App.css';
import Reserve from './Reserve';
import App from './App';
import { BrowserRouter, Route, Router, Routes, Link } from 'react-router-dom';

function Nav() {
    return (
    <>
    <ul className='navflx'>
        <li><a href='/'>Home</a></li>
        <li><a href='/'>About</a></li>
        <li><a href='/'>Menu</a></li>
        <li><Link to='/reserve'>Reservations</Link></li>
        <li><a href='/'>Online Order</a></li>
        <li><a href='/'>Login</a></li>
    </ul>
    </>
    );
}

export default Nav;