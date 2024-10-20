import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import axios from 'axios';


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users', { username, email, password, phone });
      console.log(response.data);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ padding: '40px', backgroundColor: '#fcfcfc', marginTop: '50px', borderRadius: '8px' }}>
        <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center', color: '#9e181f' }}>
          Register
        </Typography>
        <form onSubmit={handleRegister}>
          <TextField 
            label="Username" 
            fullWidth 
            sx={{ marginBottom: '20px' }} 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField 
            label="Email" 
            fullWidth 
            sx={{ marginBottom: '20px' }} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField 
            label="Password" 
            type="password" 
            fullWidth 
            sx={{ marginBottom: '20px' }} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Phone"
            type='tel'
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            sx={{ marginBottom: '20px'}}
          />
          <Button 
            type="submit" 
            variant="contained" 
            fullWidth 
            sx={{ backgroundColor: '#9e181f', color: '#fff', '&:hover': { backgroundColor: '#e51c27' }}}
          >
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
