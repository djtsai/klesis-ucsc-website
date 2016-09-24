import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

import headerIcon from '../../../assets/components/header/header_icon.png'

import './header.scss'

const Header = React.createClass({
    render() {
        return (
            <Navbar id="menu-header">
                <Navbar.Header>
                    <Navbar.Brand>
                        <img src={ headerIcon }/>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem href="https://www.flickr.com/photos/gracepointsantacruz/">Photos</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem href="/">Contact</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem href="/">Church</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem href="/">Blog</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem href="/">About</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem href="/">Home</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
})

export default Header
