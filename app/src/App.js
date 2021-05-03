import React from 'react'
import Nav from './components/shell/nav'
import Footer from './components/shell/footer'
import './App.css'
import MobileWebsiteNotice from './components/mobileWebsiteNotice'

function App(props) {
  return (
    <div>
      <MobileWebsiteNotice />
      <Nav />
      {props.children}
      <Footer />
    </div>
  )
}

export default App
