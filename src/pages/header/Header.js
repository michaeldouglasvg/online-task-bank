import React, { useEffect } from 'react'
import { FaChartBar, FaChartLine, FaDownload, FaRegEdit, FaRegMoon, FaRegStar, FaRegTrashAlt, FaSignOutAlt, FaTasks, FaUserCog, FaUserPlus, FaUsers } from "react-icons/fa";
import { useUserContext } from '../../context/UserContext';
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const {setting, openSettings, selectTodo, selectOption, setNotificationAlerts, notifications } = useUserContext();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='Headermainstyles'>
      <div className="headerfooter">
        <div className="profile">
          <div className="image"><img src="" alt="" srcset="" /></div>
          <div className="text">
            <p>Gtech@23</p>
            <div className="content">
              <FaUserPlus size={18} color='gray' className='Icon'/>
              <FaSignOutAlt size={18} color='gray' className='Icon'/>
            </div>
          </div>
        </div>
        <div className="settings">
          <div className="headerIcons">
            <FaRegStar size={18} color='brown' className='Icon'/>
          </div>
          <div className="headerIcons">
            <FaChartLine size={18} color='grey' className='Icon' onClick={setNotificationAlerts}/>
          </div>
          <div className="headerIcons">
            <FaUserCog size={18} color='grey' className='Icon' onClick={openSettings}/>
          </div>
        </div>
      </div>

      {notifications&&<div className="usercontrols" data-aos="zoom-in" data-aos-offset="0">
        <h3>Analytics</h3>
        <div className="singleSetting">
          <FaTasks size={18} color='gray' className='Icon'/>
          <p>History</p>
        </div>
        <div className="singleSetting">
          <FaChartBar size={18} color='gray' className='Icon'/>
          <p>Analysis</p>
        </div>
        <div className="singleSetting">
          <FaDownload size={18} color='gray' className='Icon'/>
          <p>Reports</p>
        </div>
        <div className="singleSetting">
          <FaUsers size={18} color='gray' className='Icon'/>
          <p>Accounts</p>
        </div>
      </div>}

      {setting&&<div className="usercontrols" data-aos="zoom-in" data-aos-offset="0">
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
  )
}

export default Header
