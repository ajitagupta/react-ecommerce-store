import React, { useState } from 'react';
import NavBar from './cartcomponents/NavBar';
import Amazon from './cartcomponents/Amazon';
import ShopCart from './cartcomponents/ShopCart';
import Cart from './cartcomponents/Cart';
import list from '../data';

const Cartform = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState(list);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let ispresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) ispresent = true;
    });
    if (ispresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handlechange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <div>
      <NavBar setShow={setShow} size={cart.length} />
      {show ? (
        <>
          <Amazon handleClick={handleClick} />
          <ShopCart list={list} handleClick={handleClick} />
        </>
      ) : (
        <Cart cart={cart} setCart={setCart} handlechange={handlechange} />
      )}
      {warning && (
        <div className='Warning' style={{textAlign: 'center'}}>
          <br/>
          Item is already added to your cart
        </div>
      )}
    </div>
  );
};

export default Cartform;
