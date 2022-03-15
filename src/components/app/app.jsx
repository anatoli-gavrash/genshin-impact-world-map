import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './app.scss';
import Header from './header/header.jsx';
import Main from './main/main.jsx';

const App = () => {
  const { markersData, currentMap } = useSelector((state) => state.worldMapStore);

  useEffect(() => {
    const newStorage = (data) => {
      const newData = {};
      
      const newArray = Object.entries(data).map((markersData) => {
        return [markersData[0], markersData[1].map(({ idImage, opacity, display }) => {
          return [idImage, opacity, display];
        })];
      });

      newArray.forEach((array) => {
        newData[array[0]] = array[1];
      });

      return newData;
    };

    localStorage.setItem('markers', JSON.stringify(newStorage(markersData)));
  }, [markersData]);

  useEffect(() => {
    localStorage.setItem('current-map', currentMap);
  }, [currentMap]);

  return (
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  );
};

export default App;