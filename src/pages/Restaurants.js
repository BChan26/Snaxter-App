import { Row, Col, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/restaurants/`
      );
      setRestaurants(response.data);
    };
    getRestaurants();
    console.log(restaurants);
  }, []);
  return (
    <>
      <h1 align="center" className="p-3" style={{color: 'Black'}}>Restaurants Near You</h1>
      <Row xs={1} md={3} className="g-4">
        {restaurants.map((item, index) => (
          <Col key={index}>
            <Link to={`/restaurants/${item.id}`}
            className="text-dark" style={{textDecoration: 'none'}}
            >
            <Card>
              <Card.Img variant="top" src={item.restaurant_picture} />
              <Card.Body className="rest-card">
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Restaurant;
