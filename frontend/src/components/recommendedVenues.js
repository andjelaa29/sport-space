import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Grid } from '@mui/material';

const RecommendedVenues = ({ venues }) => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h5" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Preporučena Mesta
      </Typography>
      <Grid container spacing={2}>
        {venues.map((venue, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image={venue.image} 
                alt={venue.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {venue.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Dostupno vreme: {venue.availableTime}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                <Button variant="contained" sx={{ backgroundColor: '#e51c27', color: '#fff' }}>
                  Rezerviši
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RecommendedVenues;
