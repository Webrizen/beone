import React, { useState, useEffect, useContext } from 'react';
import '../styles/navbar.css';
import { Tooltip, Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { TaskAlt, Settings, Folder } from '@mui/icons-material';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import UserContext from '../utils/user_context';
import { BASE_API } from '../utils/common';
// const [main_user, setmain_user] = useContext(UserContext);
const Navbar = (props) => {
  const { main_user, setmain_user } = useContext(UserContext);

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

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
    console.log("main_user", main_user)
  }, [main_user])
  return (
    <>
      <header>
        <Link to="/dashboard"><div className="logo">
          <img src="/favicon.png" alt="Beone." />
        </div></Link>
        <div className="right-nav">
          {/* Redirect On Click, Yeh Frontend ka Performance thik rakhega  */}
          <Tooltip title='User Controls'>
            <IconButton
              onClick={handleClick}
              size='small'
            >
              <Avatar
                alt='Arshcode'
                src={`${BASE_API}/files/${main_user.profilePic}/serve`}
              />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className='MenuLinks'
          >
            <Link to="/profile"><MenuItem onClick={handleClose} className='Cursor'>{main_user.firstName}</MenuItem></Link>
            <Link to="/dashboard"><MenuItem onClick={handleClose} className='Cursor'>Dashboard</MenuItem></Link>
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
