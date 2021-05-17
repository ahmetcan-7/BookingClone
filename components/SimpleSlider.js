import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        right: '28px'
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', zIndex: 1, left: '3px' }}
      onClick={onClick}
    />
  )
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 4
          }
        },

        {
          breakpoint: 750,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }
    return (
      <div className="slider container" style={{ marginTop: '1.5rem' }}>
        <h2 style={{ fontWeight: 700, margin: '1rem 0', fontSize: '1.5rem' }}>
          Browse by property type{' '}
        </h2>
        <Slider {...settings}>
          <div className="each-slider">
            <img
              alt=""
              src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&amp;o="
              width="207px"
              height="180px"
              style={{ objectFit: 'cover' }}
            ></img>
            <div className="slider-article" style={{ paddingTop: '1rem' }}>
              <a href="#" style={{ fontWeight: 700, color: 'black' }}>
                Hotels
              </a>
              <p style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                775.623 hotels
              </p>
            </div>
          </div>
          <div>
            <img
              alt=""
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg "
              width="207px"
              height="180px"
              style={{ objectFit: 'cover' }}
            ></img>
            <div className="slider-article" style={{ paddingTop: '1rem' }}>
              <a href="#" style={{ fontWeight: 700, color: 'black' }}>
                Hotels
              </a>
              <p style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                775.623 hotels
              </p>
            </div>
          </div>
          <div>
            <img
              alt=""
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg "
              width="207px"
              height="180px"
              style={{ objectFit: 'cover' }}
            ></img>
            <div className="slider-article" style={{ paddingTop: '1rem' }}>
              <a href="#" style={{ fontWeight: 700, color: 'black' }}>
                Hotels
              </a>
              <p style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                775.623 hotels
              </p>
            </div>
          </div>
          <div>
            <img
              alt=""
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
              width="207px"
              height="180px"
              style={{ objectFit: 'cover' }}
            ></img>
            <div className="slider-article" style={{ paddingTop: '1rem' }}>
              <a href="#" style={{ fontWeight: 700, color: 'black' }}>
                Hotels
              </a>
              <p style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                775.623 hotels
              </p>
            </div>
          </div>
          <div>
            <img
              alt=""
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg "
              width="207px"
              height="180px"
              style={{ objectFit: 'cover' }}
            ></img>
            <div className="slider-article" style={{ paddingTop: '1rem' }}>
              <a href="#" style={{ fontWeight: 700, color: 'black' }}>
                Hotels
              </a>
              <p style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                775.623 hotels
              </p>
            </div>
          </div>
          <div>
            <img
              alt=""
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg  "
              width="207px"
              height="180px"
              style={{ objectFit: 'cover' }}
            ></img>
            <div className="slider-article" style={{ paddingTop: '1rem' }}>
              <a href="#" style={{ fontWeight: 700, color: 'black' }}>
                Hotels
              </a>
              <p style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                775.623 hotels
              </p>
            </div>
          </div>

          <div>
            <img
              alt=""
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_glamping/6e181b9e942c160f4605239be7ddc1728cbcc4c8.jpg "
              width="207px"
              height="180px"
              style={{ objectFit: 'cover' }}
            ></img>
            <div className="slider-article" style={{ paddingTop: '1rem' }}>
              <a href="#" style={{ fontWeight: 700, color: 'black' }}>
                Hotels
              </a>
              <p style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                775.623 hotels
              </p>
            </div>
          </div>

          <div>
            <img
              alt=""
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_aparthotel/10e092f390b128dcff92727912299eef7824b751.jpg  "
              width="207px"
              height="180px"
              style={{ objectFit: 'cover' }}
            ></img>
            <div className="slider-article" style={{ paddingTop: '1rem' }}>
              <a href="#" style={{ fontWeight: 700, color: 'black' }}>
                Hotels
              </a>
              <p style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                775.623 hotels
              </p>
            </div>
          </div>

          <div>
            <img
              alt=""
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-holidayhomes_300/604c7484d34a9e8791c2d5a0e2df4bc8c803dc7c.jpg  "
              width="207px"
              height="180px"
              style={{ objectFit: 'cover' }}
            ></img>
            <div className="slider-article" style={{ paddingTop: '1rem' }}>
              <a href="#" style={{ fontWeight: 700, color: 'black' }}>
                Hotels
              </a>
              <p style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                775.623 hotels
              </p>
            </div>
          </div>

          <div>
            <img
              alt=""
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_guest_house/70618d86d515349ce56296a56d2eaaf283fd1542.jpg "
              width="207px"
              height="180px"
              style={{ objectFit: 'cover' }}
            ></img>
            <div className="slider-article" style={{ paddingTop: '1rem' }}>
              <a href="#" style={{ fontWeight: 700, color: 'black' }}>
                Hotels
              </a>
              <p style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                775.623 hotels
              </p>
            </div>
          </div>

          <div>
            <img
              alt=""
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_hostels/cd5489c0d29025a9ca9daa602ac1581ba042bc69.jpg "
              width="207px"
              height="180px"
              style={{ objectFit: 'cover' }}
            ></img>
            <div className="slider-article" style={{ paddingTop: '1rem' }}>
              <a href="#" style={{ fontWeight: 700, color: 'black' }}>
                Hotels
              </a>
              <p style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                775.623 hotels
              </p>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}
