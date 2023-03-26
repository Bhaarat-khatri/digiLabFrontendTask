import React, { Component } from 'react'
import Banner from '.././Banner.png'

export default class banner extends Component {
  render() {
    return (
      <div className="auth-inner">
      <img src = {Banner} alt= "banner" className='banner' />
      {/* <img src = {Banner1} alt= "banner1" className='banner1' /> */}
      {/* <img src = {Banner2} alt= "banner2" className='banner2' /> */}
      </div>
    )
  }
}