import CartWidget from './CartWidget';
import Navbar  from 'react-bootstrap/Navbar';
import  Nav  from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';

function NavBar() {
    return (   <div> 

      <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Power Up</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Consolas</Nav.Link>
      <Nav.Link href="#features">Juegos</Nav.Link>
      <Nav.Link href="#pricing">Contactos</Nav.Link>
    </Nav>
    <CartWidget/>
    </Container>
  </Navbar>

      
  


             </div>
    )
}

export default NavBar;