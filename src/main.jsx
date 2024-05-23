import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import About from './About/About'
import './index.css'
import Header from './Header/Header'
import Footer from './Footer/footer'
import Review from './Review/Review'
import Card from './card/Card'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >

    <Header/>
    <About/>
    <Card/>
<Review/>
<Footer/>
    </React.StrictMode>,
)
