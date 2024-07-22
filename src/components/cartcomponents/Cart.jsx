import React, { useState, useEffect } from 'react';

const Cart = ({ cart, setCart, handlechange }) => {
  const [price, setPrice] = useState(0);

  const handleremove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  return (
    <div>
      <article>
        {cart.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={item.img} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              <p>{item.name}</p>
            </div>
            <div>
              <button onClick={() => handlechange(item, 1)} style={{ margin: '5px' }}>+</button>
              <button onClick={() => handlechange(item, -1)} style={{ margin: '5px' }}>-</button>
              <button onClick={() => handleremove(item.id)} style={{ margin: '5px' }}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total" style={{ marginTop: '20px' }}>
          <span>Total price of the cart: </span>
          <span>$ {price}</span>
        </div>
      </article>
    </div>
  );
};

export default Cart;
