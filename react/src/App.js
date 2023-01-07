import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Reserve from './Reserve';
import Home from './LandingPage'

function App() {
  return (
    <>
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/reserve' element={<Reserve/>}></Route>
    </Routes>



    </>
  );
}

export default App;
