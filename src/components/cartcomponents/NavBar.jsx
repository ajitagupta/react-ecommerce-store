import React from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import "./NavBar.css"

const NavBar = ({ setShow }) => {
  return (
    <nav>
        <div className='nav_box'>
                <span className='my_shop'>

                </span>
                <div className='footer'>
                 <h3 onClick={() => setShow(true)}>MyStore</h3>
                 <div className='right_topnav'>
                    <div className="cartContainer">
                      <ShoppingCartIcon style={{ fontSize: '24px' }} onClick={() => setShow(false)}/>
                      <span className='shoppedItems'>0</span>
                    </div>
                 </div>

                </div>
        </div>

    </nav>
  )
}

export default NavBar