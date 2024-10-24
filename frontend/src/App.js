import './App.css';
import Header from './components/header';
import Home from './components/home';
import Venues from './components/venues';
import Profile from './components/profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './components/footer';
import Login from './components/login';
import Register from './components/register';
import { UserProvider } from './components/userContext';
import VenueDetails from './components/venueDetails';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  const [venues, setVenues] = useState([]);
  const [recommendedVenues, setRecommendedVenues] = useState([]);
  
  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await axios.get('http://localhost:3000/venues');
        setVenues(response.data); 

        const sortedVenues = response.data
          .sort((a, b) => {
            const totalSlotsA = a.availability.reduce((acc, item) => acc + item.available_slots.length, 0); //sum all available_slots 
            const totalSlotsB = b.availability.reduce((acc, item) => acc + item.available_slots.length, 0);
            return totalSlotsB - totalSlotsA;
          })
          .slice(0, 3);
        setRecommendedVenues(sortedVenues); // Store recommended venues
      } catch (error) {
        console.error("Error fetching venues:", error);
      }
    };

    fetchVenues();
  }, []);
  return (
    <div className="App">
      <UserProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <Header/>
            <Routes>
              <Route path="/" element={<Home venues={recommendedVenues} />} />
              <Route path='/venues' element={<Venues venues={venues} />} />
              <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/venues/:id" element={<VenueDetails />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          <Footer />
        </Router>
        </LocalizationProvider>
      </UserProvider>
    </div>
  );
}

export default App;
