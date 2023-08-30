import React from 'react'
import "./App.css"
import Footer from './components/footer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Scorecard from './components/scorecard'
import Toss from './components/toss'
import MatchForm from './components/matchForm'
import Header from './components/header'
import { Cover } from './components/cover'

const App = () => {
  return (
      <div className='inner'>
      <BrowserRouter>
      <Header />
      <main id='main'>

      <Routes>

      <Route path = "/" element ={<Cover/>} />
     <Route path = "matchForm" element ={<MatchForm/>} />
     <Route path = "scorecard" element ={<Scorecard/>} />
     <Route path = "toss" element ={<Toss/>} />

     



      </Routes>
      </main>
     <Footer/>
    </BrowserRouter>
    </div>
    
  )
}

export default App
