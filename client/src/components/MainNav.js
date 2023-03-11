import React from 'react';
// import { Link } from 'react-router-dom';
import LogoContainer from './LogoContainer';
import MainMenu from './MainMenu';

export default function MainNav() {
    return (
        
        <header className="nav-container">
            <LogoContainer />
            <MainMenu />
        </header>
        
    )
}