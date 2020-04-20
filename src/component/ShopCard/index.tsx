import React from 'react'
import './index.scss'
// todo ! cover desc price 是必须的
interface ChardPros {
  width?: number;
  cover?: string;
  desc?: string;
  price?: string;
}

const ShopCard = (props: ChardPros) => {
  const {width = 230,cover,desc,price}  = props
  return (
    <div
      className='shop-card'
      style={{width:width}}
    >
      <img src={cover}></img>
      <div className="main">
        <div className="desc">
          {desc}
        </div>
        <div className="price">
        <em>¥</em>
        {price}
        </div>
      </div>
    </div>
  )
}

export default ShopCard