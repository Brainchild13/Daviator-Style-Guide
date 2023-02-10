import React from 'react';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header class="nav-container">
            <div class="logo-container">
                <img src="/Daviator-Style-Guide/images/content-images/Qnext-SZ-icon.png" alt="" class="logo"/>
                <h1 class="home-title">BrainChild Style Guide</h1>
            </div>
            <ul class="main-menu">
                <li class="main-menu-li">
                <Link to="/get-started" className="active-button">Get Started</Link>
                </li>
                <li class="main-menu-li">
                <Link to="/docs">Docs</Link>
                </li>

                <li class="main-menu-li">
                <Link to="/about">About</Link>
                </li>

                <li class="main-menu-li">
                <Link to="/in-action">See it in Action</Link>
                </li>

                <li class="main-menu-li">
                <Link to="/git-repo">Git Repo</Link>
                </li>

                <li class="main-menu-li">
                
                        <input type="button" value="dark-mode" id="dark-mode" class="light" />
                        <label class="switch btn-toggle">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                        </label>
                        </li>
            </ul>
        </header>
    )
}