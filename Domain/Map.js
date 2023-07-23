import { type } from "./Definitions/Constants";

let Map = function (layout = type.string) {
  this.layout = layout;
  return this;
};

export default Map;
