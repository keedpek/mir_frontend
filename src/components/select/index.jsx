import React from 'react';

import Select from 'react-select';

export const Select = (props) => (
  <Select
    defaultValue={props.default}
    isMulti
    name={props.name}
    options={props.options}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);