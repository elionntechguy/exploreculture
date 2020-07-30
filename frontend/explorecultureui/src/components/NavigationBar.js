import React from 'react';
import styled from 'styled-components';
import '../App.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav .nav-link {
        color: #fff !important;
        
        transition: 0.15s ease;

        &:hover {
            text-decoration: none;
            color: #B4CED9 !important;

        }

    }
    
    .navbar {
        background-color: #6BB0BF;
    }

`;

function NavigationBar() {
    return (
        <Styles>
            <Navbar sticky="top" expand="lg">
                <Navbar.Brand href="/">exploreCulture</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/">
                                    home
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/explore">
                                    explore
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/events">
                                    events
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/about">
                                    about
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}

export default NavigationBar
