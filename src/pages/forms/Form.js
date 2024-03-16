import React, { useState, useEffect } from 'react'
import { FaChevronCircleDown, FaPlus, FaRegBell, FaRegSave } from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";

const Form = () => {
    const [reminder, setReminder] = useState(false);
    const [form, setForm] = useState(false);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

  return (
    <div className='MainForm' data-aos="zoom-in" data-aos-offset="0">
       <div className="heading" data-aos="zoom-in" data-aos-offset="0">
            <button onClick={() => setForm(!form)}>
                <FaPlus size={15} color='blue' />
                <p>Write</p>
            </button>
           {form && <div className="reminder" data-aos="zoom-in" data-aos-offset="0">
                <FaRegSave size={15} color='black' className='Icons'/>
                <FaRegBell size={15} color='orangered' className='Icons' onClick={() => setReminder(!reminder)}/>
            </div>}
        </div>
      {form && 
        <div className="formfields">
            <form action="">
                <div className="fonminputs" data-aos="zoom-in" data-aos-offset="0">
                    <span>Title</span>
                    <input type="text" name="task" id="" placeholder='Enter the title here'/>
                </div>
                <div className="fonminputs" data-aos="zoom-in" data-aos-offset="0">
                    <span>Message</span>
                    <input type="text" name="task" id="" placeholder='Enter the Message'/>
                </div>
                {reminder && 
                    <>
                        <div className="fonminputs" data-aos="zoom-in" data-aos-offset="0">
                            <span>Select Date</span>
                            <input type="date" name="task" id=""/>
                        </div>
                        <div className="fonminputs" data-aos="zoom-in" data-aos-offset="0">
                            <span>Select Time</span>
                            <input type="time" name="task" id=""/>
                        </div>
                    </>
                }
            </form>
        </div>
        }
      <div className="dropdown" onClick={() => setForm(!form)}>
        <FaChevronCircleDown size={18} color='gray' style={{transform: form?"rotate(-180deg)":"rotate(0deg)", transition: "all 500ms"}} />
      </div>
    </div>
  )
}

export default Form
