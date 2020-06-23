import React from "react";

import { boolean_map } from "../../constants";
import { InputRow, InputRowLabel, InputRowControls } from "./styled";

const Setting = ({ label, input, disabled }) => {
  return (
    <InputRow className={boolean_map[disabled] && "disabled"}>
      <InputRowLabel>{label}</InputRowLabel>
      <InputRowControls>{input}</InputRowControls>
    </InputRow>
  );
};

export default Setting;
