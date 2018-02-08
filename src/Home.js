import React from 'react';
import Timeslots from './TestCalendar';
import HomeMUI from './HomeMUI';
import SignIn from './SignIn';
import './styles.css';

const Home = ({showSignIn}) => (
    <div>
        <HomeMUI />

        {showSignIn ? <SignIn />:<div className="example"><Timeslots /></div> }

    </div>
)

export default Home;