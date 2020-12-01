import React, { Component } from 'react'
// import items from './data'
import Client from './Contentful'


const RoomContext = React.createContext();
class RoomContextAPI extends Component {

    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        minPrice: 0,
        maxPrice: 0,
        capacity: 1,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };

    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "alHawkContentful"
            })

            let rooms = this.formatData(response.items)
            console.log({rooms})
            let featuredRooms = rooms.filter(room => room.featured === true)

            let maxPrice = Math.max(...rooms.map(item => {
                return item.price
            }))

            let maxSize = Math.max(...rooms.map(item => {
                return item.size
            }))

            // console.log({featuredRooms})
            this.setState({
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                loading: false,
                maxPrice: maxPrice,
                capacity: 1,
                minSize: 0,
                price: maxPrice,
                maxSize: maxSize,

            })

        }
        catch (error) {
            console.log(error)
        }

    }

    componentDidMount() {
        this.getData()
        // let rooms = this.formatData(items)
        //     // console.log({rooms})
        //     let featuredRooms = rooms.filter(room => room.featured === true)

        //     let maxPrice = Math.max(...rooms.map(item => {
        //         return item.price
        //     }))

        //     let maxSize = Math.max(...rooms.map(item => {
        //         return item.size
        //     }))

        //     // console.log({featuredRooms})
        //     this.setState({
        //         rooms,
        //         featuredRooms,
        //         sortedRooms: rooms,
        //         loading: false,
        //         maxPrice: maxPrice,
        //         capacity: 1,
        //         minSize: 0,
        //         price: maxPrice,
        //         maxSize: maxSize,

        //     })

    }


    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(images => {
                return images.fields.file.url
            })
            let room = { ...item.fields, images, id }

            return room
        })

        return tempItems
    }

    getRooms = (slug) => {
        let tempRooms = [...this.state.rooms]
        let tempRooms2 = tempRooms.find((item) =>
            item.slug === slug
        );

        return tempRooms2
    }

    handleChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        console.log(value, typeof (value))
        this.setState({
            [name]: value
        },
            this.filterRooms
        )


    }

    filterRooms = () => {
        let { rooms, type, price, minPrice, maxPrice, breakfast, pets,
            capacity, minSize, maxSize } = this.state

        let tempRoomsFilter = [...rooms]
        if (type != 'all') {
            tempRoomsFilter = tempRoomsFilter.filter(room => room.type === type)
        }

        if (capacity != 1) {
            tempRoomsFilter = tempRoomsFilter.filter(room => room.capacity >= parseInt(capacity))
        }

        tempRoomsFilter = tempRoomsFilter.filter(room => room.price <= parseInt(price))

        tempRoomsFilter = tempRoomsFilter.filter(room => room.size >= minSize && room.size <= maxSize)
        this.setState({
            sortedRooms: tempRoomsFilter
        })

        if (breakfast) {
            tempRoomsFilter = tempRoomsFilter.filter(room => room.breakfast === true)
        }
        if (pets) {
            tempRoomsFilter = tempRoomsFilter.filter(room => room.pets === true)
        }
    }


    render() {
        return <RoomContext.Provider value={{
            ...this.state,
            getRooms: this.getRooms,
            handleChange: this.handleChange
        }}>
            {this.props.children}
        </RoomContext.Provider>
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer >
            {
                value => <Component {...props} context={value} />
            }
        </RoomConsumer>
    }
}

export { RoomContextAPI, RoomConsumer, RoomContext }
