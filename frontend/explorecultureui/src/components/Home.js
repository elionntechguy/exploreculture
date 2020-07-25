import React from 'react'
import Jumbotron from './Jumbotron';
import JumbotronCards from './JumbotronCards';
import View360Container from './View360Container';

function Home() {
    return (
        <React.Fragment>
            <Jumbotron />
            <JumbotronCards />
            <View360Container />

        </React.Fragment>
    )
}

export default Home
