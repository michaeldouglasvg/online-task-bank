import React from 'react'
import { FaCog, FaEdit, FaMoon, FaSignOutAlt, FaStar } from "react-icons/fa";

const Header = () => {
  return (
    <div className='Headermainstyles'>
      <div className="headerfooter">
        <div className="profile">
          <div className="image"><img src="" alt="" srcset="" /></div>
          <div className="text">
            <p>Gtech@23</p>
            <div className="content">
              <FaEdit size={18} color='gray' className='Icon'/>
              <FaSignOutAlt size={18} color='gray' className='Icon'/>
            </div>
          </div>
        </div>
        <div className="settings">
          <FaStar size={18} color='brown' className='Icon'/>
          <FaCog size={18} color='grey' className='Icon'/>
          <FaMoon size={18} color='grey' className='Icon'/>
        </div>
      </div>
    </div>
  )
}

export default Header
