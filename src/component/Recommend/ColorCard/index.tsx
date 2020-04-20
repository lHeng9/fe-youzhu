import * as React from 'react';
import './index.scss'

interface ColorProps {
  bgColor: string;
  title: string;
  desc1: string;
  desc2: string;
  imgSrc: string;
  
}
const ColorCard = (props: ColorProps) => {
  const { bgColor,title,desc1,desc2,imgSrc} = props
  return (
    <div className="color-card" style={{backgroundColor:bgColor}}>
      <p className="tit">{title}</p>
      <div className="desc">
        <p>{desc1}</p>
        <p>{desc2}</p>
      </div>
      <img className='color-img' src={imgSrc} alt=""/>
    </div>
  )
}

export default ColorCard