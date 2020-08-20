import React, { useContext } from 'react'
import { RoomContext } from './RoomContextAPI'
import Title from './Title'

const getUnique = (items, value) => {
    return [... new Set(items.map(item => item[value]))]
}

function RoomFilter({ rooms }) {

    const context = useContext(RoomContext)
    // console.log({context})
    const { handleChange, capacity, minPrice, maxPrice, price, minSize, maxSize, type,
        breakfast, pets } = context
    // console.log(maxPrice, maxSize, type)

    let Uniktypes = getUnique(rooms, 'type')
    Uniktypes = ['all', ...Uniktypes]
    Uniktypes = Uniktypes.map((item, index) => {
        return <option value={item} key={index} >{item}</option>
    })

    let guestCap = getUnique(rooms, 'capacity')
    guestCap = guestCap.map((item, index) => {
        return <option value={item} key={index} > {item}</option>
    })

    return (
        <section className='filter-container'>
            <Title title='search rooms' ></Title>
            <form className='filter-form'>
                <div className='form-group'>
                    <label htmlFor='type'>room type</label>
                    <select name='type' id='type' value={type} className='form-control'
                        onChange={handleChange}>
                        {
                            Uniktypes
                        }
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='capacity'>guests</label>
                    <select name='capacity' id='capacity' value={capacity} className='form-control'
                        onChange={handleChange}>
                        {
                            guestCap
                        }
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='price' >room price ${price}</label>
                    <input type='range' id='price' min={minPrice} max={maxPrice}
                        value={price} onChange={handleChange} name='price' className='form-control' />
                </div> 

                <div className='form-group'>
                    <label htmlFor='size'>room size</label>
                    <div className='size-inputs'>
                        <input className='size-input' type='number' name='minSize' id='size' value={minSize} onChange={handleChange} />
                        <input className='size-input' type='number' name='maxSize' id='size' value={maxSize} onChange={handleChange} />

                    </div>
                </div>

                <div className='form-group'>
                <div className='single-extra'>
                <input type='checkbox' name='breakfast' id='breakfast' checked={breakfast} onChange={handleChange} />
                <label htmlFor='breakfast'>breakfast</label>
                </div>
                
                <div className='single-extra'>
                <input type='checkbox' name='pets' id='pets' checked={pets} onChange={handleChange} />
                <label htmlFor='pets'>pets</label>
                </div>
                
                
                </div>



            </form>
        </section>
    )
}

export default RoomFilter
