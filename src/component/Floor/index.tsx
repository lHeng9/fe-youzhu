import * as React from 'react';
import { Carousel } from 'antd';
import ShopCard from '../ShopCard'

import './index.scss'

interface FloorProps {
  title: {
    mainTitle: string,
    secondTitle: string,
    brandList: string[]
  };
  lf: {
    swiperImg: string[],
    types: string[]
  };
  md: {
    imgs: string[],
    reports: { img: string, title: string, desc: string }[]
  };
  rt: {
    bgc: string,
    items: { cover: string, desc: string, price: string }[]
  }
}
const Floor = (props: FloorProps) => {
  const { title, lf, md, rt } = props
  return (
    <div className="floor">
      <div className="title">
        <div className="tit-lf">
          <span className='main-tt'>{title.mainTitle}</span>
          <span className='second-tt'>{title.secondTitle}</span>
        </div>
        <div className="tit-rt">
          {title.brandList.map((item, index) => (
            <span className="rt-item">{item}</span>
          ))}
        </div>
      </div>
      <div className="content">
        <div className="lf">
          <Carousel autoplay>
            {lf.swiperImg.map((item, index) => (
              <img src={item} alt="" />
            ))}
          </Carousel>
          <div className="main">
            <span className='main-tt'>热门分类</span>
            <div className="types">
              {
                lf.types.map((item, index) => (
                  <span className="type-item">{item}</span>
                ))
              }
            </div>
          </div>
        </div>
        <div className="md">
          <div className="md-tt">特推品</div>
          {md.reports.map((item, index) => (
            <div className="report-item">
              <img className='cover' src={item.img} alt="" />
              <div className="item-main">
                <p className="main-tt">{item.title}</p>
                <p className="second-tt">
                  {item.desc}
              </p>
              </div>
            </div>
          ))}
          {md.imgs.map((item, index) => (
            <img className='item-img' src={item} alt="" />
          ))}
        </div>

        <div className="rt">
          <div
            className="rt-tt"
            style={{ backgroundColor: rt.bgc }}
          >
            优品精选
          </div>
          <div className="rt-main">
            {
              rt.items.map((item, index) => {
                return (
                  <div className="rt-main-item">
                    <ShopCard
                      width={218}
                      {...item}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Floor