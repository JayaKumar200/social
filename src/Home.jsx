import React from 'react';
import './Home.css';

const Home = ({setActiveSession}) => {
  return (
    <div className="home-page">
      <h1>Welcome to JK Social!</h1>
      <p>Your go-to place to connect, share, and explore.</p>

      <div className="home-cards">
        <div className="card">
          <h3>Create Posts</h3>
          <p>Share your thoughts, ideas, or moments with your followers.</p>
        </div>

        <div className="card">
          <h3>Explore Feed</h3>
          <p>See what your friends and the world are talking about.</p>
        </div>

        <div className="card">
          <h3>Connect</h3>
          <p>Follow people, build your network, and grow your circle.</p>
        </div>
        </div>
        <button className="get-started-btn" onClick={()=> setActiveSession('feed')}>Get Started</button>

    </div>
  );
};

export default Home;
