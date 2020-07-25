import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbo {
        background: url('https://images.pexels.com/photos/755385/pexels-photo-755385.jpeg') no-repeat fixed;
        background-position: center;
        background-size: cover;
        color: #efefef;
        height: 200px;
        position: relative;
        z-index: -2;
        display: flex;
        height: 350px;
        width: 100%;
    }

    .overlay {
        background-color: #000;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

    .container {
        display: flex;
        justify-content: center;
    }

`;


function Jumbotron() {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Learn about the culture of Kosovo!</h1>
                </Container>
            </Jumbo>
        </Styles>
    )
}

export default Jumbotron
