import { useState } from 'react'
// import AppRouter from './AppRouter'
import Homepage from './Homepage/Homepage'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <>
      <div className="Body">
        <Homepage></Homepage>
        <Footer></Footer>
      </div>
      
    </>
  )
}

export default App;
