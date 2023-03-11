import React from 'react';
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        // Sidebar
        // End of Sidebar
        <div className="sidebar sidebar-hamburger">
        <h2 className="sidebar-subtitle">Style Elements</h2>

        {/* Sidebar Menu */}
        <ul className="sidebar-menu">
            <li className="sidebar-li"><Link to="/">Getting Started</Link></li>
            <li className="sidebar-li"><Link to="/">UI Elements</Link>
                <ul className="sidebar-submenu">
                    <li className="sidebar-sublist-li"><Link to="/headings">Headings</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/buttons">Buttons</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/images">Images</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/tables">Tables</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/forms">Forms</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/colors">Colors</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/cards">Cards</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/html-general">Html General</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/body">Body</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/containers">Containers</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/navigation">Navigation</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/logo">Logo</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/content">Content</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/icons">Icons</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/hero">Hero</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/links">Links</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/sections">Sections</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/rows">Rows</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/lists">lists</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/products">Products</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/posts">Posts</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/profile-imgs">Profile-imgs</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/footers">Footers</Link></li>
                    <li className="sidebar-sublist-li"><Link to={"/videos"}>Videos</Link></li>
                    <li className="sidebar-sublist-li"><Link to={'/popups'}>Popups</Link></li>
                </ul>
            </li>

        </ul>
    </div>
    );
}