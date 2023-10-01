import React from 'react'
import { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order'; 



const showOrders = (props) => {
  let summa = 0
  props.orders. forEach(el => summa += Number.parseFloat(el.price)) //подсчет суммы в корзине 
  return(<div>
    {props.orders.map(el =>(
    <Order onDelete={props.onDelete}key={el.id} item={el} />
    ))}  
    <p className='summa'>Total: {summa}$</p>  
  </div>)
}

const showNothing = () => {
  return(<div className='empty'>
    <h2>Корзина пуста</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  
  return (
    <header>
        <div>
            <span className = 'logo'>House Staff</span> 
            <ul class='nav'>
              <li><a href="./about.html">ABOUT US</a></li>
              <li><a href="./contacts.html">CONTACTS</a></li>
              <li><a href="./map.html">ON MAP</a></li>
            </ul>
             <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className = {`shop-cart-button ${cartOpen && 'active'}`} />
             {cartOpen &&
              <div className = 'shop-cart'>
                {props.orders.length > 0 ?
                  showOrders(props) : showNothing ()}
              </div>
             }

        </div>
        <div className = 'presentation'></div>
    </header>
  )
}
