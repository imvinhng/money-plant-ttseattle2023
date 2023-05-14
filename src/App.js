import React from 'react';
import Navbar from './components/utilities/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Goals from './components/pages/Goals';
import Bills from './components/pages/Bills';
import Progress from './components/pages/Progress';
import Store from './components/pages/Store';
import SignUp from './components/pages/SignUp';
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
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
