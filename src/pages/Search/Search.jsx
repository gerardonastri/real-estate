import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SearchForm from '../../components/SearchForm/SearchForm'
import {BsFilter} from 'react-icons/bs'
import './Search.css'
import { useSearchParams } from 'react-router-dom';
import Card from '../../components/Card/Card'
import {axiosReq} from '../../apiCalls'

const Search = () => {
  const [searchFilters, setSearchFilters] = useState(false);
  const [properties, setProperties] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getProperties = async () => {
      const purpose = searchParams.get('purpose') || 'rent';
      const minPrice = searchParams.get('minPrice') || '0';
      const maxPrice = searchParams.get('maxPrice') || '1000000';
      const rooms = searchParams.get('rooms') || '0';
      const baths = searchParams.get('baths') || '0';
      const areaMax = searchParams.get('areaMax') || '35000';
      try {
        const res = await axiosReq.get(`search/properties?purpose=${purpose}&baths=${baths}&priceMin=${minPrice}&priceMax=${maxPrice}&rooms=${rooms}&areaMax=${areaMax}`)
        setProperties(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getProperties()
  },[searchParams])

  return (
    <div className='container'>
      <Navbar />
      <div className="search-wrapper">
        <h2 className="search-title">
          <span>Search Property By Filters</span>
          <BsFilter onClick={() => setSearchFilters(prev => !prev)} />
        </h2>
        {searchFilters && (
          <SearchForm />
        )}
        <h2 className="property-type">
          Properties {searchParams?.get('purpose')}
        </h2>
        {properties?.length > 0 && (
          <div className="card-container">
              {properties && properties.map(property => (
                <Card data={property} />
              ))}
          </div>
        )}
        {properties?.length < 1 && (
          <div className="no-result">
            <img src="/noresult.svg" alt="" />
            <h3>No results found</h3>
         </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Search