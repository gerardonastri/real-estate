import React, {useState, useEffect} from 'react'
import './Property.css'
import { useParams } from "react-router-dom";
import { axiosReq } from '../../apiCalls';
import {FaBed} from 'react-icons/fa'
import {FaBath} from 'react-icons/fa'

import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/Slider/Slider'
import Footer from '../../components/Footer/Footer'





const Property = () => {
  const [property, setProperty] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    const getProperty = async () => {
      try {
        const res = await axiosReq.get(`properties/${id}`)
        setProperty(res.data)
      } catch (error) {
        console.log(error);
      }
    } 
    getProperty()
   }, [id])
   
  return (
    <div className='container'>
      <Navbar />
      <Slider images={property && property.images} />
      <div className="property-wrapper">
        <div className="card-info" style={{marginTop: '30px'}}>
          <div className="card-utilities">
            <span className="card-utility">
              {property?.rooms} <FaBed />
            </span>
            <span className="card-utility">
              {property?.baths} <FaBath />
            </span>
            <span className="card-utility">
              {property?.area} sqft
            </span>
          </div>
          <p className="card-desc">
            <b>{property?.title}</b>
          </p>
        </div>
        <div className="property-body">
          {property?.body}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Property