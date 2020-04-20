import React from 'react'
import BreadCrumb from '../../component/BreadCrumb'
import './index.scss'
import { Tabs } from 'antd'
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons'
import Hot from '../../component/Hot'

const { TabPane } = Tabs
const Guide = () => {
  return (
    <div className='guide'>
      <BreadCrumb />
      

      
      <div className="main">
        <Tabs defaultActiveKey="2" type="card">
          <TabPane
            tab={<span><AppleOutlined />装订裁切</span>}
            key="1"
          >
            装订裁切
          </TabPane>
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                展会培训
              </span>
            }
            key="2"
          >
            展会培训
    </TabPane>
        </Tabs>
        <div className="lf">

        </div>
        <div className="rt">

        </div>
      </div>
    </div>
  )
}

export default Guide