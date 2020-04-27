import React, { useState } from 'react'
import './index.scss'
import { Col, Modal, Form, Menu, Alert } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import Login from './Login'
import Regester from './Regester'
import { fetchRegiste } from '../../../service/user'
import { connect } from 'react-redux';
import { UserOutlined } from '@ant-design/icons'
import { quitLogin } from '../../../redux/user/reducer'
import { fetchLoginThunk } from '../../../redux/user/action'
const { SubMenu } = Menu

const Nav = (props: any) => {
  const [visible, setVisible] = useState(false)
  const [statu, setStatu] = useState('login')
  const [showSub, setShowSub] = useState<string[]>([])
  const [isError, setIsError] = useState(false)
  const [form] = Form.useForm()
  const { username } = props.user
  const { quitLogin, fetchLogin } = props
  function showModal(st: string) {
    setStatu(st)
    setVisible(true)
  }
  async function handleOk() {
    if (statu === 'login') {
      const { username, password } = form.getFieldsValue(['username', 'password'])
      if (!username || !password || username.trim() === '' || password.trim() === '') {
        setIsError(true)
        return
      }
      const res = await fetchLogin({ username, password })
      if (res.success) {
        setVisible(false)
        setIsError(false)
      } else {
        setIsError(true)
      }
    } else {
      const { username, password, confirm } = form.getFieldsValue(['username', 'password', 'confirm'])
      if (!username || !password || !confirm || confirm.trim() === '' || username.trim() === '' || password.trim() === '') {
        setIsError(true)
        return
      }
      const res: any = await fetchRegiste({ username, password })
      if (res.data.success === 1) {
        setVisible(false)
        setIsError(false)
      } else {
        setIsError(true)
      }
    }
  }
  function handleCancel() {

    setVisible(false)
  }
  function onOpenChange(v: string[]) {
    setShowSub(v)
  }
  function quit() {
    setShowSub([])
    quitLogin()
    localStorage.removeItem('Authorization')
  }
  return (
    <div className='nav' >
      <div className='contain'>
        <Col>欢迎您来到优助办公商城！</Col>
        <Col className='nav-right'>
          {
            username ? (
              <Menu
                theme='light'
                style={{ width: 200 }}
                openKeys={showSub}
                mode="inline"
                onOpenChange={onOpenChange}
              >
                <SubMenu
                  key="person"
                  title={
                    <span>
                      <UserOutlined />
                      <span>{username}</span>
                    </span>
                  }
                >
                  <Menu.Item key="1">个人中心</Menu.Item>
                  <Menu.Item key="2" onClick={() => { quit() }}>退出</Menu.Item>
                </SubMenu>
              </Menu>
            ) : (
                <>
                  <span className='nav-right-item' onClick={() => showModal('login')}>登陆</span>
                  <span className='nav-right-item' onClick={() => showModal('registe')}>注册</span>
                </>
              )
          }
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
            (<Login form={form} isError={isError} />) :
            (<Regester form={form} isError={isError} />)
          }
        </Modal>
      </div>
    </div>
  )
}

export default connect(
  (state: any) => ({
    user: state.user
  }),
  (dispatch: any) => ({
    fetchLogin: (data: any) => dispatch(fetchLoginThunk(data)),
    quitLogin: () => dispatch(quitLogin())
  })
)(Nav)