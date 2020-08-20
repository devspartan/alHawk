import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div>
            <Hero hero='defaultHero'>
                <Banner title='404' subTitle='page not found'>
                    <Link to='/' className='btn-primary'>
                        Home
                    </Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default ErrorPage
