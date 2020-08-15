import React, { Component } from 'react'
import ProductMini from './ProductMiniComp'
import './productMiniContainerCSS.css'
import { counter } from '@fortawesome/fontawesome-svg-core'
import $ from 'jquery'

class ProductMiniContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            counter: 1
        }

        this.translate = this.translate.bind(this)
    }

    translate() {
        this.interval = setInterval(this.tick, 0.00001)
        
    }

    
    addRect = () => {
        if (!this.state.isValidRect) {
            alert('invalid BoundingBox')
        }
        else if (this.state.boxClass == '') {
            $('#classInput').css('border', '5px solid red')

        }
        else {
            $('#classInput').css('border', '1px solid black')
            this.setState({
                boxes: [...this.state.boxes, { "id": this.state.fileName, "class": this.state.boxClass, "topLeft": this.state.point1, "bottomRight": this.state.point2 }],
                boxClass: ''
            })
        }
        document.getElementById('classInput').value = ''
        console.log('add function ')


    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    tick = () => {

        this.setState(
            {
                counter: this.state.counter + 10
            }
        )

        var left = -this.state.counter + 'px';

        $('.miniProductContainer').css(
            
            "transform", 'translate(' + left + ', 0px)'
            
            )
        }

    render() {

        return (
            <div className='miniProductContainerParent'>
                <div className='miniProductContainerMainDiv'>
                    <div className='miniProductContainer' id='myId'>
                        <ProductMini />
                    </div>
                    <div className='miniProductContainer'>
                        <ProductMini />
                    </div>
                    <div className='miniProductContainer'>
                        <ProductMini />
                    </div>
                    <div className='miniProductContainer'>
                        <ProductMini />
                    </div>
                    <div className='miniProductContainer'>
                        <ProductMini />
                    </div>
                    <div className='miniProductContainer'>
                        <ProductMini />
                    </div>
                    </div>
                    <div>
                        <button onClick={this.translate} >Translate</button>
                    </div>
            </div>
        )
    }
}

export default ProductMiniContainer
