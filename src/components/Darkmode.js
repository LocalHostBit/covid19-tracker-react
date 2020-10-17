import React, {useState} from 'react'
import './Darkmode.css'
import DarkModeToggle from "react-dark-mode-toggle";
import '../index.css'

const Darkmode = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => true);

    return (
        <div className='darkmode'>
            <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
            />
        </div>
    )
}

export default Darkmode
