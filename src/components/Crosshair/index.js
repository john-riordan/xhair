import React from "react";

import { boolean_map } from "../../constants";
import { XhairFrame } from "./styled";
import Line from "./Line";
import CenterDot from "./CenterDot";

const Crosshair = ({ settings, className }) => {
  const { center_dot } = settings;

  return (
    <XhairFrame
      viewBox={`0 0 ${settings.size} ${settings.size}`}
      height={settings.size}
      width={settings.size}
      className={className}
    >
      <Line side="left" kind="inner" settings={settings} />
      <Line side="right" kind="inner" settings={settings} />
      <Line side="bottom" kind="inner" settings={settings} />
      <Line side="top" kind="inner" settings={settings} />

      <Line side="left" kind="outer" settings={settings} />
      <Line side="right" kind="outer" settings={settings} />
      <Line side="bottom" kind="outer" settings={settings} />
      <Line side="top" kind="outer" settings={settings} />

      {boolean_map[center_dot] && <CenterDot settings={settings} />}
    </XhairFrame>
  );
};

export default Crosshair;
