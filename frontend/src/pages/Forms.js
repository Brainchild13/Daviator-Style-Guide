import React from 'react';

export default function Forms () {
    return (
        <section id="cards" className="row">
             {/* Forms Section  */}
                    <div className="section-div">
                        <h3 className="element-title">Forms</h3>

                         {/* Forms Container  */}
                        <div id="forms-container">


                            <form className="horizontal-add-user-form" action="/add-user" method="post">

                                <div className="horizontal-form-fields-container">
                                    <h3>Add User</h3>
                                    <input type="text" name="firstName" id="first-name" placeholder="First Name" />
                                    <input type="text" name="lastNam" id="lastName" placeholder="Last Name" />
                                    <input type="email" name="email" id="email-quick" placeholder="Email" />
                                    <input type="tel" name="tel" id="tel" placeholder="Phone" />
                                    <input type="url" name="website" id="website-quick" placeholder="Website" />
                                    <button className="" type="submit">Add</button>
                                </div>

                            </form>

                            <form className="registration-form" action="/confirm-user-registration-details" method="post">
                                <h3>Registration Form</h3>
                                <label for="firstName">First Name:</label>
                                <input type="text" name="firstName" id="firstName" required />
                                <label for="lastName">Last Name:</label>
                                <input type="text" name="lastName" id="lastName" required />
                                <label for="email">Email:</label>
                                <input type="email" name="email" id="email" required />
                                <label for="password">Password:</label>
                                <input type="password" name="password" id="password" required />
                                <button type="submit">Register</button>
                                <span><Link to="/login">Already a member? Sign in Here</Link></span>
                            </form>

                            <form action="/login" className="login-form" method="post">
                                <h3>Sign In</h3>
                                <label for="email">Email:</label>
                                <input type="email" name="email" id="email-login" required />
                                <label for="password">Password:</label>
                                <input type="password" name="password" id="password-login" />
                                <button className="login-btn" type="submit">Login</button>
                                <span><Link to="/register">Register</Link> | <Link to="/forgot-password">Forgot/Lost
                                        Password</Link>
                                </span>
                            </form>

                            <form action="/check-your-email" method="post">
                                <h3>Forgot Password</h3>
                                <label for="email">Email:</label>
                                <input type="email" name="email-forgot" id="email-forgot" />
                                <button type="submit">Get Password</button>
                            </form>

                            <form id="update-profile-form" action="/update-profile" method="post">
                                <h3>Update Profile</h3>
                                <label for="profile-image">Upload your profile image</label>
                                <input type="file" src="#" alt="Upload your profile image" />
                                <label for="phone">Phone</label>
                                <input type="tel" name="phone" id="phone" />
                                <label for="address-street">Street Address</label>
                                <input type="text" name="address-street" id="address-line1" />
                                <label for="address-suite">Suite/Apt</label>
                                <input type="text" name="address-suite" id="address-suite" />
                                <label for="city">City</label>
                                <input type="text" name="city" id="city" />
                                <label for="state">State</label>
                                <input type="text" name="state" id="state" />
                                <label for="zip">Zip</label>
                                <input type="text" name="zip" id="zip" />
                                <label for="country">Country</label>
                                <input type="text" name="country" id="country" />
                                <label for="bday">Birthday</label>
                                <input type="date" name="bday" id="bday" />
                                <label for="company">Company</label>
                                <input type="text" name="company" id="company" />
                                <label for="website">Website</label>
                                <input type="url" name="website" id="website"
                                    placeholder="Enter format http://websitename.com" />
                                <label for="title">Title</label>
                                <input type="text" name="title" id="title" />
                                <label>Level of Education</label>
                                <hr />
                                <br />
                                <ul className="checkbox-list">
                                    <li>


                                        <input type="checkbox" name="high-school" id="high-school" value="High School" />
                                        <label for="high-school">High School</label>

                                    </li>
                                    <li>

                                        <input type="checkbox" name="associate-degree" id="associate-degree"
                                            value="associate-degree" />
                                        <label for="associate-degree">Associates Degree</label>

                                    </li>
                                    <li>

                                        <input type="checkbox" name="masters-degree" id="masters-degree"
                                            value="Masters Degree" />
                                        <label for="masters-degree">Master's Degree</label>
                                    </li>
                                    <li>

                                        <input type="checkbox" name="doctoral-degree" id="doctoral-degree"
                                            value="Doctoral Degree" />
                                        <label for="doctoral-degree">Doctoral Degree</label>
                                    </li>
                                </ul>

                                <br />
                                <hr />
                                <br />

                                <label for="bio">Bio</label>
                                <textarea name="bio" id="bio" cols="30" rows="10"
                                    placeholder="Tell us something about yourself">
                                    </textarea>
                                <button type="submit">Update Profile</button>

                            </form>

                            <form action="/add-user-mailing-list" method="post">
                                <h3>Join Mailing List</h3>
                                <label for="email-mailing-list">Email</label>
                                <input type="email" name="email-mailing-list" id="email-mailing-list" />
                                <button type="submit">Get Updates</button>
                            </form>

                            <form action="/refer-a-friend">
                                <h3>Refer A Friend</h3>

                                <label for="friend-first-name">Friend's First name</label>
                                <input type="text" />
                                <label for="friend-last-name">Friend's Last name</label>
                                <input type="text" name="friend-last-name" id="friend-last-name" />
                                <label for="friend-email">Friend's Email</label>
                                <input type="email" name="friend-email" id="friend-email" />
                                <label for="friend-phone">Friend's Phone</label>
                                <input type="tel" name="friend-phone" id="friend-phone" />
                                <button type="submit">Refer a Friend</button>
                            </form>


                        </div>
                         {/* End forms container   */}
                    </div>
                     {/* Ends Forms Section </input> */}
        </section>
    )
}