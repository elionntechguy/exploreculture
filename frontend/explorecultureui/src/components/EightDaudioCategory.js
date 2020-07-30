import React, { useState, useEffect } from 'react'
import { CardDeck, Card, Button, Row, Modal } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function EightDaudioCategory(props) {

    const [lgShow, setLgShow] = useState(false);
    const [cardid, setCardid] = useState({});

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
                    8D Audio
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={cardid.eightdaudioimg} id='view360img' className='img-fluid' />
                <h2 id='view360modaltitle'>{cardid.title}</h2>
                <p id='view360modaldescription'>{cardid.content}</p>
                <AudioPlayer
                src={cardid.eightdaudiofile}
                />
                <p id='view360imgcredits'>{cardid.songposter}</p>
            </Modal.Body>
            </Modal>

            </div>

        </div>
        
        </React.Fragment>
    )
}

export default EightDaudioCategory
