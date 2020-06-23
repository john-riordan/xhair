import React from "react";

import { boolean_map } from "../../constants";
import { ToggleGroup, ToggleButton } from "./styled";

const Toggle = ({ name, isActive, onChange }) => {
  return (
    <ToggleGroup className={boolean_map[isActive] && "isActive"}>
      <ToggleButton name={name} value="true" onClick={onChange}>
        On
      </ToggleButton>
      <ToggleButton name={name} value="false" onClick={onChange}>
        Off
      </ToggleButton>
    </ToggleGroup>
  );
};

export default Toggle;
