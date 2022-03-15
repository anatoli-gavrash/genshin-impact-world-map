import React from 'react';
import { useSelector } from 'react-redux';

import './map.scss';
import Grid from './grid/grid.jsx';
import MarkerInfo from 'components/reusable-components/modal-windows/marker-info/marker-info.jsx';
import AddMarker from 'components/reusable-components/modal-windows/add-marker/add-marker.jsx';

const Map = () => {
  const { markerInfo, addMarker } = useSelector((state) => state.worldMapStore.modalWindowVisibility);

  return (
    <section className="map">
      <Grid />
      { markerInfo ? <MarkerInfo /> : null }
      { addMarker ? <AddMarker /> : null }
    </section>
  );
};

export default Map;