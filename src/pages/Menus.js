import { Row, Col, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext";
import { useContext } from "react";

const Menu = (props) => {
  const { product } = props
  const [menus, setMenus] = useState([])
  const { id } = useParams()
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)

  useEffect(() => {
    const getMenus = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/restaurants/${id}/`
      )
      setMenus(response.data.menu_items)
      console.log(response.data.menu_items)
    }
    getMenus()
  }, [])

    return menus ? (
        <>
            <h2 align="center" className="p-3">Check out our Menu</h2>
            <Row xs={1} md={3} className="g-4">
                {menus.map((item) => (
                    <Col key={item.name}>
                        <Card>
                            <Card.Img variant="top" src={item.item_picture} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Card.Text>${item.price}</Card.Text>
                                <Button>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>


        </>
    ) : (
        <h1>Loading...</h1>
    )
                
};

export default Menu;
