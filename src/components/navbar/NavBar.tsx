import { useLocation } from "react-router-dom"
import { navBarObject } from "../../models/navBar.model"
import { NavBarType } from "../../models/navBar.model"
import { useEffect, useState } from "react"

const NavBar = () => {
    const location = useLocation()
    const heading = navBarObject.heading

    let [spanAddOn, setspanAddOn] = useState<string | undefined>();



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
            case '/details':
                setspanAddOn(navBarObject.addOn[3]);
                break;
            default:
                setspanAddOn('404 - Page Not Found');
                break;
        }
    }, [location])

    return (
        <div className="navBar">
            <h1>{heading}
                <span>{spanAddOn}</span>
            </h1>
        </div>
    )

}
export default NavBar