import React, { Component } from 'react'
import './adComp1CSS.css'
import img1 from './images/ad1.jpg'
import img2 from './images/ad9.jpg'
import img3 from './images/ad10.jpg'
import img4 from './images/ad11.jpg'
import img5 from './images/ad12.jpg'


let num = 0;
let classNormal = 'belowAdLinksMainButton'
let classActivated = 'belowAdLinksMainButtonActive'
const imgArr = [img1, img2, img3, img4, img5]
class AdComp1 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            count: 0,
            counter: 0
        }
        this.nextImage = this.nextImage.bind(this)
        this.prevImage = this.prevImage.bind(this)
        this.btn1 = this.btn1.bind(this)
        this.btn2 = this.btn2.bind(this)
        this.btn3 = this.btn3.bind(this)
        this.btn4 = this.btn4.bind(this)
        this.btn5 = this.btn5.bind(this)
    }

componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
}

    nextImage() {
        num = num + 1
        if(num > 4) {
            num = 0;
        }
        this.setState({
            count: num,
            counter: 0
        })

        
    }

    prevImage() {
        num = num - 1;
        if(num < 0) {
            num = 4;
        }
        this.setState({
            count: num,
            counter: 0
        })
    }

    btn1() {
        this.setState({
            count: 0,
            counter: 0
        })
        num = 0;
    }
    btn2() {
        this.setState({
            count: 1,
            counter: 0
        })
        num = 1;
    }
    btn3() {
        this.setState({
            count: 2,
            counter: 0
        })
        num = 2;
    }
    btn4() {
        this.setState({
            count: 3,
            counter: 0
        })
        num = 3;
    }
    btn5() {
        this.setState({
            count: 4,
            counter: 0
        })
        num = 4;
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    tick = () => {

        this.setState(
            {
                counter: this.state.counter + 1 
            }
        )

    
        if(this.state.counter == 5) {
            this.setState({
                count: this.state.count + 1,
                counter: 0
            })

            if(this.state.count > 4) {
                this.setState({
                    count: 0,
                    counter: 0
                })
            }
            console.log(`${(this.state.count == 0) ? classActivated : classNormal}`)
            num = this.state.count
        }
    }
    render() {
        return (
            <div className='container'>
                <div className='adComp1MainDiv'>
            
                    
                    <img id="imgId" src={imgArr[this.state.count]} />
                        
              
               
                </div>

                <div>
                    <a onClick={this.prevImage} className='prev'>&#10094;</a>
                    <a onClick={this.nextImage} className='next'>&#10095;</a>
                </div>

                <div className='belowAdLinksParent'>
                    <div className='belowAdLinksMain'>
                        <button className={(this.state.count == 0) ? classActivated : classNormal } onClick={this.btn1} >
                            {this.state.count}</button>
                        <button className={(this.state.count == 1) ? classActivated : classNormal } onClick={this.btn2}>
                        LINK 1</button>
                        <button className={(this.state.count == 2) ? classActivated : classNormal } onClick={this.btn3}>
                        LINK 1</button>
                        <button className={(this.state.count == 3) ? classActivated : classNormal } onClick={this.btn4}>
                        LINK 1</button>
                        <button className={(this.state.count == 4) ? classActivated : classNormal } onClick={this.btn5}>
                        LINK 1</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdComp1
