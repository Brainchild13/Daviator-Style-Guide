import React from 'react';
const logo = require('../images/content-images/Qnext-SZ-icon.png')

export default function Header() {
    return (
    
        <header className="nav-container">
            {/* Nav-container
            Logo Container  */}
            <div className="logo-container">
                <img src={logo} alt="" className="logo" />
                <h1 className="home-title">BrainChild Style Guide</h1>
            </div>
            {/* End Logo Container 

            Main Menu  */}
            <ul className="main-menu">
                <li className="main-menu-li"><a className="active-button" href="/get-started">Get Started</a></li>
                <li className="main-menu-li"><a href="/docs">Docs</a></li>

                <li className="main-menu-li"><a href="/About">About</a></li>
                <li className="main-menu-li"><a href="/in-action">See it in Action</a></li>
                <li className="main-menu-li"><a href="/git-report">Git Repo</a></li>
                <li className="main-menu-li"></li>
                <li className="main-menu-li">
                    {/* TODO: Add something here or erase it  */}
                </li>
                {/* Dark Mode Switch  */}
                <div className="switch">
                    <div className="flicker"></div>
                    <div className="sun"></div>
                    <div className="moon"></div>
                </div>

            </ul>
            {/* End of Main Menu  */}
        </header>
        // End Nav-container 
    )
}