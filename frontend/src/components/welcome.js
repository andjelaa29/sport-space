import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Welcome = ({ onReserveNowClick }) => {
    return (
        <Box sx={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#eaeaea', // ili #f6f1d0
        }}>
        <Typography variant="h4" sx={{ marginBottom: '10px' }}>
            Welcome!
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            Book your appointment for a sports activity.
        </Typography>
        <Button variant="contained" 
        sx={{ backgroundColor: '#e51c27', color: '#fff' }}
        onClick={onReserveNowClick}>
            Reserve Now
        </Button>
        </Box>
    );
};

export default Welcome;
