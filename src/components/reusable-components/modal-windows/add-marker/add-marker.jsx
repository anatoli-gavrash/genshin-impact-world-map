import React from 'react';
import { useDispatch } from 'react-redux';
import { showAddMarker } from 'storage/actions/actions.jsx';

import './add-marker.scss';
import MarkerForm from './marker-form/marker-form.jsx';

const AddMarker = () => {
  const dispatch = useDispatch();
  return (
    <div className="add-marker">
      <div className="add-marker__wrapper">
        <button className="add-marker__close-button" onClick={() => dispatch(showAddMarker(false))}></button>
        <MarkerForm />
      </div>
    </div>
  );
};

export default AddMarker;