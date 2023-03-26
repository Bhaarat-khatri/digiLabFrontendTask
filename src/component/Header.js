import React, { Component } from 'react'
import logo from '.././Subtract.png'

export default class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
        <img src = {logo} alt= "banner" className="logo"/>
        <span className="create" >Not Member? <a href="#">Create account</a></span>
        </nav>
    )
  }
}