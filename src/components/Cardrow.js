import React from 'react'
import { Link } from 'react-router-dom'




export default function Cardrow(props) {
  
  return (
    
    <>
     <div className="card-container">
            <div className="card-row">
              <div className="card-image">
                <img src={props.image} alt=""/>
                <div className="card-details">
                  <h2> {props.Description} <span> {props.state} </span></h2>
                  <p> {props.para} </p>
                  <div className="card-more">
                    <Link to={`/page/${props.state}`}><p  className="new-page">Read <span>More</span></p></Link>
                  

                  </div>

                </div>

              </div>
              <div className="card-image">
                <img src={props.image1} alt=""/>
                <div className="card-details">
                  <h2> {props.Description1} <span> {props.state1} </span></h2>
                  <p> {props.para1} </p>
                  <div className="card-more">
                  <Link to={`/page/${props.state1}`}><p  className="new-page">Read <span>More</span></p></Link>

                  </div>

                </div>

              </div>
            </div>
            </div>
      
    </>
  )
}
