import React from 'react'
import { Navbar, Nav } from 'react-bootstrap/'

const navbar = () => {
    return (
        <div>
            <Navbar fixed="top" expand="lg">
                <Navbar.Brand href="#"><img src="/images/brand.png" width="150" height="75" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <a className="nav-link" href="#about"><i class="fa fa-fw fa-user" />About</a>
                        <a className="nav-link" href="#"><i class="fa fa-fw fa-trophy" />Achievements</a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default navbar