import React, { useState, useEffect } from 'react'
import { FaChevronCircleDown, FaClock, FaStar, FaTrash } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

const SingleTask = () => {
  const [content, setContent] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <div className='SingleTask' style={{outline: content?"1px solid rgb(185, 185, 185)":""}} data-aos="zoom-in" data-aos-offset="0">
      <div className="header" onClick={() => setContent(!content)}>
        <div className="left">
          <div className="checkbox">
            {content?<input type="checkbox" name="checkbox" id="" />:<FaChevronCircleDown size={15} color='gray' className='actions-icon'/>}
          </div>
          <div className="heading">
            <h3>Swimming...</h3>
          </div>
        </div>
        <div className="right">
          <div className="actions">
            <FaStar size={15} color='gray' className='actions-icon'/>
            <FaTrash size={15} color='gray' className='actions-icon'/>
            <FaClock size={15} color='gray' className='actions-icon'/>
          </div>
          <div className="time">
            <p>2, Jun 23</p>
          </div>
       </div>
      </div>
     {content && <div className="content" data-aos="zoom-in" data-aos-offset="0">
        <p data-aos="zoom-in" data-aos-offset="0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque vel modi vitae soluta expedita corporis molestiae minus, incidunt temporibus sed accusamus, natus similique sequi dignissimos ad sint quidem dolorem.</p>
      </div>}
    </div>
  )
}

export default SingleTask;
