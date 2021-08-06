import React from 'react';
import { ErrorMessage, Field, Formik } from 'formik';

import './marker-form.scss';
import { useSelector } from 'react-redux';

const MarkerForm = () => {
  const { markersData } = useSelector((state) => state.worldMapStore);
  const { x, y } = useSelector((state) => state.worldMapStore.mapValues.positioning);

  const validate = (values) => {
    const errors = {};

    return errors;
  };
  
  

  const onSubmit = ({ id, name, type, description, positionX, positionY }) => {
    prompt("Новый объект", `, {
      idImage: ${id},
      name: '${name}',
      type: ${type},
      description: '${description}',
      positionX: ${positionX},
      positionY: ${positionY},
      opacity: 1,
      display: 'block'
    }`);
  };

  return (
    <Formik
      initialValues={{
        id: 3000000 + markersData.length,
        name: '',
        type: 'iconCommonChest',
        description: '',
        positionX: x,
        positionY: y
      }}
      validate={validate}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <form className="marker-form"
              noValidate
              onSubmit={formik.handleSubmit}
        >
          <div className="marker-field__field-wrapper">
            <label className="marker-form__label" htmlFor="id">Id</label>
            <Field
              className="marker-form__text"
              type="text"
              name="id"
            />
            <ErrorMessage
              component="label"
              className="marker-form__error-label"
              name="id"
              htmlFor="id"
            />
          </div>
          <div className="marker-field__field-wrapper">
            <label className="marker-form__label" htmlFor="name">Name</label>
            <Field
              className="marker-form__select"
              type="text"
              name="name"
            />
            <ErrorMessage
              component="label"
              className="marker-form__error-label"
              name="name"
              htmlFor="name"
            />
          </div>
          <div className="marker-field__field-wrapper">
            <label className="marker-form__label" htmlFor="type">Type</label>
            <Field
              className="marker-form__select"
              as="select"
              name="type"
            >
              <option className="marker-field__option" value="iconCommonChest">Обычный сундук</option>
              <option className="marker-field__option" value="iconExquisiteChest">Богатый сундук</option>
              <option className="marker-field__option" value="iconPreciousChest">Драгоценный сундук</option>
              <option className="marker-field__option" value="iconLuxuriousChest">Роскошный сундук</option>
              <option className="marker-field__option" value="iconElectroculus">Электрокул</option>
              <option className="marker-field__option" value="iconSeelie">Фея</option>
              <option className="marker-field__option" value="iconElectroSeelie">Электро-фея</option>
              <option className="marker-field__option" value="iconChallenge">Испытание</option>
              <option className="marker-field__option" value="iconShrine">Храм</option>
              <option className="marker-field__option" value="iconRegion">Регион</option>
              <option className="marker-field__option" value="iconBook">Книга</option>
              <option className="marker-field__option" value="iconPage">Страница</option>
              <option className="marker-field__option" value="iconRip">Надгробие</option>
              <option className="marker-field__option" value="iconSeaBox">Морской ящик</option>
              <option className="marker-field__option" value="iconKey">Ключ</option>
              <option className="marker-field__option" value="iconStoneSlate">Древняя стела</option>
              <option className="marker-field__option" value="iconQuestionMark">Знак вопроса</option>
            </Field>
            <ErrorMessage
              component="label"
              className="marker-form__error-label"
              name="type"
              htmlFor="type"
            />
          </div>
          <div className="marker-field__field-wrapper">
            <label className="marker-form__label" htmlFor="description">Description</label>
            <Field
              className="marker-form__select"
              type="textarea"
              name="description"
            />
            <ErrorMessage
              component="label"
              className="marker-form__error-label"
              name="description"
              htmlFor="description"
            />
          </div>
          <div className="marker-field__field-wrapper">
            <label className="marker-form__label" htmlFor="positionX">Position-X</label>
            <Field
              className="marker-form__select"
              type="text"
              name="positionX"
            />
            <ErrorMessage
              component="label"
              className="marker-form__error-label"
              name="positionX"
              htmlFor="positionX"
            />
          </div>
          <div className="marker-field__field-wrapper">
            <label className="marker-form__label" htmlFor="positionY">Position-Y</label>
            <Field
              className="marker-form__select"
              type="text"
              name="positionY"
            />
            <ErrorMessage
              component="label"
              className="marker-form__error-label"
              name="positionY"
              htmlFor="positionY"
            />
          </div>
          <button className="marker-field__submit-button" type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default MarkerForm;