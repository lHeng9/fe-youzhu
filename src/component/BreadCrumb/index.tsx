import * as React from 'react';
import { Breadcrumb } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import routes from '../../routes/config'


const breadcrumbNameMap:any = {
  '/index': 'Home',
  '/newSell': '最新促销',
  '/guide': '专业导购',
  '/pointsMall': '积分商城',
  '/about': '关于优助',
};
const BreadCrumb = (props: any) => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter((i: any) => i);
  console.log('pathSnippets',pathSnippets)
  const extraBreadcrumbItems = pathSnippets.map((_:any, index:any) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [<Breadcrumb.Item key="home">
    <Link to="/">Home</Link>
  </Breadcrumb.Item>,].concat(extraBreadcrumbItems)
  return (
    <div style={{ display: 'flex',margin:'5px 0'}}>
      您当前的位置：<Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
      
  )
}

export default withRouter(BreadCrumb) 