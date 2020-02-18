import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';




export const NavigationBar = () => (
    <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="news">News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
    </Navbar>
)