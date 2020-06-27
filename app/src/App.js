import React from 'react'
import Nav from './components/shell/nav'
import Footer from './components/shell/footer'
import './App.css'

function App(props) {
  return (
    <div>
      <Nav />
      {props.children}
      <Footer />
    </div>
  )
}

export default App
