import Headinglogo from './Images/Headinglogo.png';
import Nav from './Nav.js';
import Reserve from './Reserve';
import App from './App';
import './App.css';
import { BrowserRouter, Route, Router, Routes, Link } from 'react-router-dom';

function Header()
{
    return (
    <>
    <div className="header">
        <img className="hlogo" src={Headinglogo} alt="Header Logo" />
        <Nav/>
        </div>
    </>
    );
}

export default Header
