import logo from './images/logo.png'
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { ReactDOM } from 'react';
import HomeScreen from './HomeScreen';
import Navigation from './Navigation';
import Page from './components/Page';
import Nextpage from './components/Nextpage';
import Charts from './Charts';
import Weather from './Weather';







function App() {
    const states = ['Goa', 'Maharashtra', 'Kerala', 'Rajasthan', 'Tamilnadu', 'Sikkim', 'Meghalaya', 'Himachal Pradesh', 'Uttar Pradesh', 'Madhya Pradesh'];
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomeScreen />} />
                    <Route path='/navigation' element={<Navigation />} />
                    <Route path='/page' element={<Page />} />
                    <Route path='/page/:state' element={<Page />} />
                    <Route path='/page/:state/:option' element={<Nextpage />} />
                    <Route path='/Charts' element={<Charts />} />
                    <Route path='/Weather' element={<Weather />} />
                </Routes>
            </BrowserRouter>
          



        </div>

    );
}

export default App;
