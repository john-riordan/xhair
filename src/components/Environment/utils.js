export function getEnvironmentImage(type = "cropped", view, images) {
  const { mode, range, map } = view;
  switch (mode) {
    case "player":
      return images[type][mode][range];
    case "map":
      return images[type][mode][map];
    default:
      return images[type][mode][range];
  }
}
