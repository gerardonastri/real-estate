import React from 'react';
import './Slider.css';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import {BsFillArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import { useContext } from 'react';

const LeftArrow = () => {
  const {scrollPrev} = useContext(VisibilityContext)

  return (
    <div className='arrow'>
      <BsFillArrowLeftCircleFill onClick={() => scrollPrev()} style={{marginRight: '15px'}} />
    </div>
  )
}

const RightArrow = () => {
  const {scrollNext} = useContext(VisibilityContext)

  return (
    <div className='arrow'>
      <BsArrowRightCircleFill onClick={() => scrollNext()}  style={{marginLeft: '15px'}} />
    </div>
  )
}

const Slider = ({images}) => {

  
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: 'hidden', marginTop: '50px'}}>
      {images?.map(img => (
        <div className="slider-img" key={img}>
          <img src={img} alt="sliderimg"  />
        </div>
      ))}
    </ScrollMenu>
  )
}

export default Slider