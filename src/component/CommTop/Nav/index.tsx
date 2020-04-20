import React, { useState } from 'react'
import './index.scss'
import { Col, Modal, Form,Input } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import Login from './Login'
import Regester from './Regester'
import { fetchLogin } from '../../../service/user'

const Nav = (props: any) => {
  const [visible, setVisible] = useState(false)
  const [statu, setStatu] = useState('login')
  const [form] = Form.useForm()
  
  function showModal(st: string) {
    setStatu(st)

    setVisible(true)
  }
  function handleOk() {
    console.log('form', form.getFieldsValue(['username', 'password']))
    const {username, password} = form.getFieldsValue(['username', 'password'])
    
    fetchLogin({username,password})
    setVisible(false)
  }
  function handleCancel() {

    setVisible(false)
  }
  return (
    <div className='nav' >
      <div className='contain'>
        <Col>欢迎您来到优助办公商城！</Col>
        <Col className='nav-right'>
          <span className='nav-right-item' onClick={() => showModal('login')}>登陆</span>
          <span className='nav-right-item' onClick={() => showModal('regest')}>注册</span>
          <span className='nav-right-item'><ShoppingCartOutlined />采购单</span>
        </Col>
        <Modal
          title={statu === 'login' ? '登陆' : "注册"}
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          forceRender
        >
          {statu === 'login' ?
            (<Login form={form}/>) :
            (<Regester />)
          }
        </Modal>
      </div>
    </div>
  )
}

export default Nav