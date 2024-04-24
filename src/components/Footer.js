import React from 'react';
import './Footer.css';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import {faUserSecret} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <div id="footer"  className='footer-container'>
            <section className='footer-subscription'>

                <p className='footer-subscription-text'>
                    Enter your e-mail for detailed information.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>

            </div>
            <section className='social-media'>
                <div >
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            LocateLost&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faUserSecret} style={{color: "white"}}/>
                        </Link>
                    </div>
                    <small className='website-rights'>LocateLost © 2024</small>

                </div>
            </section>
        </div>
    );
}

export default Footer;