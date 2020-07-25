import React from 'react'
import { Card, CardDeck, Button } from 'react-bootstrap';

function JumbotronCards() {
    return (
        <React.Fragment>

            <CardDeck className="jumbotroncardsdeck">

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.catun.net/wp-content/uploads/2015/07/IMG_2897.jpg" />
                    <Card.Body>
                        <Card.Title>Traditional Food</Card.Title>
                        <Card.Text>
                        Learn about our traditional foods, and also learn recipes for how to make them!
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/originals/cb/69/84/cb698444ff987130fa1bb45252c7676b.jpg" />
                    <Card.Body>
                        <Card.Title>Traditional Music, Clothing, Dances</Card.Title>
                        <Card.Text>
                        Learn about our traditional music, clothing, dances, and more!
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/06/25/c0/e4/rugova-canyon.jpg" />
                    <Card.Body>
                        <Card.Title>Beautiful Mountains</Card.Title>
                        <Card.Text>
                        See pictures of some of the beautiful mountains, and more!
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </CardDeck>

        </React.Fragment>
    )
}

export default JumbotronCards
