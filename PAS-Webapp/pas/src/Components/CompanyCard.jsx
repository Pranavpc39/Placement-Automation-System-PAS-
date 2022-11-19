import React, { Component } from 'react'
import CompanyImg from '../assets/company.jpg';
import { Button } from 'react-bootstrap';
import './CompanyCard.css';

export default class CompanyCard extends Component {
  render() {
    return (
      <div style={{width:'200px'}}>
        <div className='company-card shadow' style={{width:'200px',height:'300px'}}>
            <img style={{width:'200px',height:'300px'}} src={CompanyImg} alt="company"></img>
            <div style={{fontWeight:'bold'}}>Company name</div> 
        </div>
        <div style={{marginTop:'10px'}}>
          <Button variant="primary" style={{backgroundColor:'#4839f5',marginTop:'20px'}} type="submit">
                Apply
          </Button>
        </div>
        
        {/* <Button>Apply</Button> */}
      </div>
    )
  }
}
