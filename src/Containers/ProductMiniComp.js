import React, { Component } from 'react'
import './productMiniCompCSS.css'
import img1 from './images/product1.jpeg'
import img2 from './images/product2.jpg'
import { faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import RatingStar from './RatingStar'

class ProduactMiniComp extends Component {

    constructor(props) {
        super(props)

        this.state = {

            mrp: 12,
            retailPrice: 11,
            discount: 20,
            rating: 3.5
        }
    }


    render() {
        return (
            <div className='productImageParent'>
            <div className='productImageMainDiv'>    
            <div className='productImageContainer'>
                    <img src={img2} />
                </div>
                <div className='productImageBelowText'>
                    <div>Product name with little description</div>
                </div>

                <RatingStar rating={5} />
                <div className='productPriceDiv'>
                    <div className='productPriceMRP'>
                        Rs {this.state.mrp}
                    </div>
                    <div className='productPriceRetailPrice'>
                       <b> Rs {this.state.retailPrice}</b>
                    </div>
                    <div className='productPriceDiscount'>
                        {this.state.discount}% OFF
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default ProduactMiniComp
