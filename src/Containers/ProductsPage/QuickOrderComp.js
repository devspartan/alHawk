import React, { Component } from 'react'
import './quickOrderCompCSS.css'
import img1 from '../images/shoe1.jpeg'
import img2 from '../images/shoe2.jpeg'
import img3 from '../images/shoe2.jpeg'
import RatingStar from '../RatingStar'

class QuickOrderComp extends Component {
    render() {
        return (
            <div className='qoContainer'>
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

                        <div className='qoDescription2'>
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

                        <div className='qoDescription3'>
                        <div className='qoDes3Stock'>
                        In Stock
                        </div>
                        <div className='qoDes2QtyDiv'>
                            <div>
                            Qty
                            </div>
                        </div>
                        </div>

                        <div className='qoDescription4'>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default QuickOrderComp
