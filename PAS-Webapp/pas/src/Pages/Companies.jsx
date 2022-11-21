import React, { Component } from 'react'
import CompanyCard from '../Components/CompanyCard';

export default class Companies extends Component {

  render() {
    return (
      <div style={{marginTop:'20px'}} className='companies-page'>
        <h2>Company List</h2>
        <div className='company-card-container' style={{marginTop:'40px',width:'90%'}}>
            <h4>Current Drive</h4>
            <div style={{display:'flex',marginRight:'20px',marginTop:'20px',flexWrap:'wrap'}} className="company-card-container">
                <CompanyCard/>
                <CompanyCard/>
                <CompanyCard/>
            </div>
        </div>
        
        <div className='company-card-container' style={{marginTop:'40px',width:'90%'}}>
            <h4>Past Drive</h4>
            <div style={{display:'flex', flexWrap:'wrap' ,marginRight:'20px',marginTop:'20px'}} className="company-card-container">
                <CompanyCard/>
                <CompanyCard/>
                <CompanyCard/>
                <CompanyCard/>
                <CompanyCard/>
            </div>
        </div>

     </div>
    )
  }
}
