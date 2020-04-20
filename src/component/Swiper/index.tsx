import React from 'react'
import { Carousel } from 'antd';
import './index.scss'
const Swiper = () => {
  return (
    <div className='swiper'>
      <Carousel effect="fade" autoplay>
          <img src='http://www.yoe365.com/upload/ad/fdee1a1e-895e-4272-9af1-c7d0d012a70b.jpg'/>
          <img src='http://www.yoe365.com/upload/ad/4158e1ca-4bb2-4003-bf1f-5c24f2d68d20.jpg'/>
          <img src='http://www.yoe365.com/upload/ad/16c88f05-6b08-410a-b76d-96aafcda742e.jpg'/>
          <img src='http://www.yoe365.com/upload/ad/e8713268-9f4a-4e77-8244-311c3b276303.jpg'/>
      </Carousel>
    </div>
  )
}

export default Swiper