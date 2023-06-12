import React, { useState, useEffect, useContext } from 'react';
import '../styles/navbar.css';
import '../styles/loading.css';
import { Tooltip, Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { TaskAlt, Settings, Folder } from '@mui/icons-material';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import CircularStatic from './circularprogresswithlabel';

import UserContext from '../utils/user_context';
import { BASE_API } from '../utils/common';
import CurrOrderContext from '../utils/order_context';

const Navbar = (props) => {
  const { main_user, setmain_user } = useContext(UserContext);
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currOrder");
    navigate("/login");
  };
  useEffect(() => {
    console.log("main_user", main_user);
    if (main_user.profilePic) {
      setLoading(false);
    }
  }, [main_user])

  return (
    <>
      <header>
        <Link to="/">
          <div className="logo">
            <img src="/favicon.png" alt="Beone." />
          </div>
        </Link>
        <div className="right-nav">
          <Tooltip title='Status'>
            <div className="ico">
              <CircularStatic order={currOrder} />
            </div>
          </Tooltip>
          <Tooltip title='User Controls'>
            <IconButton
              onClick={handleClick}
              size='small'
            >
              {loading ? (
                <div className="avatar-skeleton" />
              ) : (
                <Avatar
                  alt='Arshcode'
                  src={`${BASE_API}/files/${main_user.profilePic}/serve`}
                />
              )}
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className='MenuLinks'
          >
            <Link to="/profile"><MenuItem onClick={handleClose} className='Cursor'>{main_user.firstName}</MenuItem></Link>
            <Link to="/order/:id/welcome"><MenuItem onClick={handleClose} className='Cursor'>Dashboard</MenuItem></Link>
            <Link to="/settings"><MenuItem onClick={handleClose} className='Cursor'>Settings</MenuItem></Link>
            <hr />
            <MenuItem onClick={handleLogout} className='Cursor'>Logout</MenuItem>
          </Menu>
        </div>
      </header>
    </>
  );
}

export default Navbar;
