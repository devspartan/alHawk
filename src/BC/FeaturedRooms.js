import React, { Component } from 'react'
import { RoomContext } from './RoomContextAPI'
import Loading from './Loading'
import MiniRooms from './MiniRooms'
import Title from './Title'

class FeaturedRooms extends Component {
    static contextType = RoomContext

    render() {
        const {loading, featuredRooms: rooms} = this.context;
        // console.log(loading)
        const miniRooms = rooms.map(room => {
            return <MiniRooms key={room.id} room={room} />
        })
        return (
            <section className='featured-rooms'>
                <Title title="featured rooms"/>
                <div className='featured-rooms-center'>
                {
                    loading?<Loading /> : miniRooms
                }
                </div>
                
            </section>
        )
    }
}

export default FeaturedRooms
