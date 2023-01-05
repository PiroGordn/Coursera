import aboutA from './Images/Mario and Adrian A.jpg';
import aboutB from './Images/Mario and Adrian b.jpg';
import './App.css';

function About()
{
    return (
    <>
    <div className="about">
        <div className='col'>
        <span className='abt-title'>Little Lemon</span>
        <span className='abt-sub'>Chicago</span>
        <p className='abt-txt'>Little Lemon is a family resturant owned by two brothers Adrian and Mario. Our Menu contains a range of dishes from Meditteranean, Turkish and Italian cultures. Our chefs have experince of working in resturants in Italy.</p>
        </div>
        <div className='col'>
        <img className="abt-img" id='1' src={aboutA} alt="Header Logo" />
        <img className="abt-img" id='2' src={aboutB} alt="Header Logo" />
        </div>
        </div>
    </>
    );
}

export default About;
