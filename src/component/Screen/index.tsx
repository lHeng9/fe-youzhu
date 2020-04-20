import React, { useState } from 'react';
import './index.scss'

const Screen = () => {
  const [hiddenBrand, setHiddenBrand] = useState(true)
  function toggleBrand() {
    setHiddenBrand(!hiddenBrand)
  }
  return (
    <div className="screen">
      <div className="title">
        <div className="contain">
          条件筛选
          </div>
      </div>
      <div className="brand">
          <span>品牌:</span>
          <ul style={hiddenBrand ? { height: 95 } : {}}>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
            <li><img className='cover' src="http://www.yoe365.com/upload/brand/483086f2-1153-4d7a-8fb4-792a6cae0a6e.jpg" alt="" /></li>
          </ul>
          <div className="more" onClick={toggleBrand}>
            {hiddenBrand ? '更多' : '收起'}
          </div>
      </div>
      <div className="types">
        <span>相关类别:</span>
        <div className="types-main">
          <span className="types-main-item">中外名酒</span>
          <span className="types-main-item">饮料冲调</span>
          <span className="types-main-item">茶包/茶叶</span>
          <span className="types-main-item">休闲食品</span>
        </div>
      </div>
    </div>
  )
}

export default Screen