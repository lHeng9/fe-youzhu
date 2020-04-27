import React, { useEffect, useState } from 'react'
import './index.scss'
import { Menu } from 'antd';
import { AlignLeftOutlined, HighlightOutlined, ApiOutlined, ControlOutlined, ConsoleSqlOutlined, LaptopOutlined, SkinOutlined, CoffeeOutlined, FormatPainterOutlined, GiftOutlined, NotificationOutlined, ShopOutlined, BgColorsOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import {fetchTypesThunk } from '../../../../redux/types/action'
import {connect} from 'react-redux'

const { SubMenu } = Menu;
const typesIcon = [<ApiOutlined />,<ControlOutlined />,<ConsoleSqlOutlined />,<HighlightOutlined />,<LaptopOutlined />,<ShopOutlined />,<SkinOutlined />,<CoffeeOutlined />]
const MenuMain = (props: any) => {
  const { location,fetchTypes,types } = props
  const [showSub, setShowSub] = useState<string[]>([])
  const { allTypes} = types
  useEffect(() => {
    if (location.pathname === '/index') {
      setShowSub(['sub'])
    } else {
      setShowSub([])
    }
  }, [location])
  useEffect(() => {
    fetchTypes ()
  }, [])
  
  return (
    <div className='menu-main'>
      <Menu
        theme='light'
        style={{ width: 200 }}
        openKeys={showSub}
        mode="inline"
        onOpenChange={onOpenChange}
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
    </div>
  )
  function onOpenChange(v: string[]) {
    setShowSub(v)
  }
}


export default connect(
  (state: any) => ({
    types:state.types
  }),
  (dispatch:any) => ({
    fetchTypes:()=> dispatch(fetchTypesThunk())
  })
)(withRouter(MenuMain))