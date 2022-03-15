import markersTeyvat from './markers-teyvat.jsx';
import markersEnkanomiya from './markers-enkanomiya.jsx';
import markersEnkanomiaEvent from './markers-enkanomiya-event.jsx';

const loadLocalMarkers = () => {
  const localMarkers = JSON.parse(localStorage.getItem('markers'));

  const markersData = {
    "teyvat": markersTeyvat,
    "enkanomiya": markersEnkanomiya,
    "enkanomiya-event": markersEnkanomiaEvent
  };
  
  if(!localMarkers) return markersData;

  const newMarkersObject = {};
  const newMarkersData = Object.entries(markersData).map((array) => {
    return [array[0], array[1].map((element) => {
      const localMarkerData = localMarkers[array[0]].find((localMarker) => localMarker[0] === element.idImage);

      return localMarkerData
        ? { ...element, opacity: localMarkerData[1] , display: localMarkerData[2] }
        : element;
    })];
  });

  newMarkersData.forEach((element) => {
    newMarkersObject[element[0]] = element[1];
  });

  return newMarkersObject;
};

const getMap = () => {
  return localStorage.getItem('current-map');
}

const initialState = {
  users: undefined,
  currentUser: undefined,
  markersData: loadLocalMarkers(),
  mapValues: {
    positioning: {
      x: 8192,
      y: 8192,
      scale: 1
    },
    modalWindowVisibility: false,
    idImage: undefined
  },
  modalWindowVisibility: {
    markerInfo: false,
    addMarker: false
  },
  currentMap: getMap()
};

export default initialState;