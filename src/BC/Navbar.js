import React, { Component } from 'react'
import { FaBaby, FaAlignRight } from 'react-icons/fa'
import logo from '../Containers/mainHeader/logo/akLogo1.png'
import { Link } from 'react-router-dom'

class Navbar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
        this.handleEvent = this.handleEvent.bind(this)
    }

    handleEvent() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <nav className='navbar'>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <Link to='/'>
                            <img src={logo}></img>
                        </Link>

                        <button type='button' onClick={this.handleEvent} className='nav-btn'>
                            <FaAlignRight className='nav-icon' />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links nav-margin"}>
                        <li>
                            <Link to='/'> Home </Link>
                        </li>
                        <li>
                            <Link to='/rooms'> Rooms </Link>
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }
}

export default Navbar
