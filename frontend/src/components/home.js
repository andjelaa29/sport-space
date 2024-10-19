import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Welcome from './welcome'; 
import RecommendedVenues from './recommendedVenues'; 
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [venues, setVenues] = useState([]);

    const handleReserveNowClick = () => {
        navigate('/venues');
    }

    return (
        <div>
            <Welcome onReserveNowClick={handleReserveNowClick}/>
            <RecommendedVenues venues={venues} />
        </div>
    );
};

export default Home;
