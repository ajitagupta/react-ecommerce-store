import React from 'react'

const ShopCart = ({ list, handleClick }) => {
    if (list)   {
        const {title, price, img} = list;
        const newhandleclick = () =>    {
            handleClick(list);
        };

        return (
            <section>
            <div className="cards">
                <div className="image_box"> 
                    <img src={img} alt="product" />
                    <div className="details">
                        <p>{title}</p>
                        <p>Price: {price}$</p>
                        <button onClick={newhandleclick}>Add to Cart</button>
                    </div>
                </div>
            </div>
            </section>
        )
    }   else    {
        return <p>There are no items</p>
    }
}

export default ShopCart