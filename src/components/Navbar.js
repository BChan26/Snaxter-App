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
    const fixedTotal = total.toFixed(2);
  

  return (
    <>
      <Navbar className="bg-dark shadow-lg mb-3">
        <Navbar.Brand href="/"
        style={{color: 'Black', fontSize: '30px', fontweight: 'bold'}}
        >Snaxter</Navbar.Brand>
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
              {state.length > 0 && (
              <div className="total">
                <h2>Total:{fixedTotal}</h2>
              </div>
            )}
            </Modal.Body>
          </Modal>
    </>
  );
};

export default NavbarComponent;
