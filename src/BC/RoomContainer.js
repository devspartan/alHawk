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
            hello
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </div>
    )
}

export default withRoomConsumer(RoomContainer)

// function RoomContainer() {
//     return (
//         <RoomConsumer>
//         {
//             (value) => {
//                 return (
//                     <div>
//                     hello 
//                     <RoomFilter />
//                     <RoomFilter />
//                     </div>
//                 )
//             }
//         }
//         </RoomConsumer>
//     )
// }

// export default RoomContainer
