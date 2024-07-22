import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/online-shop.png';
import './NavBar.css';
import SearchIcon from '@mui/icons-material/Search';
import SearchWhiteIcon from '../images/searchicon2.png';
import MenuIcon from '@mui/icons-material/Menu';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
  const [data, setData] = useState(false);
  const [menu, setMenu] = useState(false);

  const inputHandler = () => {
    setData(!data);
  };

  const menuHandler = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className='navbar_div' style={{ backgroundColor: '#333', color: '#fff' }}>
        <div>
          <div className='navbar_main'>
            <div onClick={inputHandler}></div>
            <div>
              <div></div>
              <div className='announcement_banner' style={{ color: '#fff' }}>
                <MenuIcon onClick={menuHandler} style={{ color: '#fff' }} />
                <span>Free shipping on orders $40+ !!!</span>
                <div className='right_topnav'>
                  <SearchIcon onClick={inputHandler} style={{ color: '#fff' }} />
                  <LocalMallIcon style={{ color: '#fff' }} />
                  <ShoppingCartIcon style={{ color: '#fff' }} />
                </div>
              </div>
            </div>
          </div>
          <ul>
            <li><img src={logo} className="heading_logo" alt="" /></li>
            <li><Link to="/" style={{ color: '#fff' }}>Home</Link></li>
            <li><Link to="/privacy" style={{ color: '#fff' }}>Privacy</Link></li>
            <li><Link to="/loginform" style={{ color: '#fff' }}>Loginform</Link></li>
            <li><Link to="/contact" style={{ color: '#fff' }}>Contact</Link></li>
            <li><Link to="/signup" style={{ color: '#fff' }}>Signup</Link></li>
            <div className='searchbar_div'>
              <input type='text' placeholder='Search here ' style={{ marginRight: '20px', backgroundColor: '#555', color: '#fff' }} />
              <img src={SearchWhiteIcon} style={{ cursor: 'pointer', height: '100%', marginLeft: '0px', padding: '0px' }} alt="close" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
