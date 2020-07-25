import React from 'react'
import '../App.css';
import { Container } from 'react-bootstrap';

function Layout(props) {
    return (
        <Container fluid className="mainContainer">
            {props.children}
        </Container>
    )
}

export default Layout
