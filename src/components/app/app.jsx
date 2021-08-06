import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './app.scss';
import Header from './header/header.jsx';
import Main from './main/main.jsx';

const App = () => {
  const { markersData } = useSelector((state) => state.worldMapStore);

  useEffect(() => {
    const newStorage = (data) => {
      return data.map(({ idImage, opacity, display }) => {
        return [idImage, opacity, display];
      });
    };

    localStorage.setItem('markers', JSON.stringify(newStorage(markersData)));
  }, [markersData]);

  return (
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  );
};

export default App;