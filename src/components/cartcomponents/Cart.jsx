import React, { useState, useEffect } from 'react';
import './Cart.css';  // Make sure to import the CSS file

const Cart = ({ cart, setCart, handlechange }) => {
  const [price, setPrice] = useState(0);

  const handleremove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  return (
    <div>
      <br/>
      <br/>
      <div style={{textAlign: 'center'}}>
        <h1>Your Shopping Cart</h1>
        <p>Meet the internet's favourite skincare.</p>
        <br/>
      </div>

      <article>  
        {cart.map((item) => (
          <div key={item.id} className='cart_box'>
            <div className='cart_img'>
              <p><img src={item.img} alt={item.name} /></p>
              <p>{item.title}</p>
            </div>
            <div className='cart_controls'>
              <button onClick={() => handlechange(item, 1)}>+</button>
              <button className='amount'>{item.amount}</button>
              <button onClick={() => handlechange(item, -1)}>-</button>
            </div>
            <div>
              <button onClick={() => handleremove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total price of the cart: </span>
          <span> = $ {price}</span>
        </div>
      </article>
    </div>
  );
};

export default Cart;
