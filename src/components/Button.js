import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = () => {
    return (
        <Link to="map">
            <div className='container__button'>
                <button type="button" className="btn-map">Desplegar MAPA mundial</button>
            </div>
        </Link>
    )
}

export default Button
