import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        
        <div className="sidebar sidebar-hamburger">
                {/* <!-- Sidebar --> */}

        <h2 className="sidebar-subtitle">Style Elements</h2>

        {/* <!-- Sidebar Menu --> */}
        <ul className="sidebar-menu">
            <li className="sidebar-li"><Link to="/introduction">Introduction</Link></li>
            <li className="sidebar-li"><Link to="/get-started">Getting Started</Link></li>
            <li className="sidebar-li">
                <Link to="#">UI Elements</Link>
                <ul className="sidebar-submenu">
                    <li className="sidebar-sublist-li"><Link to="/headings">Headings</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/buttons">Buttons</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/fonts">Fonts</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/colors">Colors</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/cards">Cards</Link></li>

                    <li className="sidebar-sublist-li"><Link to="/images">Images</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/tables">Tables</Link></li>
                    <li className="sidebar-sublist-li"><Link to="/forms">Forms</Link></li>
                    <li className="sidebar-sublist-li"><Link to="#color-divs">color-section</Link></li>
                    <li className="sidebar-sublist-li"><Link to="#">Html General</Link></li>
                    <li className="sidebar-sublist-li"><Link to="#">Body</Link></li>
                    <li className="sidebar-sublist-li"><Link to="#">Containers</Link></li>
                    <li className="sidebar-sublist-li"><Link to="#">Navigation</Link></li>
                    <li className="sidebar-sublist-li"><Link to="#">Logo</Link></li>


                    <li className="sidebar-sublist-li"><Link to="#">Content</Link></li>
                    <li className="sidebar-sublist-li"><Link to="#">Icons</Link></li>
                    <li className="sidebar-sublist-li"><Link to="#">Hero</Link></li>
                    <li className="sidebar-sublist-li"><Link to="#">Links</Link></li>
                    <li className="sidebar-sublist-li"><Link to="#">Sections</Link></li>
                    <li className="sidebar-sublist-li"><Link to="#">Rows</Link></li>
                    <li className="sidebar-sublist-li"><Link to="#">lists</Link></li>
                    <li className="sidebar-sublist-li"><Link to="#">Products</Link></li>
                    <li className="sidebar-sublist-li"><Link to="#">Posts</Link></li>
                    <li className="sidebar-sublist-li"><Link to="#">profile-img</Link></li>
                    <li className="sidebar-sublist-li"><Link to="#">Footer</Link></li>
                    <li className="sidebar-sublist-li"><Link to="#">Video</Link></li>
                    <li className="sidebar-sublist-li"><Link to="#">Popups</Link></li>
                </ul>
            </li>

        </ul>
        {/* <!-- End of Sidebar  --> */}
    </div>
   
    )
}