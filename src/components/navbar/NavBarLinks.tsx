import { Link } from "react-router-dom"



const NavBarLinks = (props) => {

    return (
        <Link to={props.navLinks}>
            {props.navLinks}
        </Link>
    )
}
export default NavBarLinks