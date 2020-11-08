import React from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../media/Animation/covid-19.json'

export default function LottieCovid ({lotti, width, height, }) {
    const defaultOptions = {
        loop: true, 
        autoplay: true, 
        animationData: require('../media/Animation/covid-19.json'), 
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
