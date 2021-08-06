import initialState from '../initial-state.jsx';
import { ADD_USER,
         ADD_USERS, 
         ADD_CURRENT_USER,
         CHANGE_SCROLL_POSITION,
         CHANGE_SCALE,
         SHOW_MARKER_INFO,
         SHOW_ADD_MARKER,
         CHANGE_ID_IMAGE,
         CHANGE_OPACITY,
         CHANGE_DISPLAY } from '../constants/constants.jsx';

const genshinImpactWorldMapReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [
          ...state.users,
          action.payload
        ]
      };
    case ADD_USERS:
      return {
        ...state,
        users: action.payload
      };
    case ADD_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case CHANGE_SCROLL_POSITION:
      return {
        ...state,
        mapValues: {
          ...state.mapValues,
          positioning: {
            ...state.mapValues.positioning,
            x: action.payload.x,
            y: action.payload.y
          }
        }
      };
    case CHANGE_SCALE:
      return {
        ...state,
        mapValues: {
          ...state.mapValues,
          positioning: {
            ...state.mapValues.positioning,
            scale: action.payload
          }
        }
      };
    case SHOW_MARKER_INFO:
      return {
        ...state,
        modalWindowVisibility: {
          ...state.modalWindowVisibility,
          markerInfo: action.payload
        }
      };
    case SHOW_ADD_MARKER:
      return {
        ...state,
        modalWindowVisibility: {
          ...state.modalWindowVisibility,
          addMarker: action.payload
        }
      };
    case CHANGE_ID_IMAGE:
      return {
        ...state,
        mapValues: {
          ...state.mapValues,
          idImage: action.payload
        }
      };
    case CHANGE_OPACITY:
      return {
        ...state,
        markersData: state.markersData.map((marker) => {
          return marker.idImage === action.payload.idImage
            ? { ...marker, opacity: action.payload.opacity }
            : marker;
        })
      };
    case CHANGE_DISPLAY:
      return {
        ...state,
        markersData: state.markersData.map((marker) => {
          return { ...marker, display: action.payload };
        })
      };
    default:
      return state;
  }
};

export default genshinImpactWorldMapReducer;