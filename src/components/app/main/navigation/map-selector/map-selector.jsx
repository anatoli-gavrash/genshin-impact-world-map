import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeScale, changeMap } from 'storage/actions/actions';
import { Formik, Field, Form } from 'formik';

import './map-selector.scss';
import Options from './options/options.jsx';

const MapSelector = () => {
  const dispatch = useDispatch();
  const { scale } = useSelector((state) => state.worldMapStore.mapValues.positioning);
  const { currentMap } = useSelector((state) => state.worldMapStore);
  
  const selectMonitor = (event) => {
    if ((event.target.value === 'enkanomiya' || event.target.value === 'enkanomiya-event') && scale > 4) dispatch(changeScale(4));
    dispatch(changeMap(event.target.value));
  };

  return (
    <Formik>
      {(formik) => (
        <Form className="map-selector__form" onSubmit={formik.handleSubmit}>
          <Field className="map-selector__select"
            as="select"
            name="selector"
            value={currentMap}
            onChange={selectMonitor}
          >
            <Options />
          </Field>
        </Form>
      )}
    </Formik>
  );
};

export default MapSelector;