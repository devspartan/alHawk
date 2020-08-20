import React, { Component } from 'react'
import QuickOrderComp from './ProductsPage/QuickOrderComp'
import './temp2CSS.css'
import './../App.css'
import './ProductsPage/quickOrderCompCSS.css'
import $ from 'jquery'

class Temp2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.toggle = this.toggle.bind(this)
        this.anotherFun = this.anotherFun.bind(this)
    }

    anotherFun(event) {
        // var model = document.getElementById('myModel')
        // if(event.target == model) {
        //     model.style.display = "none"
        // }
    }

    componentDidMount() {
        this.anotherFun(window.onClick)
        
        
    }

    toggle() {
        console.log("TOGGLE")
        
        
    
    }

    
    render() {
        return (
            <div className='blockk'>
                <div className='blockk2' >
                    <QuickOrderComp />
                </div>                
                <button onClick={this.toggle}>CLick me</button>
            </div>
        )
    }
}

export default Temp2
