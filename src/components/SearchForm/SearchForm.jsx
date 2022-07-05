import React from 'react'
import './SearchForm.css'
import {MdCancel} from 'react-icons/md'
import { useState } from 'react'
import { useSearchParams,useNavigate, createSearchParams } from 'react-router-dom';

import {filterData, getFilterValues} from '../../filterData'

const SearchForm = () => {
  const [filters, setFilters] = useState(filterData)
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchProperties = (filtersValue) => {
    const values = getFilterValues(filtersValue);
    const query = {}

    values.forEach(item => {
      query[item.name] = item.value
    })

    navigate({
      pathname: "/search",
      search: createSearchParams({
        purpose: query.purpose || searchParams.get('purpose') || 'rent',
        areaMax: query.areaMax || searchParams.get('areaMax') || 3500,
        baths: query.baths || searchParams.get('baths') || 0 ,
        rooms: query.rooms || searchParams.get('rooms') || 0,
        minPrice: query.minPrice || searchParams.get('minPrice') || 0,
        maxPrice: query.maxPrice || searchParams.get('maxPrice') || 1000000,
      }).toString()
    });
  }

  return (
    <div className='search-form'>
      {filters.map((filter) => (
        <div className="filter" key={filter.queryName}>
          <select name="" id="" onChange={(e) => searchProperties({[filter.queryName]: e.target.value})} >
            <option value="" selected disabled hidden>{filter.placeholder}</option>
            {filter?.items?.map(item => (
              <option value={item.value} key={item.value}>{item.name}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  )
}

export default SearchForm