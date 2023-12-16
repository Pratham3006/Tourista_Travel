import React from 'react'

export default function Carousel(props) {
  return (
   <>
   
   <div className="container">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
          <div className="carousel-item active">
              <video width="900" height="800" autoPlay muted Loop><source  onLoadStart="this.playbackRate = 1.5;" src={props.video} alt="vedio"/></video>
            </div>
            <div className="carousel-item active">
              <video width="900" height="800" autoPlay muted Loop><source  onLoadStart="this.playbackRate = 1.5;" src={props.video} alt="vedio"/></video>
            </div>
            <div className="carousel-item active">
              <video width="900" height="800" autoPlay muted Loop><source  onLoadStart="this.playbackRate = 1.5;" src={props.video} alt="vedio"/></video>
            </div>
           
          </div>
        </div>
        </div>
   </>
  )
}
