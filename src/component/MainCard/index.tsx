import * as React from 'react';
import './index.scss'
import { Button } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

interface CardProps {
  type?: 'rmb' | 'point',
  
}

const MainCard = (props:CardProps) => {
  const cover = 'http://www.yoe365.com/upload/prodImage/db1125d6-a489-417b-b99a-684b33bf4acc.jpg'
  const desc = '臻味环球尊礼礼盒2.13kg'
  const price = '232.00/盒'
  const oldPrice = '332.00/盒'
  const point = '20000 积分'
  // const type = 'point'
  const { type } = props
  return (
    <div className='maincard'>
      <img src={cover}></img>
      <div className="main">
        <div className="desc">
          {desc}
        </div>
        <div className="price">
          {type === 'rmb' ? (<em>¥</em>) : ''}
          {type === 'rmb' ? price : point}
        </div>
        {type === 'rmb' ? (
          <div className="old-price">
            <em>¥</em>
            {oldPrice}
          </div>
        ) : ''}

        <div className="code">
          商品编码：000029784
        </div>
        <div className="brand">
          商品品牌：福小满
        </div>
        <Button type="primary" icon={<ShoppingCartOutlined />}>加入购物车</Button>
      </div>
    </div>
  )
}

export default MainCard