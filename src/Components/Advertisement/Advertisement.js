import React from 'react'
import './Advertise.css'
// import { Card,Button } from 'react-bootstrap'
import { Carousel } from 'antd';

import OlxImg from '../../images/saveImg.jpeg'

function Advertisement() {
  return (
  <Carousel autoplay>
    <div className=' '>
      <img src={OlxImg} className='img-fluid p-5'  />
    </div>
   </Carousel>
     
  )
}

export default Advertisement