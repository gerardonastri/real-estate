import React from 'react'
import './Featured.css'

const Featured = ({type}) => {
  return (
    <div className='featured'>
      <img src={type === 'rent' ? "https://realtor.vercel.app/_next/image?url=https%3A%2F%2Fbayut-production.s3.eu-central-1.amazonaws.com%2Fimage%2F145426814%2F33973352624c48628e41f2ec460faba4&w=640&q=75" : "https://realtor.vercel.app/_next/image?url=https%3A%2F%2Fbayut-production.s3.eu-central-1.amazonaws.com%2Fimage%2F110993385%2F6a070e8e1bae4f7d8c1429bc303d2008&w=640&q=75"} alt="" />
      <div className="featured-info">
        <span className="featured-type">
          {type === 'rent' ? 'RENT A HOME' : 'BUY A HOME'}
        </span>
        <h2 className="featured-title">
          {type === 'rent' ? 'Rental Homes for Everyone' : 'Find, Buy & Own Your  Dream Home'}
        </h2>
        <div className="featured-desc">
          Explore from Apartments, builder floors, villas and more 
        </div>
        <button className={type === 'rent' ? 'rent-btn' : 'buy-btn'}>
          <a href={type === 'rent' ? '/' : '/'}>
            {type === 'rent' ? 'Explore Renting' : 'Explore Buying'}
          </a>
        </button>
      </div>
    </div>
  )
}

export default Featured