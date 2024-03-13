import React from 'react'
import { NavBarData } from '../../models/navBar.model'
import NavBarCard from '../cards/NavBarCard'

type NavBarListProps = {
    navBar: NavBarData[]
}

const NavBarList = ({ navBar }: NavBarListProps) => {
    return (
        <nav className='navBar'>

            {
                navBar.map((element, index: number) => (
                    <NavBarCard
                        key={index}
                        navBar={element}
                    />

                ))
            }

        </nav>
    )
}

export default NavBarList