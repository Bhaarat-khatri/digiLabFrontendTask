import React, { Component } from 'react'
import logo from '../Subtract.png'

export default class Success extends Component {
  render() {
    return (
      <div className='successPage'>
    {/* eslint-disable-next-line   */}
      <img src={logo} alt ="logo"></img>
      <div className='successText'>Success</div>
      </div>
    )
  }
}