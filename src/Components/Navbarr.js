import React from 'react';
import navbargirl from '../Components/Assets/navbargirl.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Navbarr = () => {
  

    const customStyle = {color: '#DEC7E2' }
        return(
        <>
            
            <Navbar bg="white" data-bs-theme="light" style={customStyle} sticky='top' className='border ' >
                <Container>
                <Navbar.Brand style={customStyle} href="#home" className='fs-1 fw-bold'>
                <img
                src={navbargirl}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />{' '}
                Portfilo
                </Navbar.Brand>
                <Nav className="ml-800">
                    <Nav.Link  href="#home" >About</Nav.Link>
                    <Nav.Link href="#features">Projects</Nav.Link>
                    <Nav.Link href="#pricing">Connect</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            </>
        );
}

export default Navbarr;