import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className="auth-wrapper">
      <div className="auth-inner login">
      <form>
        <h3>Welcome to Systempackage</h3>
        <div className="mb-3">
          <input Email address
            type="email"
            className="form-control inputBox"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control inputBox"
            placeholder="Enter password"
          />
        </div>
        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary button" >
            Next
          </button>
        </div>
        <p className="forgot-password">
          <a href="#">Forgot your password?</a>
        </p>
      </form>
      </div>
      </div>
    )
  }
}