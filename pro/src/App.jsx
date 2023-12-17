import { Fragment } from 'react'
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import Header from './components/Header.jsx'
import Main from './components/main.jsx'
import Footer from './components/Footer.jsx'
import Exam from './components/exam.jsx'
import Libary from './components/libary.jsx';
import Videopg from './components/videopg.jsx';
function App() {

  return (

    <BrowserRouter>

      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
      <Routes>
        <Route path='/lybr' element={<Libary />} />
        <Route path='/:userID' element={<Videopg />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

