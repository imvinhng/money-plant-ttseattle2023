//react origin
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//components
import Home from './components/pages/Home';
import Goals from './components/pages/Goals';
import Bills from './components/pages/Bills';
import Progress from './components/pages/Progress';
import Store from './components/pages/Store';
import Register from './components/pages/Register';
import Navbar from './components/utilities/extras/Navbar';
//css
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Bills' element={<Bills/>} />
          <Route path='/Goals' element={<Goals/>} />
          <Route path='/Progress' element={<Progress/>} />
          <Route path='/Store' element={<Store/>} />
          <Route path='/Register' element={<Register/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
