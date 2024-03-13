import './style.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar/NavBarList'
import Overview from './pages/Overview'
import CreateNewTicket from './pages/CreateNewTicket'
import EditTicket from './pages/EditTicket'
import Details from './pages/Details'
import { NavBarData } from './models/navBar.model'


function App() {
  const data = {
    heading: "Ticketing Help Desk Service - ",
    feature: ["Incidents", "Create A New Ticket", "Edit Ticket", "Details"],
    navLinks: ["/", "/create-new-ticket", "/edit-ticket", "/details"],
  }
  const [navBar, setNavBar] = useState<NavBarData[]>([data])

  return (
    <div className="App">
      {/* <NavBar navBar={navBar} /> */}
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
