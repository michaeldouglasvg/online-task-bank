import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const LoginForm = ({ phone }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

  return (
    <div className='LoginForm'>
         {phone?
            <form action="">
                <div className="fonminputs" data-aos="zoom-in" data-aos-offset="0">
                    <span>Phone Number</span>
                    <input type="number" name="task" id="" placeholder='Enter Phone Number'/>
                </div>
                <div className="fonminputs" data-aos="zoom-in" data-aos-offset="0">
                    <span>OTP Verification</span>
                    <input type="text" name="task" id="" placeholder='Enter OTP Code'/>
                </div>
                <div className="fonminputs" data-aos="zoom-in" data-aos-offset="0">
                    <input type="submit" name='submit' value="Verify OTP"/>
                </div>
            </form>
         :<form action="">
            <div className="fonminputs" data-aos="zoom-in" data-aos-offset="0">
                <span>UserName</span>
                <input type="text" name="task" id="" placeholder='Enter email'/>
            </div>
            <div className="fonminputs" data-aos="zoom-in" data-aos-offset="0">
                <span>Password</span>
                <input type="password" name="task" id="" placeholder='Enter password'/>
            </div>
            <div className="fonminputs" data-aos="zoom-in" data-aos-offset="0">
                <input type="submit" name='submit' value="Login"/>
            </div>
        </form>
        }
    </div>
  )
}

export default LoginForm
