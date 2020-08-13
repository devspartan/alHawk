import React from 'react'
import Search from './searchBox'
import './headerCompCSS.css'
import akLogo from './logo/akLogo1.png'
import akLogo2 from './logo/akLogo2resized.png'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



function headerComp() {
    return (
        <div className='headerParentDiv'>
            <div className="header">
                <img src={akLogo2} className='akLogoHeader'></img>
                <Search />
                <div className='btnHeaderDiv'>
                    <button href='#' id='headerBtn'>
                        <FontAwesomeIcon icon={faUserCircle} size='2x' className='userIconHeader'></FontAwesomeIcon>
                    </button>
                    <button href='#' id='headerBtn' >
                        <FontAwesomeIcon icon={faCartPlus} size='2x' className='userIconHeader'></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default headerComp
