import React, { useState } from 'react'
import NavBar from './cartcomponents/NavBar'
import Amazon from './cartcomponents/Amazon'
import ShopCart from './cartcomponents/ShopCart'
import Cart from './cartcomponents/Cart'
import list from '../data'

const Cartform = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState(list);

  const handleClick = (item)  =>  {
    // cart.push(item);
    // console.log(item);
    // console.log(cart);
    if (cart.indexOf(item) !== -1)  return;
    setCart([...cart, item])
  };

  const handlechange = (item, d) => {
    const ind = cart.indexOf(item)
    const arr = cart;
    arr[ind].amount = +d;

    if(arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <div>
      <NavBar setShow={setShow} sixe={cart.length} />
      {show ? (
        <Amazon handleClick={handleClick} /> 
      ) : (
        <Cart cart={cart} setCart={setCart} handlechange={handlechange}/>
      )}
      <ShopCart />
    </div>
  )
}

export default Cartform