import './style.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Overview from './pages/Overview'
import CreateNewTicket from './pages/CreateNewTicket'
import EditTicket from './pages/EditTicket'
import Details from './pages/Details'
import NavBar from './components/navbar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/details" element={<Details />} />
        <Route path="/create-new-ticket" element={<CreateNewTicket />} />
        <Route path="/edit-ticket" element={<EditTicket />} />
      </Routes>

    </div>
  )
}

export default App
