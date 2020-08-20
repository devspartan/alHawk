import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import { Link } from 'react-router-dom'
import RoomContainer from './RoomContainer'
import { RoomConsumer } from './RoomContextAPI'

function Rooms() {
    return (
        <React.Fragment >
            <Hero hero="roomsHero">
                <Banner title='our rooms' > <Link to='/' className='btn-primary' >
                    return home
            </Link>
                </Banner>
            </Hero>
            <RoomContainer />
        </React.Fragment>
    )
}

export default Rooms
