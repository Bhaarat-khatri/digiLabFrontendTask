import React, { Component } from 'react'

export default class OTP extends Component {
  render() {
    return (
      <div className="auth-wrapper">
          <div className="auth-inner login">
      <form>
        <h3>Enter the  verification code to continue</h3>
        <div className="mb-3 otpHead2">
          we sent to <a href="#"> hellouser@gmail.com </a>. If you don't see it, check your stream
        </div>
        <div className="mb-3 otpHead3">
          <input
            type="number"
            className="form-control inputBox otpInput"
          />
          <input
            type="number"
            className="form-control inputBox otpInput"
          />
          <input
            type="number"
            className="form-control inputBox otpInput"
          />
          <input
            type="number"
            className="form-control inputBox otpInput"
          />
          <input
            type="number"
            className="form-control inputBox otpInput"
          />
          <input
            type="number"
            className="form-control inputBox otpInput"
          />
        </div>
        <div className='otpHead4'>
          <button>Back</button>
          <span>Resend 00:10</span>
        </div>
      </form>
      </div>
      </div>
    )
  }
}