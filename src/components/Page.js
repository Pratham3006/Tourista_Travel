import React from 'react'
import { useParams } from 'react-router-dom'
import Cardrow1 from './Cardrow1';
import food from 'D:/tourism/tour/src/images/states/Backgrounds/food'
import place from 'D:/tourism/tour/src/images/states/Backgrounds/place'
import animal from 'D:/tourism/tour/src/images/states/Backgrounds/animal'
import festival from 'D:/tourism/tour/src/images/states/Backgrounds/festival'




export default function Page() {
  const states = ['Goa', 'Maharashtra', 'Kerala', 'Rajasthan', 'Tamilnadu', 'Sikkim', 'Meghalaya', 'Himachal Pradesh', 'Uttar Pradesh', 'Madhya Pradesh'];
 const {state}=useParams();
  return (
    <div>
      <div>
        <div>
          <div>
            
            <div className='page1bg'>
            <center><h5>Select the details you want to know about {state} </h5></center>
            <Cardrow1 option={"Food"} para={`Know about some of the tastiest dishes out there in ${state}`} image={food}  option1={"Place"} para1={`Explore some of the well known places in ${state}`} image1={place} />
            <Cardrow1 option={"Wildlife"}  para={`Visit and discover animal habitat in ${state}`} image={animal} option1={"Festivals"} para1={`Enjoy some of the most well known festivals in ${state} `} image1={festival} />
            </div>




          </div>
        </div>

      </div>
    </div>
  )
}
