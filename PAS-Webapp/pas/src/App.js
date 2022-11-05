import React  from 'react';
import Naviagationbar from './Components/Naviagationbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (
      <div className="App">
        <Naviagationbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/student-signup' element={<Signup/>}/>
          <Route path='/student-login' element={<Login/>}/>

        </Routes>
        
        {/* <Signup/> */}
        {/* <Login/> */}
      </div>
  );
}

export default App;
