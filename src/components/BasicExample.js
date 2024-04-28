import React, { useState, useEffect } from 'react';
import { useLocation ,Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { Button } from "react-bootstrap";

function BasicExample() {
    const location = useLocation();
    const [showContent, setShowContent] = useState(true);

    useEffect(() => {
        if (location.pathname === '/login'||location.pathname === '/AboutUs' ) {
            setShowContent(false);
        } else {
            setShowContent(true);
        }
    }, [location.pathname]);

    const handleNavigateTo = (target) => {
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Navbar expand="xxl" className="bg-body-tertiary navbar-wrapper ">
                <Container>
                    <Navbar.Brand className="candal-regular" href="/" style={{ color: "#6d5b53" }}>
                        LocateLost&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faUserSecret} style={{ color: "#6d5b53" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto c2">
                            {showContent && (
                                <>
                                    <Nav.Link className="c2" onClick={() => handleNavigateTo('services')}>Services</Nav.Link>
                                    <Nav.Link className="c2" onClick={() => handleNavigateTo('footer')}>Subscribe</Nav.Link>


                                </>
                            )}
                            <Link className="c2 nav-link" to='/AboutUs'>About Us</Link>
                        </Nav>

                            <Nav>

                                <Button
                                    className="c2 nav-link"
                                    variant="outline-dark"
                                    style={{ borderColor: "#6d5b53", color: "#6d5b53" }}
                                    href="/login"
                                >
                                    Sign In
                                </Button>
                            </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default BasicExample;