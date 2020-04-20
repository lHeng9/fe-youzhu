import React from 'react'
import './index.scss'
import { Input } from 'antd'
const { Search } = Input;

const TopContent = () => {
  return (
    <div className='top'>
      <Search
        className='search'
        size="large"
        enterButton="搜索"
        placeholder="请输入您需要的商品"
        onSearch={value => console.log(value)}
      />
      <div className="key-words">
        <span>消毒</span>
        <span>84消毒液</span>
        <span>洗手液</span>
        <span>隔离</span>
        <span>护目</span>
        <span>手套</span>
        <span>喷壶</span>
      </div>
    </div>
  )
}

export default TopContent