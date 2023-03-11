import React from 'react';

export default function Fonts () {
    return (
        <section id="ui-elements" className="row">
               {/* Font Size Section */}
                    <div id="font-size-section" className="section-div">
                        <h3 className="element-title">Fonts</h3>
                        <div id="fonts-container">
                            <div className="font-size-container">
                                <p style={{ fontSize: "var(--font-36)" }}>Font Size 36</p>
                                <p style={{ fontSize: "var(--font-26)" }}>Font Size 26</p>
                                <p style={{ fontSize: "var(--font-24)" }}>Font Size 24</p>
                                <p style={{ fontSize: "var(--font-22)" }}>Font Size 22</p>
                                <p style={{ fontSize: "var(--font-18)" }}>Font Size 18</p>
                                <p style={{ fontSize: "var(--font-14)" }}>Font Size 14</p>
                                <p style={{ fontSize: "var(--font-12)" }}>Font Size 12</p>
                                <p style={{ fontSize: "var(--font-10)" }}>Font Size 10</p>
                            </div>
                        </div>
                    </div>
                    {/* End Font Size Section */}
        </section>
    )
}