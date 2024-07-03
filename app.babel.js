"use strict";

function a(a, b) {
  var result = args[a] + args[b];
  var oneMore = function oneMore() {
    return result + 10;
  };
  return oneMore();
}
