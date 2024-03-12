import NavBarType from '../../models/navBar.model'
import '../../assets/NavBar.css'
import { Link } from 'react-router-dom'



const NavBar = () => {
    const navObj: NavBarType = {
        heading: 'Ticketing Help Desk Service - ',
        navTitles: ['Incidents', 'Create New Ticket', 'Edit Ticket'],
        navLinks: ['/overview', '/create-new-ticket', '/edit-ticket']
    }

    return (
        <nav className='navBar'>
            <h1>{navObj.heading}</h1>
            {
                <Link to={navObj.navLinks[0]}>{navObj.navTitles[0]}</Link>
            }
        </nav >
    )
}

export default NavBar