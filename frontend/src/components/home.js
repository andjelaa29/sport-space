import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Welcome from './welcome'; 
import RecommendedVenues from './recommendedVenues'; 
import {useNavigate} from 'react-router-dom';

const Home = ({venues}) => {
    const navigate = useNavigate();

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
