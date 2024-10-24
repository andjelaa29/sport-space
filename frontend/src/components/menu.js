import React from 'react';
import { AppBar, Toolbar, Box, Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './userContext';
import { Link } from 'react-router-dom';

const MenuComponent = () => {
  const [anchorElAuth, setAnchorElAuth] = useState(null);
  const { userName, setUserName, logout } = useUser();

  const navigate = useNavigate();

  const handleAuthMenuClick = (event) => {
    setAnchorElAuth(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElAuth(null);
  };

  const handleLoginClick = () => {
    handleClose();
    navigate('/login'); 
  };

  const handleRegisterClick = () => {
    handleClose();
    navigate('/register'); 
  };

  const handleLogout = () => {
    logout();
    handleClose();
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#121010' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, width: '100%' }}>
            <Button 
                color="inherit" 
                sx={{ 
                    '&:hover': { backgroundColor: '#9e181f' },
                    fontSize: '18px',
                    flexGrow: 1, 
                    margin: '0 8px',
                }}
                onClick={() => navigate('/')}
            >
                Home
            </Button>
            <Button 
                color="inherit" 
                sx={{ 
                    '&:hover': { backgroundColor: '#9e181f' },
                    fontSize: '18px', 
                    flexGrow: 1, 
                    margin: '0 8px',
                 }}
                 onClick={() => navigate('/venues')}
            >
                Venues
            </Button>
            <Button 
                color="inherit" 
                sx={{ 
                    '&:hover': { backgroundColor: '#9e181f' },
                    fontSize: '18px',
                    flexGrow: 1, 
                    margin: '0 8px',
                 }}
            >
                About
            </Button>
            </Box>
            {userName ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/profile" style={{ color: '#fff', textDecoration: 'none', marginRight: '8px' }}>
                  <span>{userName}</span>
                </Link>
                <Box sx={{ width: '1px', height: '24px', backgroundColor: '#fff', margin: '0 8px' }} />
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
              </Box>
              ) : (
              <Button color="inherit" sx={{fontSize: '18px'}} onClick={handleAuthMenuClick}>Login/Register</Button>
              )}
            <Menu
              anchorEl={anchorElAuth}
              open={Boolean(anchorElAuth)}
              onClose={handleClose}
              MenuListProps={{
                sx: {
                  backgroundColor: '#121010', 
                  color: '#fff', 
                }
              }}
            >
                <MenuItem onClick={handleLoginClick} sx={{
              '&:hover': {
                backgroundColor: '#9e181f', 
              },
              color: '#fff',
              fontSize: '18px'
            }}>Login</MenuItem>
                <MenuItem onClick={handleRegisterClick} sx={{
              '&:hover': {
                backgroundColor: '#9e181f', 
              },
              color: '#fff',
              fontSize: '18px'
            }}>Register</MenuItem>
            </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MenuComponent;
