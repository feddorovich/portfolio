import React from 'react'
import './App.scss'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Skills } from './components/Skills/Skills'
import { Projects } from './components/Projects/Projects'
import { Contacts } from './components/Contacts/Сontacts'
import { Footer } from './components/Footer/Footer'
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'
import { Resume } from './components/Resume/Resume'
import { AboutMe } from './components/AboutMe/AboutMe'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AboutMe/>
      <Skills />
      <Resume />
      <Projects />
      <Contacts />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
