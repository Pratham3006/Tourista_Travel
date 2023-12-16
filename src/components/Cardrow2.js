import React, { useState } from 'react'


import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import image from "D:/tourism/tour/src/images/states/Goa/Food/food-1.jpeg"

export default function Cardrow2(props) {
    const{state,option}=useParams();
    const[hover,sethover]=useState(false)
    
  return (
   <>
   
    <div className="card-container">
            <div className="card-row">
              <div className="card-image">
                <img className style={{opacity:"10"}} src={props.image} alt=""/>
                <div className="card-details">
                  <h2 style={{color:'black', fontFamily:"fantasy",fontWeight:"600"}}>  {props.header} </h2>
                  <p style={{color:"black",fontWeight:"600"}}> {props.para} </p>
                  <div className="card-more">
                    <Link to={`/page/${state}/${option}/$`}><p  className="new-page">Read <span>More</span></p></Link>
                  

                  </div>

                </div>

              </div>
              <div className="card-image">
                <img src={props.image1} alt=""/>
                <div className="card-details">
                  <h2 style={{color:'black', fontFamily:"fantasy",fontWeight:"600"}} > {props.header1} </h2>
                  <p style={{color:"black",fontWeight:"1800"}}> {props.para1} </p>
                  <div className="card-more">
                  <Link to={`/page/${state}/${option}`}><p  className="new-page">Read <span>More</span></p></Link>

                  </div>

                </div>

              </div>
            </div>
            </div>
            
   </>
  )
}
