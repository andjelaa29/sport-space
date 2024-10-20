import React from 'react';
import { AppBar, Toolbar, Box, Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MenuComponent = () => {
  const [anchorElAuth, setAnchorElAuth] = useState(null);

  const navigate = useNavigate();

  const handleAuthMenuClick = (event) => {
    setAnchorElAuth(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElAuth(null);
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
            <Button color="inherit" sx={{fontSize: '18px'}} onClick={handleAuthMenuClick}>Login/Register</Button>
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
                <MenuItem onClick={handleClose} sx={{
              '&:hover': {
                backgroundColor: '#9e181f', 
              },
              color: '#fff',
              fontSize: '18px'
            }}>Login</MenuItem>
                <MenuItem onClick={handleClose} sx={{
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
