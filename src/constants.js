export const boolean_map = {
  true: true,
  false: false
};

export const images = {
  cropped: {
    player: {
      close: "https://i.imgur.com/ldKwkEJ.jpg",
      medium: "https://i.imgur.com/1WO7rHV.jpg",
      far: "https://i.imgur.com/6CovVET.jpg"
    },
    map: {
      haven: "https://i.imgur.com/tI0fwxO.jpg",
      bind: "https://i.imgur.com/YgzOWe7.jpg",
      split: "https://i.imgur.com/OH1CuJa.jpg"
    }
  }
};

export const ranges = [
  {
    key: "close",
    name: "Close"
  },
  {
    key: "medium",
    name: "Medium"
  },
  {
    key: "far",
    name: "Far"
  }
];

export const maps = [
  {
    key: "haven",
    name: "Haven"
  },
  {
    key: "bind",
    name: "Bind"
  },
  {
    key: "split",
    name: "Split"
  }
];

export const colors = {
  "#ffffff": "White",
  "#00FF00": "Green",
  "#BBFF00": "Yellow Green",
  "#D6E305": "Green Yellow",
  "#FFFF00": "Yellow",
  "#00FFFF": "Cyan",
  "#FF00FF": "Pink",
  "#FF0000": "Red"
};

export const defaultSettings = {
  title: "default",
  size: 100,
  color: "#ffffff",
  outlines: true,
  outline_opacity: 0.5,
  outline_thickness: 1,
  center_dot: false,
  center_dot_opacity: 1,
  center_dot_thickness: 2,
  fade_fire_error: false,
  show_teammate_crosshair: true,
  inner_line_opacity: 0.8,
  inner_line_length: 6,
  inner_line_thickness: 2,
  inner_line_offset: 3,
  inner_line_move_error: false,
  inner_line_fire_error: true,
  outer_line_opacity: 0.35,
  outer_line_length: 2,
  outer_line_thickness: 2,
  outer_line_offset: 10,
  outer_line_move_error: true,
  outer_line_fire_error: true
};

export const defaultViewSettings = {
  mode: "player",
  range: "medium",
  map: "haven"
};
