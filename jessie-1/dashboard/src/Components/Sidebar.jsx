import React from 'react'
import '../index.css';
import { SidebarData } from './SidebarData';
import Logo from "../images/malolos-logo.png";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';


function Sidebar() {
  return (
    <div className = "Sidebar" > 
    <div className='LogoContainer'  > 
      <img src={Logo} alt='ScholarEase' className ='LogoImage' />
      <h1 className='LogoName'>ScholarEase</h1> 
    </div>
        <ul className='SidebarList'>
            {SidebarData.map((val, key) => {
                return(
                    <li key ={key} 
                    className='page'
                    id = {window.location.pathname === val.link ? "active": "" }
                    onClick={( )=> 
                    {window.location.pathname = val.link} }>
                        <div id='icon'>{val.icon}</div> {" "}
                        <div id='title'>{val.title}</div>
                    </li>

                );
            })}
        </ul>

        
        <div className="SidebarBottomLine"></div>

        <ul className="SidebarBottomList">
        <li className="bottom-list">
          <QuestionAnswerIcon className="bottom-icon" />
           FAQ's 
        </li>
        <li className="bottom-list">
          <FeedbackIcon className="bottom-icon" />
           Feedback 
        </li>
        <li className="bottom-list">
          <LogoutIcon className="bottom-icon" />
           Sign Out 
        </li>
      </ul>
    </div>

  );
}

export default Sidebar
