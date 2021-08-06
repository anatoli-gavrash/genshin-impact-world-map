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

export const addUser = (value) => {
  return {
    type: ADD_USER,
    payload: value
  };
};

export const addUsers = (value) => {
  return {
    type: ADD_USERS,
    payload: value
  };
};

export const addCurrentUser = (value) => {
  return {
    type: ADD_CURRENT_USER,
    payload: value
  };
};

export const changeScrollPosition = (value) => {
  return {
    type: CHANGE_SCROLL_POSITION,
    payload: value
  };
};

export const changeScale = (value) => {
  return {
    type: CHANGE_SCALE,
    payload: value
  };
};

export const showMarkerInfo = (value) => {
  return {
    type: SHOW_MARKER_INFO,
    payload: value
  };
};

export const showAddMarker = (value) => {
  return {
    type: SHOW_ADD_MARKER,
    payload: value
  };
};

export const changeIdImage = (value) => {
  return {
    type: CHANGE_ID_IMAGE,
    payload: value
  };
};

export const changeOpacity = (value) => {
  return {
    type: CHANGE_OPACITY,
    payload: value
  };
};

export const changeDisplay = (value) => {
  return {
    type: CHANGE_DISPLAY,
    payload: value
  };
};