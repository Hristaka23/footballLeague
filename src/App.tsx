import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from '../src/assets/css/App.module.css'
import Home from '../src/pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
