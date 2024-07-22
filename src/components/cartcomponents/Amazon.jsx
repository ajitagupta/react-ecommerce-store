import React, { useState } from 'react'
import list from "../../data";
import ShopCart from './ShopCart';

const Amazon = (handleClick) => {

  return (
    <section>
      {
        list.map((list) =>  (
          <ShopCart key={list.id} list={list} handleClick={handleClick} />
        ))
      }
    </section>
  )
}

export default Amazon