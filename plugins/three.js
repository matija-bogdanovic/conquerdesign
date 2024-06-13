// plugins/three.js

import * as THREE from "three";

export default ({ app }, inject) => {
  // Inject `THREE` to the context as $three
  inject("three", THREE);
};
