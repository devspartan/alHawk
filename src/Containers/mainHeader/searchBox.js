import React from 'react'
import './searchBoxCSS.css'
import searchImage from './logo/searchIcon.png'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function searchBox() {
    return (
        <div className='searchBoxMainDiv'>
            <input className='inputSearchBox' placeholder='Search products & brand' ></input>
            <button href='#' className='buttonSearchBox'>
                <FontAwesomeIcon icon={faSearch} size="5x" className='iconSearchBox'></FontAwesomeIcon>
                Search
            </button>
        </div>
    )
}

export default searchBox
