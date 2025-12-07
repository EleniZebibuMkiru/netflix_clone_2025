import React from 'react'
import "./header.css"
import Netflexlogo from "../../assets/images/NetflixLogo.png"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';




export default function header() {
  return (
   <div className='header_outer_container'>
      <div className='header_container'>
        <div className='header_left'>
            <ul>
               <li><img src={Netflexlogo} alt='netflex log' width ="100"/> </li>
                <li>netflex</li>
                <li>home</li>
                <li>TVShows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>MyList</li>
                <li>Browse by language</li>
              
            </ul>
        </div>
        <div className='headSer_right'>
            <ul>
               <li><SearchIcon/></li>
             
                 <li><NotificationsNoneIcon /></li>
                   
                  <li><AccountBoxIcon/></li>
                   <li><ArrowDropDownIcon/></li>
            </ul>
        </div>
     </div>
    </div>
  )
}
