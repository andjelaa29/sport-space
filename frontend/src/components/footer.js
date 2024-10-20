import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#121010',
        color: '#fcfcfc',
        padding: '20px',
        position: 'fixed',
        bottom: 0,
        textAlign: 'center',
        width: '100%'
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Sport Space
      </Typography>
      <Box sx={{ marginTop: '10px' }}>
        <Link href="/about" color="#fcfcfc" sx={{ margin: '0 15px' }}>
          About
        </Link>
        <Link href="/contact" color="#fcfcfc" sx={{ margin: '0 15px' }}>
          Contact
        </Link>
      </Box>
      <Typography variant="body2" sx={{ marginTop: '10px' }}>
        Contact us: <a href="mailto:info@sportspace.com" style={{ color: '#fcfcfc' }}>info@sportspace.com</a>
      </Typography>
    </Box>
  );
};

export default Footer;
