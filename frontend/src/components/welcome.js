// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';

// const Welcome = ({ onReserveNowClick }) => {
//     return (
//         <Box sx={{
//         textAlign: 'center',
//         padding: '20px',
//         backgroundColor: '#eaeaea', // ili #f6f1d0
//         }}>
//         <Typography variant="h4" sx={{ marginBottom: '10px' }}>
//             Welcome!
//         </Typography>
//         <Typography variant="body1" sx={{ marginBottom: '20px' }}>
//             Book your appointment for a sports activity.
//         </Typography>
//         <Button variant="contained" 
//         sx={{ backgroundColor: '#e51c27', color: '#fff' }}
//         onClick={onReserveNowClick}>
//             Reserve Now
//         </Button>
//         </Box>
//     );
// };

// export default Welcome;
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Welcome = ({ onReserveNowClick }) => {
    return (
        <Box
            sx={{
                textAlign: 'center',
                padding: '30px', // Increased padding for more space
                // backgroundColor: '#eaeaea', // ili #f6f1d0
            }}
        >
            <Typography
                variant="h2" // Larger heading for impact
                sx={{
                    fontWeight: 'bold', // Make it bold
                    marginBottom: '20px',
                    color: '#333', // Darker text color for contrast
                }}
            >
                Welcome!
            </Typography>
            <Typography
                variant="h6" // Larger body text for better readability
                sx={{
                    marginBottom: '30px',
                    color: '#666', // Softer color for the body text
                }}
            >
                Book your appointment for a sports activity and enjoy the game.
            </Typography>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#581417',
                    color: '#fff',
                    fontSize: '18px', // Larger button text
                    padding: '12px 24px', // More padding for a stronger button presence
                    boxShadow: '0 3px 8px rgba(0, 0, 0, 0.2)', // Button shadow for depth
                    '&:hover': {
                        backgroundColor: '#9e181f', // Darker red on hover
                    },
                }}
                onClick={onReserveNowClick}
            >
                Reserve Now
            </Button>
        </Box>
    );
};

export default Welcome;
