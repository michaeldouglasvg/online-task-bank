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
                    <input type="number" name="task" id="" placeholder='Eg:- +2547****^534'/>
                </div>
                <div className="fonminputs" data-aos="zoom-in" data-aos-offset="0">
                    <span>OTP Verification</span>
                    <input type="text" name="task" id="" placeholder='Eg:- 234567'/>
                </div>
                <div className="fonminputs" data-aos="zoom-in" data-aos-offset="0">
                    <input type="submit" name='submit' value="Verify OTP"/>
                </div>
            </form>
         :<form action="">
            <div className="fonminputs" data-aos="zoom-in" data-aos-offset="0">
                <span>UserName</span>
                <input type="text" name="task" id="" placeholder='Eg:- gtech27....@gmail.com'/>
            </div>
            <div className="fonminputs" data-aos="zoom-in" data-aos-offset="0">
                <span>Password</span>
                <input type="password" name="task" id="" placeholder='Must be atlist 8-characters Long'/>
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
