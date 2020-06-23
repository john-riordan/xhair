import React from "react";

import { RangeFrame, TextInput, RangeSlider } from "./styled";

const Range = ({ value, name, min, max, step, onChange }) => {
  return (
    <RangeFrame>
      <TextInput
        type="number"
        name={name}
        min={min}
        max={max}
        step={step}
        value={Number(value)}
        onChange={onChange}
      />
      <RangeSlider
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
        value={Number(value)}
        onChange={onChange}
      />
    </RangeFrame>
  );
};

export default Range;
