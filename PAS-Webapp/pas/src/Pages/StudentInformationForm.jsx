import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignupImage from '../assets/signup.svg'

export default class StudentInformationForm extends Component {
  render() {
    return (
        <div style={{marginTop:'20px'}}>
            <h2>Student Information Form</h2>
            <div style={{display:'flex',padding:'10px',marginTop:'50px',justifyContent:'space-around'}}>
                <div style={{padding:'20px'}} className="shadow p-3 mb-5 bg-white rounded">
                <Form style={{padding:'20px'}}>
                    <Form.Group className="mb-3" style={{width:'500px'}} controlId="formBasicName">
                        <Form.Label>Mobile number</Form.Label>
                        <Form.Control type="number" placeholder="Enter your mobile number" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Gender</Form.Label>
                        <div style={{display:'flex',marginBottom:'20px'}}>
                            <div  class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div style={{marginLeft:'20px'}} class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Female
                                </label>
                            </div> 
                        </div>
                    </Form.Group>
                    {/* <Form.Group>
                        <Form.Label>Branch</Form.Label>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </Form.Group> */}
                    <Form.Group className="mb-3" style={{width:'500px'}} controlId="formBasicName">
                        <Form.Label>10th Marks</Form.Label>
                        <Form.Control type="number" placeholder="Enter your 10th marks" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{width:'500px'}} controlId="formBasicName">
                        <Form.Label>12th Marks</Form.Label>
                        <Form.Control type="number" placeholder="Enter your 12th marks" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{width:'500px'}} controlId="formBasicName">
                        <Form.Label>CGPA Score</Form.Label>
                        <Form.Control type="number" placeholder="CGPA Score" />
                    </Form.Group>

                    <Form.Group className="mb-3" style={{width:'500px'}} controlId="formBasicName">
                        <Form.Label>AMCAT Automata Pro Score</Form.Label>
                        <Form.Control type="number" placeholder="Enter your Amcat score" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{width:'500px'}} controlId="formBasicName">
                        <Form.Label>AMCAT Automata Fix Score</Form.Label>
                        <Form.Control type="number" placeholder="Enter your Amcat score" />
                    </Form.Group>
                    {/* <b>Already user ? <Link to='/student-login'>Login</Link></b> */}
                    {/* <br/> */}
                    <Button variant="primary" style={{backgroundColor:'#4839f5',marginTop:'15px'}} type="submit">
                        Submit
                    </Button>
                </Form>
                </div>
                <div className="right-section">
                    <img alt="Signup" src={SignupImage} style={{height:'400px',width:'500px',}}/>
                </div>
            </div>
        </div>
        
    )
  }
}
