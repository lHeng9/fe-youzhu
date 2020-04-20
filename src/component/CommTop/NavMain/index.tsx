import React from 'react'
import './index.scss'
import MenuMain from './MenuMain'
import {Link} from 'react-router-dom'
const NavMain = () => {
  return (
    <div className='nav-main'>
      <div className='container'>
        <MenuMain />
        <span className='nav-item'><Link to='/index'>首页</Link></span>
        <span className='nav-item'><Link to='/newSell'>最新促销</Link></span>
        {/* <span className='nav-item'><Link to='/guide'>专业导购</Link></span> */}
        <span className='nav-item'><Link to='/pointsMall'>积分商城</Link></span>
        <span className='nav-item'><Link to='/about'>关于优助</Link></span>

      </div>
    </div>
  )
}

export default NavMain