import React, { Component } from 'react'
import './ratingStarCSS.css'
import { faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import QuickOrderComp from './ProductsPage/QuickOrderComp'

const classGrey = 'productRatingStarIconGrey'
const classYellow = 'productRatingStarIconYellow'
class RatingStart extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className='productRatingStar'>
                    <FontAwesomeIcon className={(this.props.rating >= 1) ? classYellow : classGrey} icon={faStar} />
                    <FontAwesomeIcon className={(this.props.rating >= 2) ? classYellow : classGrey} icon={faStar} />
                    <FontAwesomeIcon className={(this.props.rating >= 3) ? classYellow : classGrey} icon={faStar} />
                    <FontAwesomeIcon className={(this.props.rating >= 4) ? classYellow : classGrey} icon={faStar} />
                    <FontAwesomeIcon className={(this.props.rating >= 5) ? classYellow : classGrey} icon={faStar} />
                </div>
            </div>
        )
    }
}

export default RatingStart
