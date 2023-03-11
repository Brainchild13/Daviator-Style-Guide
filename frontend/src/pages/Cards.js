import React from 'react';
import { Link } from 'react-router-dom'
const HalleImage = require('../images/content-images/2021-11-08 05.50.26.jpg')
const KatanaImage = require('../images/content-images/2021-10-01 11.19.39.jpg')
const TubmanImage = require('../images/content-images/2021-11-29 12.29.01.jpg')
const BattlePlanetsImage = require('../images/content-images/2022-06-07 20.26.25.jpg')
const JoeJohnsonImage = require('../images/content-images/2022-10-21 14.00.04.jpg') 
const Halle2Image = require('../images/content-images/2021-11-08 05.51.07.jpg')
const LavendarFieldImage = require('../images/content-images/2022-07-07 18.26.34.jpg')
const AirfieldImages = require('../images/content-images/2022-08-14 11.25.04.jpg')
const ProfileImage = require('../images/content-images/david profile pic400.jpg')

export default function Cards () {
    return (
        <section id="cards" className="row">
            <div id="card-section" className="section-div">
                {/* Card Type Section  */}

            <h3 className="element-title">Cards</h3>
            <h3 className="card-type-title">Blog post archive cards - basic</h3>

        <div id="cards-container">

            {/* Vertical Cards  */}
            <div className="card vertical card-lg glow-on-hover">
            <img src={HalleImage} alt="" classNameName="card-featured-img" />
         
                <div className="card-content">
                    <h6 className="card-category">News Software Education</h6>
                    <h3 className="card-title">This is the basic card for blog posts
                    </h3>
                    <h6 className="card-subtitle">This is the subtitle section</h6>
                    <p className="card-text">the card content is in this area but abbreviated</p>
                    <button>
                        <Link to="#">Continue Reading...</Link>
                    </button>
                </div>
            </div>

            <div className="card vertical card-lg glow-on-hover">
                <img src={KatanaImage} alt="" classNameName="card-featured-img" />
                
                <div className="card-content">
                    <h6 className="card-category">News Software Education</h6>
                    <h3 className="card-title">This is the basic card for blog posts
                    </h3>
                    <h6 className="card-subtitle">This is the subtitle section</h6>
                    <p className="card-text">the card content is in this area but abbreviated</p>
                    <button>
                        <Link to="#">Continue Reading...</Link>
                    </button>
                </div>
            </div>

            <div className="card vertical card-lg glow-on-hover">
                <img src={TubmanImage} alt="" classNameName="card-featured-img" />
                
                <div className="card-content">
                    <h6 className="card-category">News Software Education</h6>
                    <h3 className="card-title">This is the basic card for blog posts
                    </h3>
                    <h6 className="card-subtitle">This is the subtitle section</h6>
                    <p className="card-text">the card content is in this area but abbreviated</p>
                    <button>
                        <Link to="#">Continue Reading...</Link>
                    </button>
                </div>
            </div>

            <div className="card vertical card-lg glow-on-hover">
            <img src={BattlePlanetsImage} alt="" classNameName="card-featured-img" />
              
                <div className="card-content">
                    <h6 className="card-category">News Software Education</h6>
                    <h3 className="card-title">This is the basic card for blog posts
                    </h3>
                    <h6 className="card-subtitle">This is the subtitle section</h6>
                    <p className="card-text">the card content is in this area but abbreviated</p>
                    <button>
                        <Link to="#">Continue Reading...</Link>
                    </button>
                </div>
            </div>

        </div>
        {/* End of Card container vertical cards large  */}


        <div className="cards-container">
            <h3>Horizontal blog cards</h3>

            {/* Horizontal Cards Large  */}
            <div className="card horizontal card-lg glow-on-hover">
                <img src={JoeJohnsonImage} alt="" classNameName="card-featured-img horizontal" />
                
                <div className="card-content">
                    <h6 className="card-category">News Software Education</h6>
                    <h3 className="card-title">This is the basic card for blog posts
                    </h3>
                    <h6 className="card-subtitle">This is the subtitle section</h6>
                    <p className="card-text">the card content is in this area but abbreviated</p>
                    <button>
                        <Link to="#">Continue Reading...</Link>
                    </button>
                </div>
            </div>


            <div className="card horizontal card-lg glow-on-hover">
            <img src={Halle2Image} alt="" classNameName="card-featured-img horizontal" />
                
                <div className="card-content">
                    <h6 className="card-category">News Software Education</h6>
                    <h3 className="card-title">This is the basic card for blog posts
                    </h3>
                    <h6 className="card-subtitle">This is the subtitle section</h6>
                    <p className="card-text">the card content is in this area but abbreviated</p>
                    <button>
                        <Link to="#">Continue Reading...</Link>
                    </button>
                </div>
            </div>

            <div className="card horizontal card-lg glow-on-hover">
            <img src={LavendarFieldImage} alt="" classNameName="card-featured-img horizontal" />
          
                <div className="card-content">
                    <h6 className="card-category">News Software Education</h6>
                    <h3 className="card-title">This is the basic card for blog posts
                    </h3>
                    <h6 className="card-subtitle">This is the subtitle section</h6>
                    <p className="card-text">the card content is in this area but abbreviated</p>
                    <button>
                        <Link to="#">Continue Reading...</Link>
                    </button>
                </div>
            </div>

            <div className="card horizontal card-lg glow-on-hover">
            <img src={AirfieldImages} alt="" classNameName="card-featured-img horizontal" />
                
                <div className="card-content">
                    <h6 className="card-category">News Software Education</h6>
                    <h3 className="card-title">This is the basic card for blog posts
                    </h3>
                    <h6 className="card-subtitle">This is the subtitle section</h6>
                    <p className="card-text">the card content is in this area but abbreviated</p>
                    <button>
                        <Link to="#">Continue Reading...</Link>
                    </button>
                </div>
            </div>

        </div>
        End of card container horizontal cards large 

        <div className="cards-container">

            Vertical Profile Card 
            <div className="card vertical card-lg profile glow-on-hover">
                <img src={ProfileImage} alt="" classNameName="card-featured-img" />
               
                <div className="card-content">
                    <h6 className="card-category">React MongoDB Express Node.js</h6>
                    <h3 className="card-title">David Schwartz</h3>
                    <h6 className="card-subtitle">Full Stack Senior Software Engineer</h6>
                    <h3>Contact Info</h3> 
                    <p className="card-text"><strong>Email: </strong><a
                            href="mailto:davidschwartz23@gmail.com">David
                            Schwartz</a></p>
                    <p className="card-text"><strong>Phone: </strong><a
                            href="tel:+13109806666">310-980-6666</a>
                    </p>
                    <p className="card-text">
                        <address>
                            <h3 className="profile-card-address">Address</h3>
                            <strong>Street: </strong> 4141 Elenda St #4 <br/>
                            <strong>City: </strong> Culver City <br /><strong>State: </strong> California
                            <br /><strong>Zip:
                            </strong> 90232 <br />
                        </address>
                    </p>
                    <button>
                        <Link to="#" className="bio-link" >See Full Bio...</Link>
                    </button>
                </div>
            </div>


        </div>
        {/* End of card container for vertical profile card large  */}
        {/* End of Card Section  */}
    </div>
        </section>
        
   
    )
}