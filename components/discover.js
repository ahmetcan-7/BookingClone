import { urlObjectKeys } from 'next/dist/next-server/lib/utils'
import React from 'react'
import PaginationRounded from './pagination'
function Discover() {
  return (
    <div className="discover container">
      <div className="discover-top">
        <h1>Discover</h1>
        <PaginationRounded />
      </div>

      <div className="discover-bottom">
        <ul>
          <li>
            <a href="#">
              <div
                className="country"
                style={{
                  backgroundImage: `url(https://cf.bstatic.com/images/city/360x240/689/689587.jpg)`,
                  height: '135px'
                }}
              >
                <p className="country-text">
                  You'll love relaxation, restaurants and shopping during your
                  next trip to United States of America!
                </p>
              </div>
              <div className="country-name">USA</div>
            </a>
          </li>
          <li>
            <a href="#">
              <div
                className="country"
                style={{
                  backgroundImage: `url(https://cf.bstatic.com/images/city/360x240/613/613105.jpg)`,
                  height: '135px'
                }}
              >
                <p className="country-text">
                  You'll love relaxation, restaurants and shopping during your
                  next trip to United States of America!
                </p>
              </div>
              <div className="country-name">Italy</div>
            </a>
          </li>
          <li>
            <a href="#">
              <div
                className="country"
                style={{
                  backgroundImage: `url(https://cf.bstatic.com/images/city/360x240/613/613088.jpg)`,
                  height: '135px'
                }}
              >
                <p className="country-text">
                  You'll love relaxation, restaurants and shopping during your
                  next trip to United States of America!
                </p>
              </div>
              <div className="country-name">France</div>
            </a>
          </li>
          <li>
            <a href="#">
              <div
                className="country"
                style={{
                  backgroundImage: `url(https://cf.bstatic.com/images/city/360x240/971/971353.jpg)`,
                  height: '135px'
                }}
              >
                <p className="country-text">
                  You'll love relaxation, restaurants and shopping during your
                  next trip to United States of America!
                </p>
              </div>
              <div className="country-name">Spain</div>
            </a>
          </li>
          <li>
            <a href="#">
              <div
                className="country"
                style={{
                  backgroundImage: `url(https://cf.bstatic.com/images/city/360x240/972/972613.jpg)`,
                  height: '135px'
                }}
              >
                <p className="country-text">
                  You'll love relaxation, restaurants and shopping during your
                  next trip to United States of America!
                </p>
              </div>
              <div className="country-name">Germany</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Discover
