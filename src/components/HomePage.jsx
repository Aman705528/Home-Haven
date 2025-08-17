import React from 'react';
import Navigation from './Navigation.jsx';
import Hero from './Hero.jsx';

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <main className="container">
        <Hero />
      </main>
    </div>
  );
};

export default HomePage;