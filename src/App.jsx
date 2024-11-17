import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mystyle from './Mystyle.module.css'
// import Formcomponent from './Formconponent'
import Usercomponent from './Usercomponent'
import styled from 'styled-components'
import Classcomponent from './Classcomponent'
import Lifecycle from './Lifecycle'
import JsonserverExample from './JsonserverExample'
import Menu from '../Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
// import Login from './Login'
function App() {
  const H4 = styled.h4`
          color : blue
  `

  const Button = styled.button`
    background-color : brown;
    color : yellow;
  `
  return (
    <>
      {/* <h3>My first Vite Practice</h3>
      <h3 className={Mystyle.txt}>Style css components</h3>
      <H4>React Styled Component Applied</H4>
      <Button>save</Button> */}
      {/* <Formcomponent /> */}
      {/* <Usercomponent /> */}
      {/* <Login /> */}
      {/* <Classcomponent name="jeck"/> */}
      {/* <Lifecycle /> */}
      {/* <JsonserverExample /> */}
      <Menu />
      
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
    </>
  )
}

export default App
