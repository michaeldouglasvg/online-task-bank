import React, { useState, useEffect } from 'react'
import { FaChevronDown, FaRegClock, FaRegEdit, FaRegStar, FaRegTrashAlt } from 'react-icons/fa';
// import { GrFormPin } from 'react-icons/gr';
import AOS from "aos";
import "aos/dist/aos.css";
import { useUserContext } from '../../context/UserContext';

const SingleTask = () => {
  const [content, setContent] = useState(false);
  const {selectOption } = useUserContext();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <div className='SingleTask' style={{outline: content?"1px solid rgb(185, 185, 185)":""}} data-aos="zoom-in" data-aos-offset="0">
      <div className="header">
        <div className="left">
          <div className="checkbox" onClick={() => setContent(!content)}>
            <FaChevronDown size={15} color='gray' className='actions-icon' style={{transform: !content?"rotate(0deg)": "rotate(-180deg)"}}/>
          </div>
          {selectOption && <input type="checkbox" name="checkbox" id="" style={{margin: "0 .4rem 0 .4rem"}} data-aos="zoom-in" data-aos-offset="0"/>}
          <FaRegClock size={15} color='gray' className='actions-icon' style={{margin: "0 .4rem 0 .4rem"}}/>
          <div className="heading" onClick={() => setContent(!content)}>
            <h3>Swimming...</h3>
          </div>
        </div>
        <div className="right">
          <div className="actions" data-aos="zoom-in" data-aos-offset="0">
            <FaRegStar size={15} color='gray' className='actions-icon'/>
            <FaRegTrashAlt size={15} color='gray' className='actions-icon'/>
            <FaRegEdit size={15} color='gray' className='actions-icon'/>
            {/* <GrFormPin size={20} color='gray' className='actions-icon'/> */}
          </div>
          <div className="time">
            <p>Mar 2</p>
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
