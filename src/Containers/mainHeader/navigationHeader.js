import React, { Component } from 'react'
import './navigationHeaderCSS.css'


class NavigationHeader extends Component {
    render() {
        return (
            <div className='navigationHeaderContainer'>
                <div className='navigationHeaderMainDiv'> Home / item1 / item2 </div>
            </div>
        )
    }
}

export default NavigationHeader
