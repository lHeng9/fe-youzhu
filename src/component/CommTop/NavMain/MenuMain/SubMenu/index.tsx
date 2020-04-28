import React, { forwardRef } from 'react';
import './index.scss'
import { Empty } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = (props: any) => {
  console.log('sub', props)
  const { types, clickKey, show } = props
  const { allTypes } = types
  console.log(clickKey)
 
  return (
    <div className={show ? 'submenu' : 'submenu hidden'} style={clickKey && Number(clickKey) < 9 ? {} : { alignItems: 'center', justifyContent: 'center' }}>
      {allTypes.length && clickKey && Number(clickKey) < 9 ? allTypes[Number(clickKey) - 1].child.map((item: any) => {
        return (
          <li>
            <span className='sub-title'>
              {item.name}
            </span>
            <div className='items'>
              {
                item.child.map((it: any) => (
                  <Link to='/'><span className="item">{it.name}</span> </Link>
                ))
              }
            </div>
          </li>
        )
      }) : <Empty />}
    </div>
  )
}

export default forwardRef(SubMenu)