import React from 'react'
import { FaRegEdit, FaRegMoon, FaRegStar, FaRegTrashAlt, FaSignOutAlt, FaUserCog } from "react-icons/fa";
import { useUserContext } from '../../context/UserContext';

const Header = () => {
  const {setting, openSettings, selectTodo, selectOption } = useUserContext();

  return (
    <div className='Headermainstyles'>
      <div className="headerfooter">
        <div className="profile">
          <div className="image"><img src="" alt="" srcset="" /></div>
          <div className="text">
            <p>Gtech@23</p>
            <div className="content">
              <FaSignOutAlt size={18} color='gray' className='Icon'/>
            </div>
          </div>
        </div>
        <div className="settings">
          <div className="headerIcons">
            <FaRegStar size={18} color='brown' className='Icon'/>
          </div>
          <div className="headerIcons">
            <FaUserCog size={18} color='grey' className='Icon' onClick={openSettings}/>
            {setting&&<div className="usercontrols">
              <h3>User Settings</h3>
              <div className="singleSetting">
                <FaRegEdit size={18} color='gray' className='Icon'/>
                <p>Edit Profile</p>
              </div>
              <div className="singleSetting" onClick={selectTodo}>
                <FaRegTrashAlt size={18} color='gray' className='Icon'/>
                <p>{selectOption?"Disable":"Delete"} Multple</p>
              </div>
              <div className="singleSetting">
                <FaRegMoon size={18} color='gray' className='Icon'/>
                <p>Dark Theme</p>
              </div>
              <div className="singleSetting">
                <FaSignOutAlt size={18} color='gray' className='Icon'/>
                <p>Logout</p>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
