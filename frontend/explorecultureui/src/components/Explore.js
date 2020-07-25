import React, { useEffect } from 'react'
import CulturalPhotographyCategory from './CulturalPhotographyCategory'
import View360Category from './View360Category'
import EightDaudioCategory from './EightDaudioCategory'

function Explore(props) {


    return (
        <React.Fragment>

            

            <CulturalPhotographyCategory culturalphotography1={props.culturalphotography} />
            <View360Category view360one={props.view360} />
            <EightDaudioCategory eightdaudione={props.eightdaudio} />

        </React.Fragment>
    )
}

export default Explore
