import './style.css'
import { Routes, Route } from 'react-router-dom'
import TicketList from './pages/TicketList'
import CreateNewTicket from './pages/CreateNewTicket'
import EditTicket from './pages/EditTicket'
import Details from './pages/Details'
import NavBar from './components/navbar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<TicketList />} />
        <Route path="/details/:ticketId" element={<Details />} />
        <Route path="/create-new-ticket" element={<CreateNewTicket />} />
        <Route path="/edit-ticket/:ticketId" element={<EditTicket />} />
      </Routes>

    </div>
  )
}

export default App
