import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer () {
    return (
      <footer>
          <ul className="footer-menu">
          <li className="footer-li"><Link to="#">Copyright BrainChild Design </Link></li>
                <li className="footer-li"><Link to="#">Request a feature</Link></li>
                <li className="footer-li"><Link to="#">Help Development</Link></li>
                <li className="footer-li"><Link to="#">Support</Link></li>
          </ul>
      </footer>
      
    )
}