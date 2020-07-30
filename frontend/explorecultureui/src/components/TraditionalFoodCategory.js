import React, { useState, useEffect } from 'react'
import { CardDeck, Card, Button, Row, Modal, ResponsiveEmbed } from 'react-bootstrap';

function TraditionalFoodCategory(props) {

    const [lgShow, setLgShow] = useState(false);
    const [cardid, setCardid] = useState({});

    return (
        <React.Fragment>

        <div className="traditionalfoodcategorycontainer">
            
            <h2>Traditional Food</h2>

            <div className="traditionalfoodcategorycardscontainer">
            
            <CardDeck>

                {props.traditionalfoodone.map((item, key) => {
                return <Card key={key} style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={item.recipeimg} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                        <div className="card-container">
                        {item.content}
                        </div>
                        </Card.Text>
                        <Button variant="primary" onClick={() => { setLgShow(true); setCardid(item) }}>Go somewhere</Button>
                    </Card.Body>
                </Card>
                })}

            </CardDeck>

            <Modal
                key={cardid.id}
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Traditional Food
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={cardid.recipeimg} style={{ width: '100%' }} id='view360img' className='img-fluid' />
                <h2 id='traditionalfoodmodaltitle'>{cardid.title}</h2>
                <p id='traditionalfooddescription'>{cardid.content}</p>
                <p id='traditionalfoodimgcredits'>{cardid.recipeposter}</p>
            </Modal.Body>
            </Modal>

            </div>

        </div>
        
        </React.Fragment>
    )
}

export default TraditionalFoodCategory
