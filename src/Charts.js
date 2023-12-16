import React from 'react'
import userData from './csv.json'
import { useState } from 'react';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import './Charts.css'
import cover from './images/states/Svgs/initial.svg'
import goa from './images/states/Svgs/beach.svg'
import Himachal from './images/states/Svgs/cold.svg'
import Meghalaya from './images/states/Svgs/cold2.svg'
import Kerala from './images/states/Svgs/kerala.svg'
import Rajasthan from './images/states/Svgs/desert.svg'
import UP from './images/states/Svgs/UP.svg'
import MH from './images/states/Svgs/MH.svg'
import TN from './images/states/Svgs/TN.svg'
import sikkim from './images/states/Svgs/sikkim.svg'
import MP from './images/states/Svgs/MP.svg'

export default function () {
    const states = [
        "Maharashtra", "Goa", "Rajasthan", "Tamil Nadu", "Kerala", "Sikkim", "Meghalaya",
        "Himachal Pradesh", "Uttar Pradesh", "Madhya Pradesh"
    ];
    const places = {
        "Maharashtra": ["Gateway of India", "Ajanta and Ellora Caves", "Elephanta Caves", "Shirdi Sai Baba", "Lonavla-Khandala", "Mahbaleshwar", "Matheran", "Tadoba Andhari Tiger Reserve", "Ajanta", "Kolhapur"],
        "Goa": ["Baga Beach", "Calangute Beach", "Old Goa", "Dudhsagar Falls", "Fort Aguada", "Anjuna Flea Market", "Palolem Beach", "Chapora Fort", "Dudhsagar Spice Plantations", "Dona Paula"],
        "Rajasthan": ["Jaipur", "Udaipur", "Jaisalmer", "Jodhpur", "Pushkar", "Ajmer", "Ranthambore National Park", "Chittorgarh Fort", "Mount Abu", "Bikaner"],
        "Tamil Nadu": ["Chennai", "Mahabalipuram", "Madurai", "Kodaikanal", "Ooty", "Thanjavur", "Rameshwaram", "Kanyakumari", "Coimbatore", "Pondicherry"],
        "Kerala": ["Alleppey", "Munnar", "Kochi (Cochin)", "Wayanad", "Thekkady", "Kumarakom", "Kovalam", "Varkala", "Athirappilly", "Thrissur"],
        "Sikkim": ["Gangtok", "Tsomgo Lake", "Nathula Pass", "Pelling", "Yuksom", "Zuluk", "Lachung and Lachen", "Ravangla", "Gurudongmar Lake", "Namchi"],
        "Meghalaya": ["Shillong", "Cherrapunji", "Mawlynnong", "Dawki", "Nongkhnum", "Mawsynram", "Nohsngithiang Falls", "Balpakram National Park", "Laithlum Canyons", "Nongpoh"],
        "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala and McLeod Ganj", "Spiti Valley", "Dalhousie", "Kullu", "Kasol", "Kinnaur", "Chamba", "Palampur"],
        "Uttar Pradesh": ["Agra", "Varanasi", "Lucknow", "Allahabad", "Mathura and Vrindavan", "Ayodhya", "Sarnath", "Jhansi", "Dudhwa National Park", "Chitrakoot"],
        "Madhya Pradesh": ["Khajuraho", "Bhopal", "Gwalior", "Indore", "Mandu", "Ujjain", "Sanchi", "Jabalpur", "Pachmarhi", "Orchha"]
    };
    let bg = cover
    let size
    let pos = 'center'
    if (bg === cover) {
        size = 'contain'
    }



    const [selectedState, setSelectedState] = useState("");
    const [selectedPlace, setSelectedPlace] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedPlace(""); // Reset selected place when the state changes
        setFilteredData([]);

    };

    if (selectedState === 'Goa') {
        bg = goa;
        size = 'cover';

    } else if (selectedState === 'Himachal Pradesh') {
        bg = Himachal;
        size = 'cover';
    } else if (selectedState === 'Meghalaya') {
        bg = Meghalaya;
        size = 'cover';
    } else if (selectedState === 'Kerala') {
        bg = Kerala;
        size = 'cover';
    } else if (selectedState === 'Rajasthan') {
        bg = Rajasthan;
        size = 'cover';
        pos = 'bottom-left';
    } else if (selectedState === 'Uttar Pradesh') {
        bg = UP;
        size = 'cover';
    } else if (selectedState === 'Maharashtra') {
        bg = MH;
        size = 'cover';
    }
    else if (selectedState === 'Tamil Nadu') {
        bg = TN;
        size = 'contain';

    }
    else if (selectedState === 'Madhya Pradesh') {
        bg = MP;
        size = 'cover';

    }
    else if (selectedState === 'Sikkim') {
        bg = sikkim;
        size = 'cover';

    }


    const handlePlaceChange = (e) => {
        setSelectedPlace(e.target.value);
        const filtered = userData.data.filter(item => item.State === selectedState && item.Place === e.target.value);
        setFilteredData(filtered);
    };

    return (
        <>
            <div className="navbar-chart">

            </div>
            <div className="chart" style={{ backgroundImage: `url(${bg})`, backgroundSize: `${size}`, backgroundPosition: `${pos}` }}>
                <div className="chartcontainer">
                    <div className="header">
                        <h1 className='edit'>Tourism data from 2018-2023</h1>
                    </div>
                    <div className="content">
                        <div>
                            <label>Select State:</label>
                            <select value={selectedState} onChange={handleStateChange}>
                                <option value="">-- Select State --</option>
                                {states.map(state => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </select>
                        </div>
                        {selectedState && (
                            <div>
                                <label>Select Place:</label>
                                <select value={selectedPlace} onChange={handlePlaceChange}>
                                    <option value="">-- Select Place --</option>
                                    {places[selectedState].map(place => (
                                        <option key={place} value={place}>{place}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                        {filteredData.length > 0 && (
                            <div className="chart-container">
                                <ResponsiveContainer>
                                    <BarChart data={filteredData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="Year" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="Population" fill="#8884d8" barSize={30} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}
