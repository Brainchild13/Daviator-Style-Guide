import React from 'react';
import { Link } from 'react-router-dom'

export default function Introduction () {
    return (
        
                
                <section id="introduction" className="row">
                {/* Introduction Section */}
                    <h2 className="section-title">Introduction</h2>
                    <h4 className="sub-info">Subheading content</h4>
                    <div className="software-list-container">
                        <ul className="software-list">
                            <li><Link to="#">HTML</Link></li>
                            <li><Link to="#">CSS</Link></li>
                            <li><Link to="#">Javascript</Link></li>
                        </ul>
                    </div>
                </section>
    )
}