import React from "react";

import { SelectMenu } from "./styled";

const Select = ({ name, onChange, value, options }) => {
  return (
    <SelectMenu name={name} onChange={onChange} value={value}>
      {options.map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </SelectMenu>
  );
};

export default Select;
