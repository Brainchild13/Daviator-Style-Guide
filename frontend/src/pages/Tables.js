import React from 'react';
import { Link } from 'react-router-dom';

export default function Tables () {
    return (
        <section id="cards" className="row">
            
             {/* Tables Section  */}
                    <div id="table-section" className="section-div">
                        <h3 className="element-title">Tables</h3>
                        <div id="tables-container">
                        <h3 className="image-type-title">Basic User Table</h3>
                            <table>
                                
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Website</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>

                                <tr>
                                    <td>David</td>
                                    <td>Schwartz</td>
                                    <td><Link to="mailto:david@david.com" target="_blank">david@david.com</Link></td>
                                    <td><Link to="tel:+310-555-5555">310-555-5555</Link></td>
                                    <td><Link to="http://www.thebrainchilddesign.com">www.thebrainchilddesign.com</Link>
                                    </td>
                                    <td><button className="light-mood-blue-btn">Edit</button></td>
                                    <td><button className="danger-btn">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>John</td>
                                    <td>Smith</td>
                                    <td><Link to="mailto:jon@johnja.com" target="_blank">jon@johnja.com</Link></td>
                                    <td><Link to="tel:+333-333-3333">333-333-3333</Link></td>
                                    <td><Link to="http://www.jj.com">www.jj.com</Link></td>
                                    <td><button className="light-mood-blue-btn">Edit</button></td>
                                    <td><button className="danger-btn">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Mark</td>
                                    <td>Henry</td>
                                    <td><Link to="mailto:markeymarkles@mark.com">markeymarkles@mark.com</Link></td>
                                    <td><Link to="tel:+555-555-5555">555-555-5555</Link></td>
                                    <td><Link to="http://www.marksman.com">www.marksman.com</Link></td>
                                    <td><button className="light-mood-blue-btn">Edit</button></td>
                                    <td><button className="danger-btn">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>David</td>
                                    <td>Schwartz</td>
                                    <td><Link to="mailto:david@david.com" target="_blank">david@david.com</Link></td>
                                    <td><Link to="tel:+310-555-5555">310-555-5555</Link></td>
                                    <td><Link to="http://www.thebrainchilddesign.com">www.thebrainchilddesign.com</Link>
                                    </td>
                                    <td><button className="light-mood-blue-btn">Edit</button></td>
                                    <td><button className="danger-btn">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>John</td>
                                    <td>Smith</td>
                                    <td><Link to="mailto:jon@johnja.com" target="_blank">jon@johnja.com</Link></td>
                                    <td><Link to="tel:+333-333-3333">333-333-3333</Link></td>
                                    <td><Link to="http://www.jj.com">www.jj.com</Link></td>
                                    <td><button className="light-mood-blue-btn">Edit</button></td>
                                    <td><button className="danger-btn">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Mark</td>
                                    <td>Henry</td>
                                    <td><Link to="mailto:markeymarkles@mark.com">markeymarkles@mark.com</Link></td>
                                    <td><Link to="tel:+555-555-5555">555-555-5555</Link></td>
                                    <td><Link to="http://www.marksman.com">www.marksman.com</Link></td>
                                    <td><button className="light-mood-blue-btn">Edit</button></td>
                                    <td><button className="danger-btn">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>David</td>
                                    <td>Schwartz</td>
                                    <td><Link to="mailto:david@david.com" target="_blank">david@david.com</Link></td>
                                    <td><Link to="tel:+310-555-5555">310-555-5555</Link></td>
                                    <td><Link to="http://www.thebrainchilddesign.com">www.thebrainchilddesign.com</Link>
                                    </td>
                                    <td><button className="light-mood-blue-btn">Edit</button></td>
                                    <td><button className="danger-btn">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>John</td>
                                    <td>Smith</td>
                                    <td><Link to="mailto:jon@johnja.com" target="_blank">jon@johnja.com</Link></td>
                                    <td><Link to="tel:+333-333-3333">333-333-3333</Link></td>
                                    <td><Link to="http://www.jj.com">www.jj.com</Link></td>
                                    <td><button className="light-mood-blue-btn">Edit</button></td>
                                    <td><button className="danger-btn">Delete</button></td>
                                </tr>
                                <tr>
                                    <td>Mark</td>
                                    <td>Henry</td>
                                    <td><Link to="mailto:markeymarkles@mark.com">markeymarkles@mark.com</Link></td>
                                    <td><Link to="tel:+555-555-5555">555-555-5555</Link></td>
                                    <td><Link to="http://www.marksman.com">www.marksman.com</Link></td>
                                    <td><button className="light-mood-blue-btn">Edit</button></td>
                                    <td><button className="danger-btn">Delete</button></td>
                                </tr>
                            </table>
                        </div>
                        
                         {/* End of Tables Container  */}

                    </div>
                    
                     {/* End of Tables Section  */}
        </section>
    )
}