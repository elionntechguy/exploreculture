import React, { useState, useEffect } from 'react'
import { CardDeck, Card, Button, Row } from 'react-bootstrap';



function View360Category(props) {
    return (
        <React.Fragment>

            <div className="view360categorycontainer">
                
                <h2>View 360</h2>

                <div className="view360categorycardscontainer">
                
                <CardDeck>

                    {props.view360one.map((item, key) => {
                    return <Card key={key} style={{ width: '22rem' }}>
                        <Card.Img variant="top" src={item.view360img} />
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

export default View360Category
