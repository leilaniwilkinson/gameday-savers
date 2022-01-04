import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import '../styles/Home.css';

function Home() {
    return (
        <div className="Home">
            
            <h1> 
                <center>Welcome to Gameday Savers!</center>
            </h1>
            <h1> 
                <center>Your Guide to Meeting Your Favourite 102,732 Friends</center>
            </h1>
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'AggieFootball'
                }}
                options={{
                    width:  '400',
                    height: '600',
                    theme: 'dark'
                }}
            />
        </div>
        
    )
}



export default Home;
