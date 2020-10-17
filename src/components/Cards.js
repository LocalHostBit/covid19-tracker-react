import React from 'react'
import './Cards.css'
import CountUp from 'react-countup'

const Cards = ({ data : {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {
        return 'Loading...'
    }
    return (
        <div className='container'>
            <div className='cards infected'>
                <h2 className='cards__title'>Infected World</h2>
                <h3 className='cards__data color_infected'>
                    <CountUp 
                        className='color_infected'
                        start={0}
                        end={confirmed.value}
                        duration={5.5}
                        separator=","
                    />
                </h3>
                <p className='date__dated'>{new Date(lastUpdate).toDateString()}</p>
                <p className='date__info'>Number of active cases of Covid-19</p>
            </div>
            <div className='cards recovered'>
                <h2 className='cards__title'>Recovered</h2>
                <h3 className='cards__data color_recovered'>
                <CountUp 
                        className='color_recovered'
                        start={0}
                        end={recovered.value}
                        duration={3.5}
                        separator=","
                    />
                </h3>
                <p className='date__dated'>{new Date(lastUpdate).toDateString()}</p>
                <p className='date__info'>Number of recovered cases of Covid-19</p>
            </div>
            <div className='cards deaths'>
                <h2 className='cards__title'>Deaths</h2>
                <h3 className='cards__data color_deaths'>
                <CountUp 
                        className='color_deaths'
                        start={0}
                        end={deaths.value}
                        duration={3.5}
                        separator=","
                    />
                </h3>
                <p className='date__dated'>{new Date(lastUpdate).toDateString()}</p>
                <p className='date__info'>Number of deaths cases of Covid-19</p>
            </div>
        </div>
    )
}

export default Cards
