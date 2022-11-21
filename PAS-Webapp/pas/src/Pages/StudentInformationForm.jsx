import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default class StudentInformationForm extends Component {
  render() {
    return (
        <div style={{marginTop:'20px',width:'100%'}}>
            <h2>Student Information Form</h2>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <div style={{padding:'20px',width:'80%',marginTop:'50px'}} className="shadow p-3 mb-5 bg-white rounded">
                        <Form style={{padding:'20px',width:'100%'}}>
                            <div style={{display:'flex'}}>
                                <Form.Group className="mb-3" style={{marginLeft:'10px',width:'33%'}}  controlId="formBasicName">
                                    <Form.Label>First Name<span style={{color:'red'}}>*</span></Form.Label>
                                    <Form.Control type="text" placeholder="First Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" style={{marginLeft:'10px',width:'33%'}}  controlId="formBasicName">
                                    <Form.Label>Middle Name<span style={{color:'red'}}>*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Middle Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" style={{marginLeft:'10px',width:'34%'}}  controlId="formBasicName">
                                    <Form.Label>Last Name<span style={{color:'red'}}>*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" />
                                </Form.Group>
                            </div>
                            <Form.Group className="mb-3" style={{marginLeft:'10px',width:'99%'}}  controlId="formBasicName">
                                <Form.Label>Email<span style={{color:'red'}}>*</span></Form.Label>
                                <Form.Control type="text" placeholder="Email address" />
                            </Form.Group>
                            <Form.Group className="mb-3" style={{marginLeft:'10px',width:'99%'}}  controlId="formBasicName">
                                <Form.Label>Alternate email</Form.Label>
                                <Form.Control type="text" placeholder="Alternate email address" />
                            </Form.Group>
                            <Form.Group className="mb-3" style={{marginLeft:'10px',width:'99%'}}  controlId="formBasicName">
                                <Form.Label>Whatsapp mobile no.<span style={{color:'red'}}>*</span></Form.Label>
                                <Form.Control type="number" placeholder="Whatsapp mobile no." />
                            </Form.Group>
                            <div style={{display:'flex'}}>
                                <Form.Group className="mb-3" style={{marginLeft:'10px',width:'50%'}}  controlId="formBasicName">
                                    <Form.Label>Date of birth<span style={{color:'red'}}>*</span></Form.Label>
                                    <div style={{width:'100%',display:'flex'}}>
                                        <Form.Control style={{width:'32%'}} type="number" placeholder="DD" />
                                        <Form.Control style={{width:'32%',marginLeft:'10px'}} type="number" placeholder="MM" />
                                        <Form.Control style={{width:'32%',marginLeft:'10px'}} type="number" placeholder="YYYY" />
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3" style={{marginLeft:'30px',width:'50%'}}  controlId="formBasicName">
                                    <Form.Label>Gender<span style={{color:'red'}}>*</span></Form.Label>
                                    <div style={{display:'flex',marginBottom:'20px'}}>
                                        <div  class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Male
                                            </label>
                                        </div>
                                        <div style={{marginLeft:'20px'}} class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Female
                                            </label>
                                        </div> 
                                    </div>
                                </Form.Group>
                            </div>
                            <div style={{display:'flex',width:'100%'}}>
                                <Form.Group className="mb-3" style={{marginLeft:'10px',width:'50%'}}  controlId="formBasicName">
                                    <Form.Label>Registration no.<span style={{color:'red'}}>*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Registration no." />
                                </Form.Group> 
                                <Form.Group className="mb-3" style={{marginLeft:'10px',width:'50%'}}  controlId="formBasicName">
                                    <Form.Label>PRN no.<span style={{color:'red'}}>*</span></Form.Label>
                                        <Form.Control type="text" placeholder="PRN no." />
                                </Form.Group>
                            </div>
                            <Button variant="primary" style={{backgroundColor:'#4839f5',marginTop:'15px'}} type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
                
        </div>
        
    )
  }
}
