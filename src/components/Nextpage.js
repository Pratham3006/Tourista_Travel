// Nextpage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Cardrow2 from './Cardrow2';
import data from './Data.json'; // Import your data file
import foodSvg from 'D:/tourism/tour/src/images/states/Backgrounds/foodSvg.svg'
import placeSvg from 'D:/tourism/tour/src/images/states/Backgrounds/placeSvg.svg'
import wildlifeSvg from 'D:/tourism/tour/src/images/states/Backgrounds/animalSvg.svg'
import festivalSvg from  'D:/tourism/tour/src/images/states/Backgrounds/celbSvg.svg'
import image from 'D:/tourism/tour/src/images/states/Goa/Food/food-1.jpeg'

export default function Nextpage() {
  const { state, option } = useParams();
  const categoryData = data.data[state]?.options || [];

  // Filter items based on the selected option
  const filteredItems = categoryData.filter(item => item.type.toLowerCase() === option.toLowerCase());

  // Use the first 10 items from the filtered options array
  const itemsForHeaders = filteredItems.slice(0, 10);

  // Create an array to store Cardrow2 components
  const cardComponents = [];

  // Loop through the items and create Cardrow2 components dynamically
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
