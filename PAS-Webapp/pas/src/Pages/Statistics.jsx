import React, { Component } from 'react'
import CurrentYearPieChart from '../Components/PieChartCurrentYear'
import LineChartMonthlyPlaced from '../Components/LineChartMonthlyPlaced'
import BiaxialBarChartCurrentYear from '../Components/BiaxialBarChartCurrentYear'

export default class Statistics extends Component {
  render() {
    return (
      <div style={{marginTop:'20px',width:'100%'}}>
        <h2>Statistcs</h2>
        <br/>
        <br/>
        <h4>Current year statistics</h4>
        <div style={{marginTop:'40px',width:'95%',display:'flex'}} className="statistics-container">
            <div className="left-side-statistics" style={{width:'50%'}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div  style={{width:'45%',boxShadow:'0 10px 15px 0 rgba(66, 133, 244,.18), 0 20px 20px 0 rgba(66, 133, 244,.15)',color:'white',display:'flex',flexDirection:'column',borderRadius:'10px',backgroundColor:'#4839f5',padding:'5px 20px',justifyContent:'space-between'}}>
                        <h3>531</h3>
                        <span>Students placed</span>
                    </div>
                    <div className='shadow-sm' style={{width:'45%',display:'flex',flexDirection:'column',borderRadius:'10px',backgroundColor:'white',padding:'5px 20px',justifyContent:'space-between'}}>
                        <h3>179</h3>
                        <span>COMP department</span>
                    </div>
                </div>
                <div style={{marginTop:'30px',display:'flex',justifyContent:'space-between'}}>
                    <div className='shadow-sm' style={{width:'45%',display:'flex',flexDirection:'column',borderRadius:'10px',backgroundColor:'white',padding:'5px 20px',justifyContent:'space-between'}}>
                        <h3>194</h3>
                        <span>IT department</span>
                    </div>
                    <div className='shadow-sm' style={{width:'45%',display:'flex',flexDirection:'column',borderRadius:'10px',backgroundColor:'white',padding:'5px 20px',justifyContent:'space-between'}}>
                        <h3>158</h3>
                        <span>ENTC department</span>
                    </div>
                </div>
                <div className="line-chart-monthly-placed shadow" style={{marginTop:'30px',padding:'30px',backgroundColor:'white'}}>
                    <LineChartMonthlyPlaced/>
                </div>
            </div>
            <div className="right-side-statistics" style={{width:'50%'}}>
                <CurrentYearPieChart/>
                <BiaxialBarChartCurrentYear/>
            </div>
        </div>
        
      </div>
    )
  }
}
