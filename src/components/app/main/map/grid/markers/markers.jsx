import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showMarkerInfo, changeIdImage } from 'storage/actions/actions.jsx';

import './markers.scss';
import iconMarker from 'assets/images/icons/marker.svg';
import { changeOpacity } from 'storage/actions/actions.jsx';

const Markers = () => {
  const { markersData } = useSelector((state) => state.worldMapStore);
  const dispatch = useDispatch();


  const openModalWindow = (idImage) => {
    dispatch(showMarkerInfo(true));
    dispatch(changeIdImage(idImage));
  };

  const rightClick = (event, idImage, opacity) => {
    event.preventDefault();
    dispatch(changeOpacity({ idImage, opacity: opacity === 1 ? 0.3 : 1 }));
  };

  return ( markersData.map(({ positionX, positionY, type, idImage, opacity, display }) => (
      <div className="marker"
           key={`img-${idImage}`}
           style={{
             top: positionY + '%',
             left: positionX + '%',
             opacity,
             display
           }}
      >
        <img className="marker-image" src={iconMarker} alt="marker"/>
        <img className="icon-image" src={type} alt="icon" onClick={() => openModalWindow(idImage)} onContextMenu={(event) => rightClick(event, idImage, opacity)}/>
      </div>
    ))
  );
};

export default Markers;