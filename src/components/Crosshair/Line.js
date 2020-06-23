import React from "react";

import { boolean_map } from "../../constants";
import { calcLineShape, calcLinePosition } from "./utils";

const opacity_map = {
  inner: "inner_line_opacity",
  outer: "outer_line_opacity"
};

const Line = ({ side, kind, settings }) => {
  const shape = calcLineShape(side, kind, settings);
  const position = calcLinePosition(shape, side, kind, settings);
  const lineOpacity = settings[opacity_map[kind]];
  const lineStyle = boolean_map[settings.outlines]
    ? {
        stroke: "black",
        strokeWidth: settings.outline_thickness * 2,
        strokeOpacity: settings.outline_opacity,
        paintOrder: "stroke"
      }
    : null;

  return (
    <rect
      x={position.x}
      y={position.y}
      width={shape.width}
      height={shape.height}
      fill={settings.color}
      fillOpacity={lineOpacity}
      style={lineStyle}
    />
  );
};

export default Line;
