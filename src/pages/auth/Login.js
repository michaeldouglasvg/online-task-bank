import React, { useEffect, useState } from 'react'
import LoginForm from '../forms/LoginForm'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
    const [phone, setPhone] = useState(false);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

  return (
    <div className='MainLoginStyles'>
      <div className="heading">
        <h1>My Task Cloud</h1><br />
        <h2>Login To Continue</h2>
      </div>
      <div className="loginoptions">
        <div className="navigator">
            <h3>Method:</h3>
            <button onClick={() => setPhone(false)}>Use Email</button>
            <button onClick={() => setPhone(true)}>Use Number</button>
        </div>
        <LoginForm phone={phone}/>
      </div>
      <div className="alternatives">
        <span>OR</span>
        <div className="forns">
            <div className="provider">
                <button>
                    <FaGoogle size={15} color='orangered' data-aos="zoom-in" data-aos-offset="0"/>
                    <p>Continue with Google</p>
                </button>
                <button>
                    <FaFacebook size={15} color='skyblue' data-aos="zoom-in" data-aos-offset="0"/>
                    <p>Continue with Facebook</p>
                </button>
            </div>
        </div>
      </div>

      <div className="loginFooter">
        <p>&copy;2024Gtech</p>
        <div className="policies">
            <p>Policies</p>
            <p>Terms</p>
            <p>Privacy</p>
        </div>
      </div>
    </div>
  )
}

export default Login
