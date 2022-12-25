import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from 'react';
import Home from "./components/Home/Home";
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
          <Home />
        <Routes>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
