import Headinglogo from './Images/Headinglogo.png';
import Nav from './Nav.js';
import './App.css';
import BookForm from './Form';
function Header()
{
    return (
    <>
    <div className="header">
        <img className="hlogo" src={Headinglogo} alt="Header Logo" />
        <Nav/>
        </div>
        <div>
            <BookForm/>
        </div>
    </>
    );
}

export default Header
