import React, { useEffect, useState, useRef } from 'react'
import './index.scss'
import { Menu } from 'antd';
import { AlignLeftOutlined, HighlightOutlined, ApiOutlined, ControlOutlined, ConsoleSqlOutlined, LaptopOutlined, SkinOutlined, CoffeeOutlined, FormatPainterOutlined, GiftOutlined, NotificationOutlined, ShopOutlined, BgColorsOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import { fetchTypesThunk } from '../../../../redux/types/action'
import { connect } from 'react-redux'
import ShowSubList from './SubMenu/index'

const { SubMenu } = Menu;
const typesIcon = [<ApiOutlined />, <ControlOutlined />, <ConsoleSqlOutlined />, <HighlightOutlined />, <LaptopOutlined />, <ShopOutlined />, <SkinOutlined />, <CoffeeOutlined />]

const MenuMain = (props: any) => {
  const { location, fetchTypes, types } = props
  const [showSub, setShowSub] = useState<string[]>([])
  const [clickKey, setClickKey] = useState('')
  const [show,setShow] = useState(false)
  const { allTypes } = types
  const subMenuRef = useRef()
  const menuMainRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
  function handleOutClick(e:any){
    const target = e.target
    const menu = menuMainRef.current || target
    if (menu.contains(target)) {
      setShow(true)
    } else if (!target.contains(menu)) {
      setShow(false)
    }
  }
  useEffect(() => {
    if (location.pathname === '/index') {
      setShowSub(['sub'])
    } else {
      setShowSub([])
    }
  }, [location])
  useEffect(() => {
    fetchTypes()
  }, [])
  useEffect(() => {
    document.addEventListener('click', handleOutClick)
    return function () {
      document.removeEventListener('click', handleOutClick);
    }
  },[])
  function handleClick(e: any) {
    const { key } = e
    setClickKey(key)
    
  }
  return (
    <div className='menu-main' ref={menuMainRef}>
      <Menu
        theme='light'
        style={{ width: 200 }}
        openKeys={showSub}
        mode="inline"
        onOpenChange={onOpenChange}
        onClick={handleClick}
      >
        <SubMenu
          key="sub"
          title={
            <span>
              <AlignLeftOutlined />
              <span>全部分类</span>
            </span>
          }
        >
          {
            allTypes.map((item: any, index: any) => {
              return (
                <Menu.Item key={item.id}>
                  {typesIcon[index]}
                  {item.name}
                </Menu.Item>
              )
            })
          }

          <Menu.Item key="9"><BgColorsOutlined />工业用品</Menu.Item>
          <Menu.Item key="10"><NotificationOutlined />品牌礼品</Menu.Item>
          <Menu.Item key="11"><GiftOutlined />定制礼品</Menu.Item>
          <Menu.Item key="12"><FormatPainterOutlined />印刷品/印章</Menu.Item>
        </SubMenu>
      </Menu>
      <ShowSubList {...props} clickKey={clickKey} show={show} ref={subMenuRef}/>

    </div >
  )
  function onOpenChange(v: string[]) {
    setShowSub(v)
  }
}


export default connect(
  (state: any) => ({
    types: state.types
  }),
  (dispatch: any) => ({
    fetchTypes: () => dispatch(fetchTypesThunk())
  })
)(withRouter(MenuMain))