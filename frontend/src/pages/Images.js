import React from 'react';
const MapImage = require('../images/content-images/2021-12-15 09.52.08.jpg')
const ProfileImage = require('../images/content-images/david profile pic400.jpg')

export default function Images () {
    return (
        <section id="images" class="row">
             {/* Images Section  */}
            
                    <div id="images-section" class="section-div">
                        <h3 class="element-title">Images</h3>
                        <div id="images-container">

                            <p>
                            <h3 class="image-type-title">Full Size Image width: 100%; height: auto;</h3>
                            <img src={MapImage} alt="" class="full-size" />
                            </p>

                            <p>
                            <h3 class="image-type-title">Large Size Image width: 600px; height: auto;</h3>
                            <img src={MapImage} alt="" class="large" />
                            </p>

                            <p>
                            <h3 class="image-type-title">Medium Size Image width: 400px%; height: auto;</h3>
                            <img src={MapImage} alt="" class="medium" />
                            </p>

                            <p>
                            <h3 class="image-type-title">Small Size Image width: 100%; height: auto;</h3>
                            <img src={MapImage} alt="" class="small" />
                            </p>

                            <p>
                            <h3 class="image-type-title">Thumb Size Image width: 100%; height: auto;</h3>
                            <img src={MapImage} alt="" class="thumb" />
                            </p>

                            <p>
                            <h3 class="image-type-title">Profile Image width: 100%; height: auto;</h3>
                            <img src={ProfileImage} alt="" class="profile" />
                            </p>

                        </div>
                         {/* End of Images Container  */}
                        

                         {/* Hero Images  */}
                        
                        <h3 class="image-type-title">Hero Image with Text centered in middle of image</h3>
                        <div class="hero-container ">
                            <div class="overlay text-centered">
                                <div class="hero-text-content">
                                    <h1 class="hero-title-h1">Featured Title Centered in the middle of the hero image
                                    </h1>
                                    <p class="hero-title-p">Text is centered in the image</p>
                                </div>
                            </div>

                        </div>

                        <h3 class="image-type-title">Hero Image with text to the left side of container</h3>
                        <div class="hero-container ">
                            <div class="overlay text-left">
                                <div class="hero-text-content">
                                    <h1 class="hero-title-h1">Featured Title floated to the left</h1>
                                    <p class="hero-title-p">Text is positioned left in the image</p>
                                </div>
                            </div>

                        </div>
                         {/* End Hero Images Section  */}
                        

                    </div>
                     {/* End of Images Section  */}
                    
        </section>
    )
}