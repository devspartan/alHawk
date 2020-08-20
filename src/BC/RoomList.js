import React from 'react'
import MiniRooms from './MiniRooms'


function RoomList({rooms}) {

    if(rooms.length === 0) {
        return <div className='empty-search'>
        <h3>No match found</h3>
        </div>
    }
    return (
        <section className='roomslist'>
            <div className='roomslist-center'>
            
            {
                rooms.map(item => {
                    return <MiniRooms key={item.id} room={item}></MiniRooms>
                })
            }
            </div>
        </section>
    )
}

export default RoomList
