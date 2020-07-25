import React from 'react'
import { CardDeck, Card, Button, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player'

function EightDaudioCategory(props) {
    return (
        <React.Fragment>

        <div className="eightdaudiocategorycontainer">
            
            <h2>8D Audio</h2>
            <p>Use headphones for the best experience</p>

            <div className="eightdaudiocategorycardscontainer">
            
            <CardDeck>

                {props.eightdaudione.map((item, key) => {
                return <Card key={key} style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={item.eightdaudioimg} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                        <div className="card-container">
                        {item.content}
                        </div>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                })}

            </CardDeck>

            </div>

        </div>
        
        </React.Fragment>
    )
}

export default EightDaudioCategory
