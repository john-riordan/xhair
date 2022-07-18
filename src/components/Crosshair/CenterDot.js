import React from 'react';

import { boolean_map } from '../../constants';
import { calcDotShape, calcDotPosition } from './utils';

const CenterDot = ({ settings }) => {
  const shape = calcDotShape(settings);
  const position = calcDotPosition(settings);
  const dotOpacity = settings.outline_opacity;
  const dotStyle = boolean_map[settings.outlines]
    ? {
        stroke: 'black',
        strokeWidth: settings.outline_thickness * 2,
        strokeOpacity: settings.outline_opacity,
        fillOpacity: settings.center_dot_opacity,
        paintOrder: 'stroke',
      }
    : null;

  return (
    <rect
      x={position.x}
      y={position.y}
      height={shape.height}
      width={shape.width}
      fill={settings.color}
      fillOpacity={dotOpacity}
      style={dotStyle}
    />
  );
};

export default CenterDot;
