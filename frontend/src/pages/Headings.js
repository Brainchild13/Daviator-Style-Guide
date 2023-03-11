import React from 'react';

export default function Headings () {
    return (
        <section id="ui-elements" className="row">
            {/* Headings Section */}
                    <div id="headings-section" className="section-div">
                        <h3 className="element-title">Headings</h3>

                        <ul className="element-list headings-list">
                            <li>
                                <h1>h1 Heading</h1>
                            </li>
                            <li>
                                <h2>h2 Heading</h2>
                            </li>
                            <li>
                                <h3>h3 Heading</h3>
                            </li>
                            <li>
                                <h4>h4 Heading</h4>
                            </li>
                            <li>
                                <h5>h5 Heading</h5>
                            </li>
                            <li>
                                <h6>h6 Heading</h6>
                            </li>
                        </ul>

                    </div>
                    {/* End Headings Section */}
        </section>
    )
}