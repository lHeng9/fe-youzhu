import * as React from 'react';
import './index.scss'
import Card from './Card'
import hotBg from '../../static/imgs/hotBg.png'
const Hot = () => {
  return (
    <div className="hot">
      <span className="tit" style={{background:`url(${hotBg}) no-repeat`}}>
        热卖推荐
      </span>
      <div className="list">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Hot