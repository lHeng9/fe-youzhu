import React from 'react'
import './index.scss'
import ShopCard from '../ShopCard'
import ColorCard from './ColorCard'
const footColorD = [
  {
    bgColor: '#ff9b43',
    title: '小资生活派！',
    desc1: '炫耀金秋',
    desc2: '下午茶，我来啦！',
    imgSrc: "http://www.yoe365.com/ad/00001.png",
  },
  {
    bgColor: '#f8c235',
    title: '全民来砍价',
    desc1: '不买贵的只买对的',
    desc2: '砍价高手看过来',
    imgSrc: "http://www.yoe365.com/ad/00002.png",
  },
  {
    bgColor: '#44b9ae',
    title: '超级品类日',
    desc1: '办公日用品',
    desc2: '劲爆来袭！',
    imgSrc: "http://www.yoe365.com/ad/00003.png",
  },
]
const Recommend = () => {
  return (
    <div className='recommend'>
      <div className='contain'>
        <div className='title'>
          <span className='recommend-main'>办公优选</span>
          <span className='recommend-second'>价格低的很离谱，手慢无～</span>
        </div>
        <div className='main'>
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
        <div className="foot">
          {
            footColorD.map((item, index) => {
              return (
                <ColorCard
                  {...item}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Recommend