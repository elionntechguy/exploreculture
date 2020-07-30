import React, { useState, useEffect } from 'react'
import { CardDeck, Card, Button, Row, Modal } from 'react-bootstrap';

function CulturalPhotographyCategory(props) {

    const [lgShow, setLgShow] = useState(false);
    const [cardid, setCardid] = useState({});

    useEffect(() => {
        console.log(props.culturalphotography1)
    }, [props.culturalphotography1])

    useEffect(() => {
        console.log(cardid);
    }, [cardid])


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
                        Cultural Photography
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={cardid.culturalphotographyimg} id='culturalphotographymodalimg' className='img-fluid' />
                        <h2 id='culturalphotographymodaltitle'>{cardid.title}</h2>
                        <p id='culturalphotographymodaldescription'>{cardid.content}</p>
                        <p id='culturalphotographyimgcredits'>{cardid.imgposter}</p>
                    </Modal.Body>
                  </Modal>

                </div>

            </div>
            
        </React.Fragment>
    )
}

export default CulturalPhotographyCategory
