import React from 'react';
import Timeslots from './TestCalendar';
import HomeMUI from './HomeMUI';
import './styles.css';

const Home = ({showSignIn}) => (
    <div>
        <HomeMUI />

        <div className="example"><Timeslots /></div>

    </div>
)

export default Home;