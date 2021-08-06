import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showMarkerInfo } from 'storage/actions/actions.jsx';

import './marker-info.scss';

const MarkerInfo = () => {
  const dispatch = useDispatch();
  const { idImage } = useSelector((state) => state.worldMapStore.mapValues);

  return (
    <div className="marker-info">
      <div className="marker-info__wrapper">
        <button className="marker-info__close-button" onClick={() => dispatch(showMarkerInfo(false))}></button>
        <img className="marker-info__image" src={`./images/teyvat/${idImage}.jpg`} alt={idImage}/>
      </div>
    </div>
  );
};

export default MarkerInfo;