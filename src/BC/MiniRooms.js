import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import Rooms from './Rooms'


export default function MiniRooms({ room }) {
    // console.log(room)
    const { price, name, slug, images } = room

    return (
        <article className='room'>
            <div className='img-container'>
                <img src={images[0]}></img>
                <div className='price-top'>
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`rooms/${slug}`} className='btn-primary room-link'>Features</Link>
            </div>
            <div className='room-info'>
                {name}
            </div>

        </article>
    )

    }

    // MiniRooms.PropTypes = {
    //     room: PropTypes.shape({
    //         name: PropTypes.string.isRequired,
    //         images: PropTypes.arrayOf(PropTypes.string).isRequired,
    //         price: PropTypes.number.isRequired,
    //         slug: PropTypes.string.isRequired
    //     })
    // }

