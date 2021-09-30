import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ItemListContainer from './itemListContainer'; 
import Cart from "./Cart.png"; 

const CartWidget = () => {
    return (
        <div>
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
         <img className="cartimg" src={Cart} alt="carito" />
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item className="widget">
            <ItemListContainer usuario = "usuario99"/>
           </Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
    
        </div>
    )
}

export default CartWidget
