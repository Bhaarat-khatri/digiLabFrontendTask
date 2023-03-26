import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './component/login'
import OTP from './component/otp'
import Header from './component/Header'
import Banner from './component/Banner'
import Footer from './component/Footer'
import Success from './component/Success'

function App() {
  return (
    <Router>
      <div className="App">
      
          <Routes>
              <Route exact path="/" element={
              <>
              <Header />
              <div className="auth-wrapper">
                <div className="auth-inner login">
                  <Login /> 
                </div>
                <Banner />
              </div>
              <Footer /> 
              </> } />
              <Route path="/otp" element={ <>
              <Header />
              <div className="auth-wrapper">
                <div className="auth-inner login">
                  <OTP /> 
                </div>
                <Banner />
              </div>
              <Footer /> 
              </>} />
              <Route path="/success" element={<Success />} />
           </Routes>
      </div>   
    </Router>
  )
}
export default App