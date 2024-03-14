import React, { useState } from 'react'
import { FaChevronCircleDown, FaClock, FaPlus, FaSave } from 'react-icons/fa'

const Form = () => {
    const [reminder, setReminder] = useState(false);
    const [form, setForm] = useState(false);

  return (
    <div className='MainForm'>
       <div className="heading">
            <button onClick={() => setForm(!form)}>
                <FaPlus size={15} color='blue' />
                <p>Write</p>
            </button>
           {form && <div className="reminder">
                <FaSave size={15} color='black' className='Icons'/>
                <FaClock size={15} color='orangered' className='Icons' onClick={() => setReminder(!reminder)}/>
            </div>}
        </div>
      {form && 
        <div className="formfields">
            <form action="">
                <div className="fonminputs">
                    <span>Title</span>
                    <input type="text" name="task" id="" placeholder='Enter the title here'/>
                </div>
                <div className="fonminputs">
                    <span>Message</span>
                    <input type="text" name="task" id="" placeholder='Enter the Message'/>
                </div>
                {reminder && 
                    <>
                        <div className="fonminputs">
                            <span>Select Date</span>
                            <input type="date" name="task" id=""/>
                        </div>
                        <div className="fonminputs">
                            <span>Pick Time</span>
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
