const rotation = new Map();

rotation.set(" ", [135, 135]);

rotation.set("┘", [180, 270]);
rotation.set("└", [0, 270]);
rotation.set("┐", [90, 180]);
rotation.set("┌", [0, 90]);

rotation.set("-", [0, 180]);
rotation.set("|", [90, 270]);

export {
  rotation
}