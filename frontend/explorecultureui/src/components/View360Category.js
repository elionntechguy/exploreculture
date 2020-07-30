import React, { useState, useEffect } from 'react'
import { CardDeck, Card, Button, Row, Modal, ResponsiveEmbed } from 'react-bootstrap';



function View360Category(props) {

    const [lgShow, setLgShow] = useState(false);
    const [cardid, setCardid] = useState({});

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
                            <Button variant="primary" onClick={() => { setLgShow(true); setCardid(item) }}>More details</Button>
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
                        View 360
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={cardid.view360img} style={{ width: '100%' }} id='view360img' className='img-fluid' />
                    <h2 id='view360modaltitle'>{cardid.title}</h2>
                    <p id='view360modaldescription'>{cardid.content}</p>
                    <ResponsiveEmbed aspectRatio="16by9">
                        <embed src={cardid.view360url} />
                    </ResponsiveEmbed>
                    <p id='view360imgcredits'>Credits: {cardid.imgposter}</p>
                </Modal.Body>
                </Modal>

                </div>

            </div>
            
        </React.Fragment>
    )
}

export default View360Category
