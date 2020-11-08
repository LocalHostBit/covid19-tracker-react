import React from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../media/Animation/35647-covid-19-attack-to-world-wide.json'

export default function LottieVirus ({lotti, width, height, }) {
    const defaultOptions = {
        loop: true, 
        autoplay: true, 
        animationData: require('../media/Animation/35647-covid-19-attack-to-world-wide.json'), 
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice", 
        },
    };

    return (
        <div>
            <Lottie options={defaultOptions} height={height} width={height}/>
        </div>
    )
}
