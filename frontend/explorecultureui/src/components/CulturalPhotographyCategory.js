import React, { useState, useEffect } from 'react'
import { CardDeck, Card, Button, Row } from 'react-bootstrap';

function CulturalPhotographyCategory(props) {


    useEffect(() => {
        console.log(props.culturalphotography1)
    }, [props.culturalphotography1])

    return (
        <React.Fragment>

            <div className="culturalphotographycontainer">
                
                <h2>Cultural Photography</h2>

                <div className="culturalphotographycardscontainer">
                
                <CardDeck>

                    {props.culturalphotography1.map((item, key) => {
                    return <Card key={key} style={{ width: '22rem' }}>
                        <Card.Img variant="top" src={item.culturalphotographyimg} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                            {item.content}
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

export default CulturalPhotographyCategory
