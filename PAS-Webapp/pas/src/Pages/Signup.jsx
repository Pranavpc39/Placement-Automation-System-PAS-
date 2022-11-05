import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignupImage from '../assets/signup.svg'
import {Link} from 'react-router-dom';

export default class Signup extends Component {
  render() {
    return (
      <div style={{display:'flex',padding:'10px',marginTop:'50px',justifyContent:'space-around'}}>
        <div style={{padding:'20px'}} className="shadow p-3 mb-5 bg-white rounded">
        <Form style={{padding:'20px'}}>
            <Form.Group className="mb-3" style={{width:'500px'}} controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <b>Already user ? <Link to='/student-login'>Login</Link></b>
            <br/>
            <Button variant="primary" style={{backgroundColor:'#6C63FF',marginTop:'20px'}} type="submit">
                Submit
            </Button>
        </Form>
        </div>
        <div className="right-section">
            <img alt="Signup" src={SignupImage} style={{height:'400px',width:'500px',}}/>
        </div>
      </div>
    )
  }
}
