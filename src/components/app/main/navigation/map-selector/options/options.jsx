import React from 'react';

const mapList = ['Teyvat', 'Enkanomiya', 'Enkanomiya-Event'];

const Options = () => {
  return (
    <React.Fragment>
      {mapList.map((element, index) => 
        <option className='selector__option'
                value={element.toLowerCase()}
                key={`so-${index}`}>
          {element}
        </option>
      )}
    </React.Fragment>
  );
};

export default Options;