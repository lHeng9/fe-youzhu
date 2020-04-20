import React, { useEffect, useState } from 'react'
import './index.scss'
import { Menu } from 'antd';
import { AlignLeftOutlined, HighlightOutlined, ApiOutlined, ControlOutlined, ConsoleSqlOutlined, LaptopOutlined, SkinOutlined, CoffeeOutlined, FormatPainterOutlined, GiftOutlined, NotificationOutlined, ShopOutlined, BgColorsOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
const { SubMenu } = Menu;
const MenuMain = (props: any) => {
  const { location } = props
  const [showSub, setShowSub] = useState<string[]>([])
  useEffect(() => {
    if (location.pathname === '/index') {
      setShowSub(['sub'])
    } else {
      setShowSub([])
    }
  }, [location])
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
          <Menu.Item key="1"><ApiOutlined />办公耗品</Menu.Item>
          <Menu.Item key="2"><ControlOutlined />办公设备</Menu.Item>
          <Menu.Item key="3"><ConsoleSqlOutlined />电脑/通讯/数码</Menu.Item>
          <Menu.Item key="4"><HighlightOutlined />文具用品</Menu.Item>
          <Menu.Item key="5"><LaptopOutlined />办公电器</Menu.Item>
          <Menu.Item key="6"><ShopOutlined />家具用品</Menu.Item>
          <Menu.Item key="7"><SkinOutlined />生活用品</Menu.Item>
          <Menu.Item key="8"><BgColorsOutlined />工业用品</Menu.Item>
          <Menu.Item key="9"><CoffeeOutlined />食品酒饮</Menu.Item>
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


export default withRouter(MenuMain)