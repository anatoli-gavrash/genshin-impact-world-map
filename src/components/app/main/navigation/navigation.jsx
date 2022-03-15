import React from 'react';

import './navigation.scss';
import MapSelector from './map-selector/map-selector.jsx';
import Filter from './filter/filter.jsx';
import MapNavigation from './map-navigation/map-navigation.jsx';

const Navigation = () => {
  return (
    <section className="navigation">
      <MapSelector />
      <Filter />
      <MapNavigation />
    </section>
  );
};

export default Navigation;