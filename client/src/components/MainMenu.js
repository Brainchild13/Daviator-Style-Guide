import React from 'react';
import { Link } from 'react-router-dom';

export default function MainMenu () {
    return (
        <ul className="main-menu">
            <li className="main-menu-li"><link className="active-button" to="/get-started">Get Started</link></li>
            <li className="main-menu-li"><Link to="/docs">Docs</Link></li>

            <li className="main-menu-li"><Link to="/About">About</Link></li>
            <li className="main-menu-li"><Link to="/in-action">See it in Action</Link></li>
            <li className="main-menu-li"><Link to="/git-report">Git Repo</Link></li>
            <li className="main-menu-li"></li>
           
           {/* Dark Mode Switch */}
           <div className="switch">
               <div className="flicker"></div>
               <div className="sun"></div>
               <div className="moon"></div>
           </div>
               {/* End of Main Menu */}

       </ul>
    )
}