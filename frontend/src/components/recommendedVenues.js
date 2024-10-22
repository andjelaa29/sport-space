import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Card, CardContent, CardMedia, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const RecommendedVenues = ({venues}) => {

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#9e181f' }}>
      <Typography variant="h5" sx={{ marginBottom: '20px', textAlign: 'center', color: '#fcfcfc' }}>
        Recommended
      </Typography>
      <Grid container spacing={2}>
        {venues.map((venue, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link to={`/venues/${venue._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={venue.image} 
                  alt={venue.name}
                />
                <CardContent sx={{flexGrow: 1}}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="h6" component="div">
                        {venue.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        City: {venue.city}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: '#581417', color: '#fff', marginLeft: '16px' }}
                    >
                      Reserve
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RecommendedVenues;
