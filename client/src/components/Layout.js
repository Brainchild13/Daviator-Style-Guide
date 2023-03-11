import React from 'react';
import MainNav from './MainNav';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom'
import FooterNav from './FooterNav'

export default function Layout() {
    return (
        <>
            <MainNav />

            <div className="content-wrapper">
                <Sidebar />
                <div className="main-content">
                    <Outlet />
                </div>
                
                <FooterNav />
            </div>
        </>
    )
    
}