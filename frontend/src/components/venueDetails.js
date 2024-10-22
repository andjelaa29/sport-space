import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from './userContext';
import axios from 'axios';
import {
    Box,
    Typography,
    Button,
    Grid,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
  } from '@mui/material';
  import dayjs from 'dayjs';

const VenueDetails = () => {
  const { id } = useParams(); 
  const [venue, setVenue] = useState(null); 
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedTime, setSelectedTime] = useState('');
  const [loading, setLoading] = useState(true);
  const { userId } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVenueDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/venues/${id}`); 
        setVenue(response.data); 
        setLoading(false);
      } catch (err) {
        console.error('Error fetching venue:', err); 
        setLoading(false);
      } 
    };

    fetchVenueDetails(); 
  }, [id]); 

  if (loading) return <Typography>Loading...</Typography>;

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setSelectedTime(''); 
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const availabilityForDate = venue.availability.find(
    (avail) => dayjs(avail.date).format('YYYY-MM-DD') === dayjs(selectedDate).format('YYYY-MM-DD')
  );

  const availableSlots = availabilityForDate ? availabilityForDate.available_slots : [];

  const handleReserve = async () => {
    if (!selectedTime) {
      alert('Please select a time slot.');
      return;
    }

    if (!userId) {
      alert('You need to be logged in to make a reservation.');
      return;
    }
    const [start_time, end_time] = selectedTime.split('-');

    const reservationData = {
      venue_id: venue._id, 
      user_id: userId,
      date: selectedDate,
      start_time,
      end_time
    };

    try {
      console.log(reservationData);
      const response = await axios.post('http://localhost:3000/reservations', reservationData)
      if (response.status === 201) {
        alert('Reservation successful!');
        navigate('/');
      } else {
        alert('Reservation failed.');
      }
    } catch (error) {
      console.error('Error reserving venue:', error);
    }
  };

  return (
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, padding: 2 }}>
        <Box sx={{ flex: 1 }}>
          <img src={venue.image} alt={venue.name} style={{ width: '100%', borderRadius: '8px' }} />
        </Box>
  
        <Box sx={{ flex: 2 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            {venue.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>City:</strong> {venue.city}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Sport:</strong> {venue.sport.join(',')}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Description:</strong> {venue.description}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Capacity:</strong> {venue.capacity}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Type:</strong> {venue.type}
          </Typography>
  
          <FormControl fullWidth sx={{ marginTop: 2 }}>
            <TextField
              id="date-picker"
              label="Choose date"
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </FormControl>
  
          {availableSlots.length > 0 ? (
            <FormControl fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="select-time-label">Select Time</InputLabel>
              <Select
                labelId="select-time-label"
                id="select-time"
                value={selectedTime}
                onChange={handleTimeChange}
                label="Select Time"
              >
                {availableSlots.map((slot, index) => (
                  <MenuItem key={index} value={`${slot.start_time}-${slot.end_time}`}>
                    {`${slot.start_time} - ${slot.end_time}`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <Typography variant="body1" color="error" sx={{ marginTop: 2 }}>
              No available slots for the selected date.
            </Typography>
          )}

          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 4 }}
            onClick={handleReserve}
          >
          RESERVE
        </Button>
        </Box>
      </Box>
  );
};


export default VenueDetails;

