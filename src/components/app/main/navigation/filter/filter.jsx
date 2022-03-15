import React from 'react';
import { Formik, Form, Field } from 'formik';

import './filter.scss';

const Filter = () => {
  const filterMarks = () => {
    
  }

  return (
    <Formik>
      <Form className="filter-form">
        <Field className="filter-field"
          as="select"
          name="filter"
          onChange={filterMarks}
        >
          <option className="marker-field__option" value="iconCommonChest">Обычный сундук</option>
          <option className="marker-field__option" value="iconExquisiteChest">Богатый сундук</option>
          <option className="marker-field__option" value="iconPreciousChest">Драгоценный сундук</option>
          <option className="marker-field__option" value="iconLuxuriousChest">Роскошный сундук</option>
          <option className="marker-field__option" value="iconBlueprintChest">Сундук с чертежом</option>
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
          <option className="marker-field__option" value="iconBubble">Пузырь</option>
          <option className="marker-field__option" value="iconKey">Ключ</option>
          <option className="marker-field__option" value="iconStoneSlate">Древняя стела</option>
          <option className="marker-field__option" value="iconQuestionMark">Знак вопроса</option>
          <option className="marker-field__option" value="iconFoxStatue">Статуя лисы</option>
          <option className="marker-field__option" value="iconOwlStatue">Статуя совы</option>
          <option className="marker-field__option" value="iconKeySigil">Знак-ключ</option>
          <option className="marker-field__option" value="iconStoneChest">Каменный сундук</option>
        </Field>
      </Form>
    </Formik>
  );
};

export default Filter;