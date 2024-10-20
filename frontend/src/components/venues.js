import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, TextField, Box, IconButton, Button } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';


const Venues = ({venues}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSportFilter = (sport) => {
    setSelectedSport(sport);
  };

  const filteredVenues = venues.filter((venue) => 
    (venue.name.toLowerCase().includes(searchTerm.toLowerCase()) || venue.city.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedSport ? venue.sport.includes(selectedSport) : true)
  );

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#fcfcfc' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Venues
      </Typography>
      {/* Search Bar */}
      <TextField
        fullWidth
        label="Search by name or city"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ marginBottom: '20px' }}
      />
      
      {/* Sport Filters */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        <IconButton
          sx={{ color: selectedSport === 'football' ? '#9e181f' : '#121010' }}
          onClick={() => handleSportFilter('football')}
        >
          <SportsSoccerIcon />
        </IconButton>
        <IconButton
          sx={{ color: selectedSport === 'basketball' ? '#9e181f' : '#121010' }}
          onClick={() => handleSportFilter('basketball')}
        >
          <SportsBasketballIcon />
        </IconButton>
        <IconButton
          sx={{ color: selectedSport === 'handball' ? '#9e181f' : '#121010' }}
          onClick={() => handleSportFilter('handball')}
        >
          <SportsHandballIcon />
        </IconButton>
        <IconButton
          sx={{ color: selectedSport === 'volleyball' ? '#9e181f' : '#121010' }}
          onClick={() => handleSportFilter('volleyball')}
        >
          <SportsVolleyballIcon />
        </IconButton>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#9e181f', color: '#fff' }}
          onClick={() => handleSportFilter('')}
        >
          Clear Filter
        </Button>
      </Box>

      {/* List */}
      <Grid container spacing={2}>
        {filteredVenues.map((venue) => (
          <Grid item xs={12} sm={6} md={4} key={venue.id}>
            <Card sx={{ height: '100%', backgroundColor: '#9e181f' }}>
              <CardMedia
                component="img"
                height="250"
                image={venue.image}
                alt={venue.name}
              />
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h5" component="div" color= "#fcfcfc">
                        {venue.name}
                        </Typography>
                        <Typography variant="body2" color="#fcfcfc">
                        City: {venue.city}
                        </Typography>
                        <Typography variant="body2" color="#fcfcfc">
                        Sport: {venue.sport.join(', ')}
                        </Typography>
                    </Box>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#fcfcfc', color: '#9e181f', marginLeft: '16px', fontWeight: 'bold' }}
                    >
                        Reserve
                    </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Venues;
