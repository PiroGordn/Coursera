import Headinglogo from './Images/Headinglogo.png';
import Nav from './Nav.js';
import Reserve from './Reserve';
import App from './App';
import './App.css';
import { From } from 'react-router-dom';

function BookForm()
{
    return (
    <>
    <h1 className='form-title'>Book A Table</h1>
    <div className="header">
        <form>
        <div className='input'>
            <fieldset>
  <label>
    First Name* :
    </label> <br/>
    <input type="text" name="first name" required/>
    </fieldset>
  </div>

        <div className='input'>
        <fieldset>
  <label>
    Last Name* :
    </label> <br/>
    <input type="text" name="last name" required/>

  </fieldset>
  </div>

        <div className='input'>
        <fieldset>
  <label>
    Email* :
    </label> <br/>
    <input type="text" name="email" required/>

  </fieldset>
  </div>

        <div className='input'>
        <fieldset>
  <label>
    Date of Reservation* :
    </label> <br/>
    <input type="date" name="date" required/>

  </fieldset>
  </div>

  <div className='input'>
  <fieldset>
  <label>
   Time of Reservation* :
   </label> <br/>
    <input type="time" name="time" required/>
  </fieldset>
  </div>

<div className='input'>
  <input type="submit" value="Submit" />
  </div>
        </form>
    </div>
    </>
    );
}

export default BookForm
