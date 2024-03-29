import { Link, NavLink } from "react-router-dom"
import { navBarObject, NavBarType } from "../../models/navBar.model"
import { useState } from "react";



const NavBarLinks = ({ navBarObject }) => {
    return (

        <div className="navbar_links">

            <NavLink to={navBarObject.navLinks[0]}>{navBarObject.addOn[0]}</NavLink>
            <NavLink to={navBarObject.navLinks[1]}>{navBarObject.addOn[1]}</NavLink>
        </div>

    )
}
export default NavBarLinks