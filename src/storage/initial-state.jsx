import markersData from './markers-data.jsx';

const loadLocalMarkers = () => {
  const localMarkers = JSON.parse(localStorage.getItem('markers'));
  
  if(!localMarkers) return markersData;

  return markersData.map((dataMarker) => {
    let markerValues = localMarkers.find((localMarker) => localMarker[0] === dataMarker.idImage);

    return markerValues
      ? { ...dataMarker, opacity: markerValues[1], display: markerValues[2] } 
      : dataMarker;
  });
};

const initialState = {
  users: undefined,
  currentUser: undefined,
  markersData: loadLocalMarkers(),
  mapValues: {
    positioning: {
      x: 8192,
      y: 8192,
      scale: 7
    },
    modalWindowVisibility: false,
    idImage: undefined
  },
  modalWindowVisibility: {
    markerInfo: false,
    addMarker: false
  }
};

export default initialState;