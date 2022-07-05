import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Featured from '../../components/Featured/Featured'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import {axiosReq} from '../../apiCalls'

const Home = () => {
  const [properties, setProperties] = useState(null);

  useEffect(() => {
    const getProperties = async () => {
      try {
        const res = await axiosReq.get('properties')
        setProperties(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getProperties()
  },[])
  

  return (
    <div className='container'>
      <Navbar />
      <Featured type="rent" />
      <div className="card-container">
        {properties && properties.map(property => (
          <Card data={property} />
        ))}
      </div>
      <Featured />
      <div className="card-container">
      {properties && properties.map(property => (
          <Card data={property} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Home