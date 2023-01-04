import './App.css'
import NavbarComponent from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Restaurant from './pages/Restaurants'
import Success from './pages/Success'
import Cancel from './pages/Cancel'
import Menus from './pages/Menus'
import { CartProvider } from './CartContext'


function App() {
  return (
    <CartProvider>
      <Container>
        <NavbarComponent></NavbarComponent>
        <BrowserRouter>
          <Routes>
            <Route index element={<Restaurant />} />
            <Route path="/restaurants/:id" element={<Menus />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
