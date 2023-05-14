import React, { useState } from "react";
// import logo from '../../logo.svg';
import { Login } from "../utilities/register/Login";
import { RegisterConst } from "../utilities/register/RegisterConst";
import Footer from "../utilities/extras/Footer";
//css
import '../../App.css';
import '../utilities/register/Register.css';

function Register() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div>
      <h1 className='register'>JOIN THE WEALTH CLUB</h1>
      <div className="register-div">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <RegisterConst onFormSwitch={toggleForm} />
        }
      </div>
      <Footer />     
    </div>
  );
}

export default Register;

