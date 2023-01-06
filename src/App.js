import './App.css'
import NavbarComponent from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Restaurant from './pages/Restaurants'
import Menus from './pages/Menus'
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {

  const [cartItems, setCartItems] = useState([])
  const getCartItems = async () => {
    const response = await axios.get('http://localhost:8000/api/menu_items/')
    setCartItems(response.data)
    console.log(response.data)
  }

  const onAdd = (item) => {
    const exist = cartItems.find((x) => x.id === item.id)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    }
  }

  return (
      <Container>
        <NavbarComponent></NavbarComponent>
        <BrowserRouter>
          <Routes>
            <Route index element={<Restaurant />} />
            <Route path="/restaurants/:id" element={<Menus />} />
          </Routes>
        </BrowserRouter>
      </Container>
  );
}

export default App;
