import './App.css';
import u1 from './Images/user1.png';
import u2 from './Images/user2.png';
import u3 from './Images/user3.png';
import u4 from './Images/user4.png';
function Testimonials()
{
    return (
    <>
    <div className="hero">
        <div className='tcard'>
            <img className="user" src={u1} alt="Header Logo" />
            <p className='ttxt'>The Best Resturant I have ever visited!!</p>
        </div>
        <div className='tcard'><img className="user" src={u2} alt="Header Logo" />
            <p className='ttxt'>A really good place to eat.</p>
            </div>
        <div className='tcard'><img className="user" src={u3} alt="Header Logo" />
            <p className='ttxt'>The food quality is amazing!</p>
            </div>
        <div className='tcard'><img className="user" src={u4} alt="Header Logo" />
            <p className='ttxt'>The staff is very friendly.</p>
            </div>
        </div>
    </>
    );
}

export default Testimonials;
