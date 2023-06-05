import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Tooltip, Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { TaskAlt, Settings, Folder } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header>
        <Link to="/"><div className="logo">
        <img src="/favicon.png" alt="Beone." />
      </div></Link>
        <div className="right-nav">
          {/* Redirect On Click, Yeh Frontend ka Performance thik rakhega  */}
          <Tooltip title="Current Task">
            <div className='ico'><TaskAlt /></div>
          </Tooltip>
          <Tooltip title="Your Personal Data Folder">
            <div className='ico'><Folder /></div>
          </Tooltip>
          <Tooltip title='User Controls'>
            <IconButton
              onClick={handleClick}
              size='small'
            >
              <Avatar
                alt='Brshcode'
                src='/static/images/avatar/3.jpg'
              />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className='MenuLinks'
          >
            <Link to="/profile"><MenuItem onClick={handleClose} className='Cursor'>My Profile</MenuItem></Link>
            <Link to="/dashboard"><MenuItem onClick={handleClose} className='Cursor'>Dashboard</MenuItem></Link>
            <Link to="/settings"><MenuItem onClick={handleClose} className='Cursor'>Settings</MenuItem></Link>
            <hr />
            <MenuItem onClick={handleClose} className='Cursor'>Logout</MenuItem>
          </Menu>
        </div>
      </header>
    </>
  );
}

export default Navbar;
