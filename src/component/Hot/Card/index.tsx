import * as React from 'react';
import './index.scss'
import { Button } from 'antd';
const Card = () => {
  return (
    <div className="card">
      <img src="http://www.yoe365.com/upload/prodImage/a54d1b36-04bb-4ed1-ab7e-0a9a5ce18230.png" alt="" className="cover" />
      <div className="main">
        <div className="desc">
          依云天然矿泉水330ml(24瓶/箱)
        </div>
        <div className="price">
          <em>¥</em>
          189.00
        </div>
        <Button size='small'>立即抢购</Button>
      </div>
    </div>
  )
}

export default Card