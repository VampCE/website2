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