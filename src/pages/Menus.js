import { Row, Col, Card, Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Menu = () => {
  const [menus, setMenus] = useState([])
  const { id } = useParams()

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

  const GlobalState=useContext(CartContext)
  const dispatch=GlobalState.dispatch
  console.log(GlobalState)

    return menus ? (
        <>
            <h2 align="center" className="p-3">Check out our Menu</h2>
            <Row xs={1} md={3} className="g-4">
                {menus.map((item, index) => (
                  item.quantity =1,
                    <Col key={index}>
                        <Card>
                            <Card.Img variant="top" src={item.item_picture} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Card.Text>${item.price}</Card.Text>
                                <Button onClick={() => dispatch({
                                  type: 'ADD',
                                  payload: item
                                  })}>Add to Cart</Button>
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
