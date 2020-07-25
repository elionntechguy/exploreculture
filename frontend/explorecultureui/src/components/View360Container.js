import React from 'react'
import { Card, CardDeck, Button } from 'react-bootstrap';

function View360Container() {
    return (
        <React.Fragment>

            <div className="view360maincontainer">

                <h2>
                    View 360
                </h2>

            <CardDeck>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/1/15/Ethnographic_Museum_in_Prishtina.jpg" />
                    <Card.Body>
                        <Card.Title>Muzeu Etnologjik i Kosovës</Card.Title>
                        <Card.Text>
                        View the Muzeu Etnologjik i Kosovës in 360
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://viewkosova.com/wp-content/uploads/2018/10/lshp3.jpg" />
                    <Card.Body>
                        <Card.Title>Lidhja Shqiptare e Prizrenit</Card.Title>
                        <Card.Text>
                        View the Lidhja Shqiptare e Prizrenit in 360
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Muzeu_i_Kosov%C3%ABs.JPG" />
                    <Card.Body>
                        <Card.Title>Muzeu i Kosovës</Card.Title>
                        <Card.Text>
                        View the Muzeu i Kosovës in 360
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

            </CardDeck>

            </div>


        </React.Fragment>
    )
}

export default View360Container
