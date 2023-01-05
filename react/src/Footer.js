import footer from './Images/Asset 20@4x.png';
import './App.css';

function Footer()
{
    return (
    <>
    <hr/>
    <div className="footer">
        <img className="fimg" src={footer} alt="Little Lemon"/>
        <span className='ftitle'>Contact Us:
        <p className='blocp'>Adrian-1234567890 </p><p>Mario-0987654321</p>
        </span>
        <span className='ftitle'>Email:
        <p className='blocp'>littlelemon@gmail.com</p>
        </span>

    </div>
    </>
    );
}

export default Footer;