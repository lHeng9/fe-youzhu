import React, { useState } from 'react'
import './index.scss'
import BreadCrumb from '../../component/BreadCrumb'
import Screen from '../../component/Screen'
import MainCard from '../../component/MainCard'
import { Pagination } from 'antd'
import { Radio } from 'antd'
import Hot from '../../component/Hot'

const pagination = {
  current: 3, onChange: () => { }, total: 50
}
const NewSell = (props: any) => {

  return (
    <div className="newsell">
      <div className="contain">
        <BreadCrumb />
        <Hot />
      </div>
      <Screen />
      <div className="contain-cards">
        <div className="sort">
          <div className="main">
            <Radio.Group defaultValue="default" buttonStyle="solid">
              <Radio.Button value="default">默认</Radio.Button>
              <Radio.Button value="high">价格由高到低</Radio.Button>
              <Radio.Button value="low">价格由低到高</Radio.Button>
            </Radio.Group>
          </div>
        </div>
        <div className="cards">
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
        </div>
        <div style={{ width:1200,margin: '20px auto', display: 'flex' }}>
          <Pagination {...pagination} style={{ marginLeft: 'auto' }} />
        </div>
      </div>
    </div>
  )

}

export default NewSell