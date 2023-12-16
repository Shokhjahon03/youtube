import { Fragment } from 'react'

import './App.css'
import Header from './components/Header.jsx'
import Main from './components/main.jsx'
import Footer from './components/Footer.jsx'
import Exam from './components/exam.jsx'

function App() {

  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
      {/* <Exam /> */}
    </Fragment>
  )
}

export default App

