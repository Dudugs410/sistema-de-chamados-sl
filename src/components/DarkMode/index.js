import { useState } from "react"
import { FiSun, FiMoon } from "react-icons/fi"

import './darkmode.scss'

export default function DarkMode(){
    
    const[dark, setDark] = useState(false)

    return(
        <>
            <label className="switch">
            <input className='darkmode checkbox' type="checkbox"/>
            <span className="slider round">{dark ? <FiMoon color="#9acd32" size={24}/> : <FiSun type='checkbox' color="#9acd32" size={24} />}</span>
            </label>
        </>
    )
}
