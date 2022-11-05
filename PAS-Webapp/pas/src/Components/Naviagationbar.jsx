import React, { Component } from 'react'
import { NavbarBrand, NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigationbar.css';

export default class Naviagationbar extends Component {
  render() {
    return (
        <div style={{boxShadow:'0px 8px 8px -6px black'}}>
            <Navbar style={{marginBottom:'10px'}} className="shadow-sm" bg='dark' variant='dark'>
                <div style={{margin:' 5px 20px',display:'flex',justifyContent:'space-between',width:'100%'}}>
                    <NavbarBrand>PAS</NavbarBrand>
                    <Nav>
                        <NavLink href='#'>Dashboard</NavLink>
                        <NavLink href='#'>Schedule</NavLink>
                        <NavLink href='#'>Login</NavLink>

                    </Nav>
                </div>
            </Navbar>
        </div>
    )
  }
}
