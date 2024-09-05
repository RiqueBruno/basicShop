import React from 'react'
import './App.css'
import Content from './components/Content';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='bg-orange-500 flex flex-col min-h-screen'>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
