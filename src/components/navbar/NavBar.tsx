import { useLocation, useParams } from "react-router-dom"
import { navBarObject } from "../../models/navBar.model"
import { useEffect, useState } from "react"
import NavBarLinks from "./NavBarLinks"



const NavBar = () => {
    const location = useLocation()
    const detailsPathname = window.location.pathname

    const heading = navBarObject.heading

    const [spanAddOn, setspanAddOn] = useState<string | undefined>();


    useEffect(() => {
        const path = location.pathname;
        switch (path) {
            case '/':
                setspanAddOn(navBarObject.addOn[0]);
                break;
            case '/create-new-ticket':
                setspanAddOn(navBarObject.addOn[1]);
                break;
            case '/edit-ticket':
                setspanAddOn(navBarObject.addOn[2]);
                break;
            case `${detailsPathname}`:
                setspanAddOn(navBarObject.addOn[3]);
                break;
            default:
                setspanAddOn('404 - Page Not Found');
                break;
        }
    }, [location])

    return (
        <nav className="navBar">
            <h1>{heading}
                <span> {spanAddOn}</span>
            </h1>
            <NavBarLinks navBarObject={navBarObject} />
        </nav>
    )

}
export default NavBar