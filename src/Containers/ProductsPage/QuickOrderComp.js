import React, { Component } from 'react'
import './quickOrderCompCSS.css'
import '../../App.css'
import img1 from '../images/shoe1.jpeg'
import img2 from '../images/shoe2.jpeg'
import img3 from '../images/shoe2.jpeg'
import RatingStar from '../RatingStar'

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-solid-svg-icons'
import $ from "jquery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import classes from '*.module.css'

class QuickOrderComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            quantity: 1
        }
        this.closeQuickOrder = this.closeQuickOrder.bind(this)
    }

    closeQuickOrder() {
        console.log("clicked ckedi")
        $('body').css({
            "overflow": "auto",
            
        }
        )

        

        $('.quickOrderApp').css({
            "z-index": "-1"
            
        })
    }


    render() {
        return (
            <div className='qoContainer' id='myModel'>
                <div className='qoParent'>
                    <div className='qoImagesDiv'>
                        <div className='qoMiniImages'>
                            <div className='qoMiniImagesParent'>
                                <img src={img1} />
                                <img src={img2} />
                                <img src={img3} />
                            </div>
                        </div>
                        <div className='qoMajorImage'>
                            <img src={img1} />
                        </div>
                    </div>
                    <div className='qoDescriptionDiv'>
                        <div className='qoDescription1'>
                            <div className='qoDescription1DivLeft'>
                                <div className='qoDescription1Head'>
                                    <div>Product Name and Product Description but this is long one</div>
                                </div>
                                <div>
                                    <RatingStar rating={3} />
                                </div>


                                <div className='qoDescriptionFeatures'>
                                    <div className='qoDescriptionFeaturesList'>
                                        <ul>
                                            <li>Feature 1</li>
                                            <li>Feature 2</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Feature 1</li>
                                            <li>Feature 2</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='qoDescription1DivRight'>
                                <button onClick={this.closeQuickOrder} >&#10005;</button>
                            </div>
                        </div>

                        <div className='qoDescription2'>
                            <div className='qoDescription2Main'>
                                <div className='qoDes2PriceDiv'>
                                    <div className='qoDes2Price'>
                                        Price
                                </div>
                                </div>
                                <div>
                                    <div className='qoDes2PriceMRPDiv'>
                                        <div className='qoDes2PriceMRP'>
                                            Rs 20
                                </div>
                                    </div>
                                    <div className='qoDes2PriceRetailDiv'>
                                        <div className='qoDes2PriceRetail'>
                                            <b>Rs. 15</b>
                                        </div>
                                        <div className='qoDes2PriceDiscount'>
                                            20% OFF
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='qoDescription3'>
                            <div className='qoDes3Main'>
                                <div className='qoDes3Stock'>
                                    In Stock
                            </div>
                                <div className='qoDes3QtyDiv'>
                                    <div className='qoDes3QtyMain'>
                                        <div className='qoDes3QtyText'>Qty:   {this.state.quantity} </div>
                                        <FontAwesomeIcon className='qoDes3QtyIcon' icon={faMinusCircle} />
                                        <FontAwesomeIcon className='qoDes3QtyIcon' icon={faPlusCircle} />
                                    </div>
                                </div>
                                <div className='qoDes3ButtonMain'>
                                    <button >Add to cart</button>
                                    <button > Buy Now</button>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        )
    }
}

export default QuickOrderComp
