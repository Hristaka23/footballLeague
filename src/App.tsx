import React, {useState, useEffect} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import styles from '../src/assets/css/App.module.css'
import Home from '../src/pages/Home'
import Standings from '../src/pages/Standings'
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/react"

function App() {

    return (
        <>
            <Analytics/>
            <SpeedInsights/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/teams" element={<Standings/>}/>
                    <Route path="/admin" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App