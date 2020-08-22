import React from 'react'
import './BCCSS.css'

function Hero({children, hero}) {
    return (
        <div className={hero} > 
        {
            children
        }
        </div>
    )
}

export default Hero


