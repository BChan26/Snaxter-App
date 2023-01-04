import { Link } from 'react-router-dom'
import { Button, Container, Navbar, Modal } from 'react-bootstrap'
import { useState } from 'react'


const NavbarComponent = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
  return (
    <>
        <Navbar className="bg-white shadow-sm mb-3">
            <Navbar.Brand href="/">Snaxter</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end"/>
            <Button onClick={handleShow}> Cart 0 Items</Button>
        </Navbar>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h1>Modal</h1>
            </Modal.Body>
        </Modal>
    </>
  )
}

export default NavbarComponent