import './App.css'
import NavbarComponent from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Restaurant from './pages/Restaurants'
import Menus from './pages/Menus'
import Cart from './components/Cart'
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {

  return (
      <Container>
        <NavbarComponent></NavbarComponent>
        <BrowserRouter>
          <Routes>
            <Route index element={<Restaurant />} />
            <Route path="/restaurants/:id" element={<Menus />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="Navbar" element={<NavbarComponent />} />
          </Routes>
        </BrowserRouter>
      </Container>
  );
}

export default App;
