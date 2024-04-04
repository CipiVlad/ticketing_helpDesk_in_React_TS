import { Link, NavLink, useLocation } from "react-router-dom"
import { navBarObject, NavBarType } from "../../models/navBar.model"
import { useState } from "react";

import { Box, TextField } from "@mui/material"


const NavBarLinks = ({ navBarObject }) => {

    const { pathname } = useLocation()
    return (

        <div className="navbar_links">

            <NavLink to={navBarObject.navLinks[0]}>{navBarObject.addOn[0]}</NavLink>
            <NavLink to={navBarObject.navLinks[1]}>{navBarObject.addOn[1]}</NavLink>

            {
                pathname === '/'
                    ? <Box
                        sx={{
                            width: 300,
                        }}
                    >
                        <TextField fullWidth label="search tickets" id="fullWidth" variant="outlined" />
                    </Box>

                    :
                    null

            }
        </div>

    )
}
export default NavBarLinks