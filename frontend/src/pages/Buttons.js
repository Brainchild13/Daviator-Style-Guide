import React from 'react';
import { Link } from 'react-router-dom';

export default function Buttons () {
    return (
        
        <section id="ui-elements" className="row">
            {/* buttons Section */}
                    <div id="buttons-section" className="section-div">
                        <h3 className="element-title">Buttons</h3>
                        <div id="buttons-container">

                            <button className="standard-btn">
                                <Link to="#">Standard</Link>
                            </button>
                            <button className="light-mood-blue-btn">
                                <Link to="#">Easy</Link>
                            </button>
                            <button className="light-mood-green-btn">
                                <Link to="#">Smooth</Link>
                            </button>
                            <button className="start-btn">
                                <Link to="#">Start</Link>
                            </button>
                            <button className="caution-btn">
                                <Link to="#">Caution</Link>
                            </button>
                            <button className="proceed-with-caution-btn">
                                <Link to="#">Cautious</Link>
                            </button>
                            <button className="danger-btn">
                                <Link to="#">Danger</Link>
                            </button>

                        </div>
                    </div>
                    {/* End Buttons Section */}
        </section>
    )
}