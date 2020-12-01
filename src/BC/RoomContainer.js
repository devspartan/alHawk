import React from 'react'
import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
import { withRoomConsumer } from './RoomContextAPI'
import Loading from './Loading'

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </div>
    )
}

export default withRoomConsumer(RoomContainer)

