import { Redirect } from 'react-router-dom'
import React from 'react'
import Main from '../page/Main'
import NotFound from '../page/NotFound'
import NewSell from '../page/Commodity'
import Guide from '../page/Guide'
import PointsMall from '../page/PointsMall'
import About from '../page/About'
const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect from="/" to="/index" />,
    breadcrumbName: 'Home'
  },
  {
    path: '/index',
    component: Main,
    breadcrumbName: 'Home'
  },
  {
    path: '/commodity',
    component: NewSell,
    child: {
      path: '/commodity/newSell',
      component: NewSell,
      breadcrumbName: '最新促销'
    }
  },
  {
    path: '/guide',
    component: Guide,
    breadcrumbName: '专业导购'
  },
  {
    path: '/pointsMall',
    component: PointsMall,
    breadcrumbName: '积分商城'
  },
  {
    path: '/about',
    component: About,
    breadcrumbName: '关于优助'
  },
  {
    path: '*',
    component: NotFound
  }
]

export default routes