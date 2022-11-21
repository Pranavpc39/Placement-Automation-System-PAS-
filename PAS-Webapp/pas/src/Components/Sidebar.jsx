import React, { Component } from 'react'

import './Sidebar.css';

import {  Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar'
import JohnDoe from '../assets/john-doe.jpg';

export default class Sidebar extends Component {

  constructor(props){
    super(props);

    this.state={
      active : -1,
    }
  }

  render() {
    // configureAnchors({scrollDuration:1000});
    return (
      <div className='navbar-container'>
        <div className="Header" style={{fontSize:'35px',height:'15%',color:'#4839f5',fontWeight:'bold',marginTop:'5px'}}>
            PAS
        </div>
        <div className="side-menu" style={{height:'60%',color:'gray',width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            
            <Button onClick = {()=> this.setState({active:0})} className={`menu-item ${this.state.active===0 ? "active" : ""}`}><Link style={{textDecoration:'none',color:'inherit'}} to="/under-construction">Dashboard</Link></Button>
            <Button onClick = {()=> this.setState({active:1})} className={`menu-item ${this.state.active===1 ? "active" : ""}`}><Link style={{textDecoration:'none',color:'inherit'}} to="/student-information-form">Fill Profile</Link></Button>
            <Button onClick = {()=> this.setState({active:2})} className={`menu-item ${this.state.active===2 ? "active" : ""}`}><Link style={{textDecoration:'none',color:'inherit'}} to="/student/companies">Company List</Link></Button>
            <Button onClick = {()=> this.setState({active:3})} className={`menu-item ${this.state.active===3 ? "active" : ""}`}><Link style={{textDecoration:'none',color:'inherit'}} to="/under-construction">Track Applications</Link></Button>
            <Button onClick = {()=> this.setState({active:4})} className={`menu-item ${this.state.active===4 ? "active" : ""}`}><Link style={{textDecoration:'none',color:'inherit'}} to="/under-construction">Schedule</Link></Button>
            <Button onClick = {()=> this.setState({active:5})} className={`menu-item ${this.state.active===5 ? "active" : ""}`}><Link style={{textDecoration:'none',color:'inherit'}} to="/student/statistics">Placement Statistics</Link></Button>
        </div>
        <div className="profile-footer" style={{height:'25%',display:'flex',flexDirection:'column',width:'100%'}}>
            <div style={{fontWeight:'lighter',marginLeft:'10px'}}>profile</div>
            <hr />
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' ,width:'100%'}} className="profile">
                <div style={{display:'flex',alignItems:'center',width:'80%'}}>
                  <div className='shadow' style={{marginLeft:'20px',borderRadius:'50%',backgroundColor:'rgb(74, 191, 191)'}}>
                    <Avatar sx={{width:'50px',height:'50px'}} src={JohnDoe} alt="profile"/>
                  </div>
                  <div style={{marginLeft:'20px'}}>John Doe</div>
                </div>
                <Button style={{marginTop:'20px',width:'70%',backgroundColor:'#4839f5'}}><Link style={{textDecoration:'none',color:'white'}} to="/student-login">Log Out</Link></Button>
            </div>
            
        </div>
      </div>
    )
  }
}
