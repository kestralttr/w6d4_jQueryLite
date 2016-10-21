function Router(node) {
  this.node = node;
}

Router.prototype.start = function () {
  // console.log(this);
  this.render();
  window.addEventListener("hashchange", this.render.bind(this));
};

Router.prototype.activeRoute = function () {
  let route = window.location.hash;
  return route.substring(1, this.length);
};

Router.prototype.render = function () {
  // console.log(this);
  // debugger;
  this.node.innerHTML = "";
  let currentRouteName = this.activeRoute(); // get name of current Route
  let newP = document.createElement("p");
  newP.innerHTML = currentRouteName;
  this.node.appendChild(newP);

};

module.exports = Router;
