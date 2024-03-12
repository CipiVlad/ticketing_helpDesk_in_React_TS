import './App.css'
import NavBar from './components/navbar/NavBar'
import { Routes, Route } from 'react-router-dom'
import Overview from './pages/Overview'
import CreateNewTicket from './pages/CreateNewTicket'
import EditTicket from './pages/EditTicket'
import Details from './pages/Details'


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
