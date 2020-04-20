import React from 'react'
import Swiper from '../../component/Swiper'
import Recommend from '../../component/Recommend'
import Floor from '../../component/Floor'
import './index.scss'

const floorDatas = [{
  title: {
    mainTitle: '办公耗品',
    secondTitle: '办公设备',
    brandList: ['天章','佳印','紫天章','安妮'],
  },
  lf: {
    swiperImg: ['http://www.yoe365.com/upload/pageCfg/bfb7f17e-910b-40e0-bc38-41a74803e47a.jpg','http://www.yoe365.com/upload/pageCfg/942f748d-3d97-49df-be7e-7ad28d5a7cca.jpg'],
    types:['复印纸','打印纸','打印耗材','复印耗材']
  },
  md: {
    reports: [
      {
        img: 'http://www.yoe365.com/images/youyi/tt-1-01.jpg',
        title: '适用于各种针式打印纸,打印顺畅',
        desc:'精益品质源于这里'
      },
      {
        img: 'http://www.yoe365.com/images/youyi/tt-1-02.jpg',
        title: '让办公会议更清晰可见',
        desc:'画质无暇，功能强大'
      },
      {
        img: 'http://www.yoe365.com/images/youyi/tt-1-03.jpg',
        title: '企业必备考勤产品',
        desc:'人事行政，精良之选'
      },
    ],
    imgs: ['http://www.yoe365.com/images/youyi/003.jpg','http://www.yoe365.com/images/youyi/004.jpg'],
  },
  rt: {
    bgc: '#5178dd',
    items: [
      {
        cover: 'http://www.yoe365.com/upload/prodImage/9d1c17ef-68ba-4206-bfef-07e01602223f.jpg',
        desc: '惠普CE278A(78A)硒鼓适用于惠普P1566/P1606dn/M1536dnf打印机',
        price:'525.00 /只'
      },
      {
        cover: 'http://www.yoe365.com/upload/product/A0103040004/bf64cfff-5a68-45d6-80e9-33d75af8ce98_b.jpg',
        desc: '惠普CH561ZZ802黑色墨盒适用于1000/1050/2000/2050打印机',
        price:'78.00 /只'
      },
      {
        cover: 'http://www.yoe365.com/upload/prodImage/d12f0d23-cf95-4864-bb7c-d21daccccb70.jpg',
        desc: '中图CZ192A硒鼓适用于惠普435NW/M701/M706打印机',
        price:'319.00 /只'
      },
      {
        cover: 'http://www.yoe365.com/upload/product/A0103030145/d1711026-1069-4b14-b795-0ea13650082d_b.jpg',
        desc: '中图CRG-912/925硒鼓适用于佳能LBP3018/3010/3100/3150/3108/6018/6000/MF3010打印机',
        price:'89.00 /只'
      }
    ]
  }
}]

const Main = () => {
  return (
    <div className="main-page">
      <Swiper />
      <Recommend />
      {floorDatas.map((item, index) => {
        return (
          <Floor {...item} />
        )
      })}
    </div>
  )
}

export default Main