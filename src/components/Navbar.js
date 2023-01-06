import { Link } from "react-router-dom";
import { Button, Container, Navbar, Modal, Card } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";

const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  const dispatch = GlobalState.dispatch;
  const total = state.reduce((total, item) => {
    return (total + item.price*item.quantity)
    }, 0)
  

  return (
    <>
      <Navbar className="bg-white shadow-sm mb-3">
        <Navbar.Brand href="/">Snaxter</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" />
        <Button onClick={handleShow}>Cart</Button>
      </Navbar>
      
          <Modal class="modal fade" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Your Order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Cart />
            </Modal.Body>
          </Modal>
    </>
  );
};

export default NavbarComponent;
