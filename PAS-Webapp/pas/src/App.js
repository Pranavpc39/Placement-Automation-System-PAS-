import React  from 'react';
import Naviagationbar from './Components/Naviagationbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import StudentInformationForm from './Pages/StudentInformationForm';
import Sidebar from './Components/Sidebar';
import './App.css';
import Companies from './Pages/Companies';
import Statistics from './Pages/Statistics';
import UnderContruction from './Pages/UnderContruction';

function App() {
  return (
      <div className="App">
        {/* <Naviagationbar/> */}
        <div>
          <Sidebar/>
        </div>
        <div style={{ width:'80%' ,display:'flex',flexDirection:'column'}} >
          <div style={{width:'100%'}}>
            <Naviagationbar/>
          </div>
          <div style={{marginLeft:'50px'}}>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/student-signup' element={<Signup/>}/>
              <Route path='/student-login' element={<Login/>}/>
              <Route path='/student-information-form' element={<StudentInformationForm/>}/>
              <Route path='/student/companies' element={<Companies/>}/>
              <Route path='/student/statistics' element={<Statistics/>}/>
              <Route path='/under-construction' element={<UnderContruction/>}/>
            </Routes>
          </div>
        </div>
        
        
        {/* <Signup/> */}
        {/* <Login/> */}
      </div>
  );
}

export default App;
