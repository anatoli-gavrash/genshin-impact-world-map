import React from 'react';

import './main.scss';
import Map from './map/map.jsx';
import Navigation from './navigation/navigation.jsx';

const Main = () => {

  return (
    <main className="main">
      <Navigation />
      <Map />
    </main>
  );
};

export default Main;