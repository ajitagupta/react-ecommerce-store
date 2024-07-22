import React from 'react';
import './ShopCart.css';

const ShopCart = ({ list, handleClick }) => {
if (!Array.isArray(list) || list.length === 0) {
    {return ;}
  }

  return (
    <>
    <br/>
    <br/>
    <div style={{textAlign: 'center'}}>
      <h1>Best Quality</h1>
      <p>It is a long established fact that a reader will be distracted by the readable content</p>
      <br/> 
    </div>
     <div className="card-row">
      {
        list.map((item) => {
            const { id, title, price, img } = item;
            const newhandleclick = () => {
            handleClick(item);
            };

            return (
            <div className="cards" key={id}>
                <div className="image_box">
                <img src={img} alt={title} />
                <div className="details">
                    <p><b>{title}</b></p>
                    <p>Price: ${price}</p>
                    <button onClick={newhandleclick}>Add to Cart</button>
                </div>
                </div>
            </div>
            );
        })
      }
    </div>
    </>
  );
};

export default ShopCart;
