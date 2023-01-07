import './App.css';
import { Form } from 'react-router-dom';

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
    <input data-testid="fname" type="text" name="first name" required/>
    </fieldset>
  </div>

        <div className='input'>
        <fieldset>
  <label>
    Last Name* :
    </label> <br/>
    <input data-testid="lname" type="text" name="last name" required/>

  </fieldset>
  </div>

        <div className='input'>
        <fieldset>
  <label>
    Email* :
    </label> <br/>
    <input data-testid="email" type="text" name="email" required/>

  </fieldset>
  </div>

        <div className='input'>
        <fieldset>
  <label>
    Date of Reservation* :
    </label> <br/>
    <input data-testid="date" type="date" name="date" required/>

  </fieldset>
  </div>

  <div className='input'>
  <fieldset>
  <label>
   Time of Reservation* :
   </label> <br/>
    <input data-testid="time" type="time" name="time" required/>
  </fieldset>
  </div>

<div className='input'>
  <input data-testid="button" type="submit" value="submit" />
  </div>
        </form>
    </div>
    </>
    );
}

export default BookForm
