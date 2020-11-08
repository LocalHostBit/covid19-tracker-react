import React from 'react'
import CountUp from 'react-countup'
import './Search.css'

const CardsCountries = ({data}) => {
    if(!data.data) {
        return "Cargando...";
    } else {
        return (
            <div class="form___cards">
            
                <div className="cards">
                    <h3 className="cards__title">Cases Confirmed:</h3>
                    <p className="cards__data infected">
                        <CountUp 
                            start={0}
                            end={data.data.confirmed.value}
                            duration={3}
                            separator="."
                        />
                    </p>
                </div>
                <div className="cards">
                    <h3 className="cards__title">Cases Recovered:</h3>
                    <p className="cards__data recovered">
                        <CountUp 
                            start={0}
                            end={data.data.recovered.value}
                            duration={3}
                            separator="."
                        />
                    </p>
                </div>
                <div className="cards">
                    <h3 className="cards__title">Cases Deaths:</h3>
                    <p className="cards__data deaths">
                        <CountUp 
                            start={0}
                            end={data.data.deaths.value}
                            duration={3}
                            separator="."
                        />
                    </p>
                </div>
            
            <br />
        </div>
        )
    }
}

export default CardsCountries
