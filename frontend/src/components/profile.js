import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography, Avatar, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import { useUser } from './userContext';  
import { Link } from 'react-router-dom';
import EventIcon from '@mui/icons-material/Event';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';


const Profile = () => {
    const [reservations, setReservations] = useState([]);
    const [userDetails, setUserDetails] = useState({ username: '', email: '', phone: '' });
    const { userId } = useUser(); 

    useEffect(() => {
        const fetchUserDetails = async () => {
          try {
            const response = await axios.get(`http://localhost:3000/users/${userId}`, { withCredentials: true });
            setUserDetails(response.data);  
          } catch (error) {
            console.error("Failed to fetch user details:", error);
          }
        };

        const fetchReservations = async () => {
          try {
            const response = await axios.get('http://localhost:3000/reservations/my-bookings', { withCredentials: true });
            setReservations(response.data);  
          } catch (error) {
            console.error("Failed to fetch reservations:", error);
          }
        };
    
        fetchUserDetails();
        fetchReservations();
      }, [userId]);

    return (
        <Box sx={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <Avatar
            sx={{
            margin: '0 auto',
            width: 80,
            height: 80,
            bgcolor: '#9e181f',
            }}
        >
            <AccountCircleIcon sx={{ fontSize: 50, color: '#fcfcfc' }} />
        </Avatar>
        <Typography variant="h5" sx={{ marginTop: '10px' }}>
            {userDetails.username}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
            <PhoneIcon sx={{ marginRight: '8px', color: '#9e181f' }} />
            <Typography variant="body1">{userDetails.phone}</Typography>
        </Box>

        <Divider sx={{ margin: '20px 0' }} />

        <Typography variant="h6" sx={{ marginBottom: '10px', fontSize: '22px' }}>
            My Reservations
        </Typography>

        <List>
          {reservations && reservations.length > 0 ? (
            reservations.map((reservation, index) => (
              <ListItem key={index}>
                <EventIcon sx={{ marginRight: '10px', color: '#9e181f' }} />
                <ListItemText
                  primary={
                    <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                      {reservation.venue_id.name}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body1" sx={{ fontSize: '18px' }}>
                      Date: {reservation.date}, Time: {reservation.start_time} - {reservation.end_time}
                    </Typography>
                  }
                />
              </ListItem>
            ))
          ) : (
            <Typography variant="body2" sx={{ marginBottom: '20px' }}>
              You have no reservations yet.
            </Typography>
          )}
        </List>


        <Divider sx={{ margin: '20px 0' }} />

        <Typography variant="body1" sx={{ marginBottom: '10px', fontSize: '18px' }}>
            Ready to book your next session? Check out available venues!
        </Typography>

        <Button component={Link} to="/venues" variant="contained" sx={{ backgroundColor: '#9e181f', color: '#fcfcfc' }}>
            View All Venues
        </Button>
        </Box>
    );
    };

export default Profile;
