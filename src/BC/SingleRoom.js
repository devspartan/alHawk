import React, { Component } from 'react'
import Hero from './Hero'
import Banner from './Banner'
import defaultImg from './images/room-1.jpeg'
import { Link } from 'react-router-dom'
import { RoomContext } from './RoomContextAPI'
import StyledHero from './StyledComp'

class SingleRoom extends Component {

    constructor(props) {
        super(props)
        // console.log(this.props)
        this.state = {
            slug: this.props.match.params.ad,
            defaultImg: defaultImg
        }
    }

    static contextType = RoomContext

    render() {
        let { getRooms } = this.context
        let room = getRooms(this.state.slug)
        console.log(room)

        if (!room) {
            return (
                <div className='error'>
                    <h4>this room doesn't found</h4>
                    <Link to='/rooms' className='btn-primary'>go to rooms</Link>
                </div>
            )
        }

        const { name, description, price, size, capacity, pets,
            breakfast, type, extras, images, featured } = room

        return (
            <div>
                <StyledHero img={images[0] || this.state.defaultImg}>
                    <Banner title={`${name}`}>
                        <Link to='/rooms' className='btn-primary'>back to rooms</Link>
                    </Banner>
                </StyledHero>

                <section className='single-room' >
                <div className='single-room-images'>
                {
                    images.map((img, index) => {
                       return <img key={index} src={img} alt={name}  />
                    } )
                }
                </div>
                <div className='single-room-info'>
                <article className='desc' >
                    <h3>details</h3>
                    <p>{description}</p>
                </article>
                <article className='info'>
                    <h3>info</h3>
                    <h6>price : ${price}</h6>
                    <h6>size : {size} SQFT</h6>
                    <h6>max-capacity : {capacity} {capacity == 1?"Person":"People"}</h6>
                    <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                    {breakfast && <h6>free breakfast</h6>}
                    </article>
                
                </div>
                </section>
                <section className='room-extras'>
                <h6>extras</h6>
                <ul className='extras'>
                {
                    extras.map((item, index) => {
                        return <li key={index}>- {item}</li>
                    })
                }
                </ul>
                </section>
            </div>
        )
    }
}

export default SingleRoom

