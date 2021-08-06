import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeScale, changeDisplay } from 'storage/actions/actions.jsx';

import './map-navigation.scss';

const MapNavigation = () => {
  const dispatch = useDispatch();
  const { markersData, mapValues: { positioning: { scale }}} = useSelector((state) => state.worldMapStore);

  const hideMarkers = () => {
    dispatch(changeDisplay(markersData[0].display === 'block' ? 'none' : 'block'));
  };

  const centering = async () => {
    const localPositioning = JSON.parse(localStorage.getItem('positioning'));
    await dispatch(changeScale(localPositioning[2]));
    document.querySelector('.grid').scrollTop = localPositioning[1] - window.innerHeight / 2;
    document.querySelector('.grid').scrollLeft = localPositioning[0] - window.innerWidth / 2;
  };
  
  const scalePlus = async () => {
    const scrollTop = document.querySelector('.grid').scrollTop;
    const scrollLeft = document.querySelector('.grid').scrollLeft;

    if (scale < 7) {
      await dispatch(changeScale(scale + 1));
      document.querySelector('.grid').scrollTop = (scrollTop + window.innerHeight / 4) * 2;
      document.querySelector('.grid').scrollLeft = (scrollLeft + window.innerWidth / 4) * 2;
    }
  };

  const scaleMinus = async () => {
    const scrollTop = document.querySelector('.grid').scrollTop;
    const scrollLeft = document.querySelector('.grid').scrollLeft;

    if (scale > 0) {
      await dispatch(changeScale(scale - 1));
      document.querySelector('.grid').scrollTop = (scrollTop - window.innerHeight / 2) / 2;
      document.querySelector('.grid').scrollLeft = (scrollLeft - window.innerWidth / 2) / 2;
    }
  };

  return (
    <div className="map-navigation">
      <button className="map-navigation__button-change-display" type="button" onClick={hideMarkers}></button>
      <button className="map-navigation__button-centering" type="button" onClick={centering}></button>
      <button className="map-navigation__button-plus" type="button" onClick={scalePlus}></button>
      <button className="map-navigation__button-minus" type="button" onClick={scaleMinus}></button>
    </div>
  )
};

export default MapNavigation;