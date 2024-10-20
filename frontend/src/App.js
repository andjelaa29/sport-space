import './App.css';
import Header from './components/header';
import Home from './components/home';
import Venues from './components/venues';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './components/footer';

function App() {
  const [venues, setVenues] = useState([]);
  const [recommendedVenues, setRecommendedVenues] = useState([]);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await axios.get('http://localhost:3000/venues');
        setVenues(response.data); 

        const sortedVenues = response.data
          .sort((a, b) => a.availability.length - b.availability.length)
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
        <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Home venues={recommendedVenues} />} />
            <Route path='/venues' element={<Venues venues={venues} />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
