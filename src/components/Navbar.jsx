import { useState } from 'react'
import {Navbar as Navbars, Nav, NavbarBrand, Container, NavbarToggler, NavItem, NavLink, Collapse} from 'reactstrap'

export default function Navbar() {
    const [isNavOpen, setNavOpen] = useState(false)

    const toggleNav = () => {
        setNavOpen(!isNavOpen)
    }

    return(
        <Navbars color='light' expand="sm" light>
            <Container>
                <NavbarBrand href='/'>
                    StudioHub
                </NavbarBrand>
                <NavbarToggler onClick={toggleNav} />
                <Collapse isOpen={isNavOpen}>
                    <Nav navbar className='me-auto'>
                        <NavItem>
                            <NavLink>
                                Home
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>            
        </Navbars>
    )
}