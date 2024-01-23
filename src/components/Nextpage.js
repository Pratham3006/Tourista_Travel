// Nextpage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Cardrow2 from './Cardrow2';
import data from './Data.json';
import foodSvg from '../images/states/Backgrounds/foodSvg.svg'
import placeSvg from '../images/states/Backgrounds/placeSvg.svg'
import wildlifeSvg from '../images/states/Backgrounds/animalSvg.svg'
import festivalSvg from  '../images/states/Backgrounds/celbSvg.svg'


export default function Nextpage() {
  const { state, option } = useParams();
  const categoryData = data.data[state]?.options || [];

  
  const filteredItems = categoryData.filter(item => item.type.toLowerCase() === option.toLowerCase());

  
  const itemsForHeaders = filteredItems.slice(0, 10);

  
  const cardComponents = [];

  
  for (let i = 0; i < itemsForHeaders.length; i += 2) {
    cardComponents.push(
      <Cardrow2
        key={i}
        header={itemsForHeaders[i]?.title}
        para={itemsForHeaders[i]?.content}
        header1={itemsForHeaders[i + 1]?.title}
        para1={itemsForHeaders[i + 1]?.content}
        image={itemsForHeaders[i]?.image} 
        image1={itemsForHeaders[i + 1]?.image}
      />
    );
  }
  let bg
  let value
  let color
    switch (option.toLowerCase()) {
      case 'food':
        bg=foodSvg;
        value="none";
        color="none"
        break;
      case 'place' :
        bg=placeSvg;
        value="center bottom";
        color="#B3DCFA"
        break;
      case 'wildlife' :
        bg=wildlifeSvg;
        break;
      case 'festivals' :
        bg=festivalSvg;
        break;
    
      default:
        alert("error in loading");
    }

  return (
    <>
      
      
      <div style={{background:`url(${bg})`,backgroundRepeat:"repeat",backgroundSize:"cover",backgroundPosition:`${value}`,backgroundColor:`${color}`}}>
      <div className='nextPageDetails'>
        <h1>Know about {option} in {state}</h1>
        </div>
      {cardComponents}
      </div>
      
     
    </>
  );
}
