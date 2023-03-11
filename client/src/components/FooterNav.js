import React from 'react';
import { Link } from 'react-router-dom';

function getYear() {
    let d = new Date();
    let year = d.getFullYear();
    return year;
}

getYear()

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="footer-menu">
                <li className="footer-li">
                    <Link to="https://davidschwartz.biz">David Schwartz - Full Stack Engineer - MERN Stack</Link>
                </li>
                <li className="footer-li">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="footer-li">
                    <Link to="https:thebrainchilddesign.com">The BrainChild Design</Link>
                </li>
                <li className="footer-li">
                    <Link to="https://brainchildhosting.com">BrainChild Hosting</Link>
                </li>
                <li className="footer-li">
                    <Link to="/copyright">The BrainChild Design Copyright </Link>
                </li>
                <li className="footer-li">
                    <Link to="/request-a-feature">Request a Feature</Link>
                </li>
                <li className="footer-li">
                    <Link to="/help-with-development">Help with Development</Link>
                </li>
                <li className="footer-li">
                    <Link to="/Support">Support</Link>
                </li>
            </ul>
        </footer>
    )
}

