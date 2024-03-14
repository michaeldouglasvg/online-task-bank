import React from 'react'
import { FaCog, FaEdit, FaMoon, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className='Headermainstyles'>
      <div className="maintop">
        <h1>My&nbsp;Online&nbsp;Memo</h1>
      </div>
      <div className="headerfooter">
        <div className="profile">
          <div className="image"><img src="" alt="" srcset="" /></div>
          <div className="text">
            <p>Gtech@23</p>
            <div className="content">
              <FaSignOutAlt size={18} color='gray' className='Icon'/>
              <FaEdit size={18} color='gray' className='Icon'/>
            </div>
          </div>
        </div>
        <div className="settings">
          <FaCog size={18} color='grey' className='Icon'/>
          <FaMoon size={18} color='grey' className='Icon'/>
        </div>
      </div>
    </div>
  )
}

export default Header
