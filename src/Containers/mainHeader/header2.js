import React from 'react'
import './header2CSS.css'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function header2() {
    return (
        <div className='header2ParentDiv'>
            <div className='header2MainDiv'>
                <div className='header2LeftDiv'>
                    <a>Utilities for Hostelers</a>
                </div>
                <div className='header2RightDiv'>
                    <a href='#'>
                        <FontAwesomeIcon icon={faMobileAlt} className='header2MobileIcon'></FontAwesomeIcon>
                        Download App
                    </a>
                    <a href='#'>Help Center</a>
                </div>
            </div>
        </div>
    )
}

export default header2
