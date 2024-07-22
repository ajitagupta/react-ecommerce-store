import React from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import "./NavBar.css"

const NavBar = ({ setShow, size }) => {
  return (
    <nav>
        <div className='nav_box'>
                <span className='my_shop'>

                </span>
                <div className='footer'>
                 <h3 onClick={() => setShow(true)}><button className='nav_button'>MyStore</button></h3>
                 <div className='right_topnav'>
                    <div className="cartContainer">
                      <ShoppingCartIcon style={{ fontSize: '24px' }} onClick={() => setShow(false)}/>
                      <span className='shoppedItems'>{size}</span>
                    </div>
                 </div>

                </div>
        </div>

    </nav>
  )
}

export default NavBar