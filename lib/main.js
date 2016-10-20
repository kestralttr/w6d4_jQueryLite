const DOMNodeCollection = require("./dom_node_collection.js");

window.$l = function(arg) {
  let nodesArray;
  if (typeof arg === "string") {
    nodesArray = Array.prototype.slice.call(document.querySelectorAll(arg));
    return nodesArray;
  }
  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  }


};
