import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';




export default function Cardrow(props) {
    const {state}=useParams();
    
  
  return (
    
    
    <>
    
     <div className="card-container">
            <div className="card-row">
              <div className="card-image">
                <img src={props.image} alt=""/>
                <div className="card-details">
                  <h2>  {props.option} </h2>
                  <p> {props.para} </p>
                  <div className="card-more">
                    <Link to={`/page/${state}/${props.option}`}><p  className="new-page">Read <span>More</span></p></Link>
                  

                  </div>

                </div>

              </div>
              <div className="card-image">
                <img src={props.image1} alt=""/>
                <div className="card-details">
                  <h2 > {props.option1} </h2>
                  <p> {props.para1} </p>
                  <div className="card-more">
                  <Link to={`/page/${state}/${props.option1}`}><p  className="new-page">Read <span>More</span></p></Link>

                  </div>

                </div>

              </div>
            </div>
            </div>
            
      
    </>
  )
}
