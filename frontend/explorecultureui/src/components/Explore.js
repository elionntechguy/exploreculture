import React, { useEffect } from 'react'
import CulturalPhotographyCategory from './CulturalPhotographyCategory'
import View360Category from './View360Category'
import EightDaudioCategory from './EightDaudioCategory'
import ARCategory from './ARCategory'
import TraditionalFoodCategory from './TraditionalFoodCategory'

function Explore(props) {


    return (
        <React.Fragment>

            

            <CulturalPhotographyCategory culturalphotography1={props.culturalphotography} />
            <View360Category view360one={props.view360} />
            <EightDaudioCategory eightdaudione={props.eightdaudio} />
            <ARCategory arone={props.ar} />
            <TraditionalFoodCategory traditionalfoodone={props.traditionalfood} />

        </React.Fragment>
    )
}

export default Explore
