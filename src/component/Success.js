import React, { Component } from 'react'
import logo from '../Subtract.png'

export default class Success extends Component {
  render() {
    return (
      <div className='successPage'>
      <img src={logo}></img>
      <div className='successText'>Success</div>
      </div>
    )
  }
}