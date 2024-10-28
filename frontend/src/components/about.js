import React from 'react';
import { Container, Typography, Box, Grid, List, ListItem, ListItemText, Card, CardContent, CardMedia } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: '#9e181f', color: '#fcfcfc', borderRadius: 2, height: '100%' }}>
            
            <CardMedia
              component="img"
              height="200"
              image="sport.jpg" 
              alt="Sport Space Background"
            />

            <CardContent>
              <Typography variant="h4" component="h2" gutterBottom>
                About Sport Space
              </Typography>
              <Typography variant="body1">
                Sport Space was founded with the goal of making sports facility bookings as easy and accessible as possible.
                Whether you’re looking to play football, basketball, tennis, or any other sport, Sport Space provides a seamless
                and reliable booking experience. Our mission is to connect players with their favorite venues, promoting an active
                lifestyle through sports.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: '#9e181f', color: '#fcfcfc', borderRadius: 2, height: '100%' }}>
            <CardContent>
              <Typography variant="h4" component="h2" gutterBottom>
                Key Features
              </Typography>
              <List sx={{ listStyleType: 'decimal', pl: 3 }}>
                {[
                  "Easy-to-use booking interface for various sports facilities",
                  "Real-time availability updates",
                  "Customized recommendations for popular venues",
                  "User-friendly profile management with reservation history",
                  "Responsive design for all devices"
                ].map((feature, index) => (
                  <ListItem key={index} sx={{ display: 'list-item' }}>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
};

export default About;
