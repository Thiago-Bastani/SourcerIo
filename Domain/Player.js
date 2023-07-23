import { type } from "./Definitions/Constants";

let Player = function (
  name = type.string,
  format = type.string,
  color = type.hexa_color,
  attributes = type.list
) {
  this.name = name;
  this.format = format;
  this.color = color;
  this.attributes = attributes;
  this.posX = 0;
  this.posY = 0;
  return this;
};

export default Player;
