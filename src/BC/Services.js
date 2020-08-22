import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaBeer, FaCar, FaHiking } from 'react-icons/fa'


class Services extends Component {
    constructor(props) {
        super(props)

        this.state = {
            st: [
                {
                    icon: <FaCocktail />,
                    title: "free cocktail",
                    info: "there is nothing to say in this info maybe sometime later."
                },
                {
                    icon: <FaHiking />,
                    title: "great Hiking",
                    info: "there is nothing to say in this info maybe sometime later."

                },
                {
                    icon: <FaCar />,
                    title: "free long drives",
                    info: "there is nothing to say in this info maybe sometime later."

                },
                {
                    icon: <FaBeer />,
                    title: "strong beer",
                    info: "there is nothing to say in this info maybe sometime later."

                }
            ]
        }
    }

    render() {
        return (
            <section  className='services'>
            <div>
                <Title title='Services'></Title>
                <div className='services-center'>
                    {
                        this.state.st.map((item, index) => {
                            return <article key={index} className='service'>
                                <span>{item.icon}</span>
                                <h4>{item.title}</h4>
                                <p>{item.info}</p>
                            </article>
                        })
                    }
                </div>
            </div>
            </section>
        )
    }
}




export default Services
