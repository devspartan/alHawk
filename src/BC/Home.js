    
import React from 'react'       
import Hero from './Hero'       
import Banner from './Banner'       
import { Link } from 'react-router-dom'     
import Services from './Services'       
import FeaturedRooms from './FeaturedRooms'      


function Home() {
    return (
        <React.Fragment >
            <Hero hero="defaultHero">
                <Banner title='Be Our Guest' subTitle='Get Rooms'>
                    <Link to='/rooms' className='btn-primary'>
                        OUR ROOMS
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </React.Fragment>

    )
}

export default Home
