import '../../assets/NavBar.css'
import { Link } from 'react-router-dom'
import { NavBarData } from '../../models/navBar.model'

type NavBarCardProps = {
    navBar: NavBarData
}

const NavBarCard = ({ navBar }: NavBarCardProps) => {
    return (
        <>
            <h1>{navBar.heading}</h1>
            <span>{navBar.feature}</span>

        </>
    )
}

export default NavBarCard