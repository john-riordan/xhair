//////////////////////////////////////////////////////
// CENTER DOT
export function calcDotShape(settings) {
  const { center_dot_thickness } = settings;

  return {
    height: Number(center_dot_thickness),
    width: Number(center_dot_thickness)
  };
}

export function calcDotPosition(settings) {
  const { size, center_dot_thickness } = settings;
  const center = Math.floor(size / 2);

  return {
    x: center - Math.floor(Number(center_dot_thickness) / 2),
    y: center - Math.floor(Number(center_dot_thickness) / 2)
  };
}

//////////////////////////////////////////////////////
// LINES
export function calcLineShape(side, kind, settings) {
  const {
    inner_line_thickness,
    inner_line_length,
    outer_line_thickness,
    outer_line_length
  } = settings;
  const values = {};
  const shape = {};

  // choose which settings to use (inner or outer)
  switch (kind) {
    case "inner":
      values.thickness = Number(inner_line_thickness);
      values.length = Number(inner_line_length);
      break;
    case "outer":
      values.thickness = Number(outer_line_thickness);
      values.length = Number(outer_line_length);
      break;
    default:
      break;
  }

  // Apply the settings
  switch (side) {
    case "right":
    case "left":
      shape.height = Number(values.thickness);
      shape.width = Number(values.length);
      break;
    case "top":
    case "bottom":
      shape.height = Number(values.length);
      shape.width = Number(values.thickness);
      break;
    default:
      break;
  }

  return shape;
}

export function calcLinePosition(lineShape, side, kind, settings) {
  const {
    size,
    inner_line_thickness,
    inner_line_length,
    inner_line_offset,
    outer_line_thickness,
    outer_line_length,
    outer_line_offset
  } = settings;
  const center = Math.floor(size / 2);
  const values = {};
  const position = {};

  // choose which settings to use (inner or outer)
  switch (kind) {
    case "inner":
      values.thickness = Number(inner_line_thickness);
      values.length = Number(inner_line_length);
      values.offset = Number(inner_line_offset);
      break;
    case "outer":
      values.thickness = Number(outer_line_thickness);
      values.length = Number(outer_line_length);
      values.offset = Number(outer_line_offset);
      break;
    default:
      break;
  }

  // Apply the settings
  switch (side) {
    case "right":
      position.x = center + values.offset + 0;
      position.y = center - Math.floor(values.thickness / 2);
      break;
    case "left":
      position.x = center - (values.offset + lineShape.width) - 0;
      position.y = center - Math.floor(values.thickness / 2);
      break;
    case "top":
      position.x = center - Math.floor(values.thickness / 2);
      position.y = center - (values.offset + lineShape.height) - 0;
      break;
    case "bottom":
      position.x = center - Math.floor(values.thickness / 2);
      position.y = center + values.offset + 0;
      break;
    default:
      break;
  }

  return position;
}
