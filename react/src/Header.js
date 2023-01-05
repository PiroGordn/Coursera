import Headinglogo from './Images/Headinglogo.png';
import Nav from './Nav.js';
import './App.css';

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
