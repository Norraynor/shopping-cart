import '../styles/Nav.css';
import React from 'react';
import { Link  } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
        <ul>
            <li><Link className="link" to="/">Home</Link></li>
            <li><Link className="link" to="/shop">Shop</Link></li>
            <li><Link className="link" to="/shopping-cart">Shopping Cart</Link></li>
        </ul>
    </div>
  );
}

export default Nav;
