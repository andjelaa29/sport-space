import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import axios from 'axios';
import { useUser } from './userContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUserName } = useUser(); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users/login', { username, password });
      console.log(response.data);
      setUserName(response.data.username); 
      navigate('/');
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ padding: '40px', backgroundColor: '#fcfcfc', marginTop: '50px', borderRadius: '8px' }}>
        <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center', color: '#9e181f' }}>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField 
            label="Username" 
            fullWidth 
            sx={{ marginBottom: '20px' }} 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField 
            label="Password" 
            type="password" 
            fullWidth 
            sx={{ marginBottom: '20px' }} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button 
            type="submit" 
            variant="contained" 
            fullWidth 
            sx={{ backgroundColor: '#9e181f', color: '#fff', '&:hover': { backgroundColor: '#e51c27' }}}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
