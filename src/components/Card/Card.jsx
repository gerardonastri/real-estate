import React from 'react'
import './Card.css'
import {FaBed} from 'react-icons/fa'
import {FaBath} from 'react-icons/fa'


const Card = ({data}) => {
  return (
    <div className='card'>
      <a href={`/property/${data.id}`}>
        <img src={data.images[0]} alt="" />
      </a>
      <div className="card-info">
        <h4 className="card-title">{data.title}</h4>
        <div className="card-utilities">
          <span className="card-utility">
            {data.rooms} <FaBed />
          </span>
          <span className="card-utility">
            {data.baths} <FaBath />
          </span>
          <span className="card-utility">
            {data.area} sqft
          </span>
        </div>
        <p className="card-desc">
        {data.body.slice(0,40)}...
        </p>
      </div>
    </div>
  )
}

export default Card