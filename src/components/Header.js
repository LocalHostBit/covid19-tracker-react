import React, { useState } from 'react'
import './Header.css'
import bacteria from '../media/bacteria.svg'
import DarkModeToggle from "react-dark-mode-toggle";


const Header = () => {

    return (
        <div className='header'>
            <h1>C</h1><img className='header__logo' src={bacteria} alt=""></img><h1>VID Tracker</h1>
        </div>
    )
}

export default Header
