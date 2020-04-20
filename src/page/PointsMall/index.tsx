import React from 'react'
import BreadCrumb from '../../component/BreadCrumb'
import './index.scss'
import { Input, Radio, Empty, Pagination } from 'antd'
import MainCard from '../../component/MainCard'

const { Search } = Input

const pagination = {
  current: 3, onChange: () => { }, total: 50
}
const PointsMall = () => {
  return (
    <div className='point-mall'>
      <div className="contain">
        <BreadCrumb />
        <div className="search">
          <div className="keyword">
            <span className="txt">关键词搜索</span>
            <Search size='small' enterButton onSearch={() => { }} />
          </div>
          <div className="level">
            <span className="txt">按分值浏览</span>
            <Radio.Group defaultValue="1" buttonStyle="solid" size='small'>
              <Radio.Button value="1">0-5000</Radio.Button>
              <Radio.Button value="2">5000-10000</Radio.Button>
              <Radio.Button value="3">10000-20000</Radio.Button>
              <Radio.Button value="4">20000及以上</Radio.Button>
            </Radio.Group>
          </div>
          <div className="sort">
            <Radio.Group defaultValue="default" buttonStyle="solid" size='small'>
              <Radio.Button value="default">默认</Radio.Button>
              <Radio.Button value="high">积分由高到低</Radio.Button>
              <Radio.Button value="low">积分由低到高</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="contain">
          {/* <Empty /> */}
          <MainCard type='point'/>
          <MainCard type='point'/>
          <MainCard type='point'/>
          <MainCard type='point'/>
          <MainCard type='point'/>
          <MainCard type='point'/>
          <MainCard type='point'/>
          
        </div>
        
        <div style={{ width:1200,margin: '20px auto', display: 'flex' }}>
          <Pagination {...pagination} style={{ marginLeft: 'auto' }} />
        </div>
      </div>

    </div>
  )
}

export default PointsMall