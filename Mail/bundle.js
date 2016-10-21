/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Router = __webpack_require__(1);

	document.addEventListener("DOMContentLoaded", () => {

	  let content = document.querySelector(".content"); // select the element
	  let router = new Router(content); // send that element to the router constructor
	  router.start(); // "start" the router (which will render, and then add event listener for a hash change)

	  document.querySelectorAll(".sidebar-nav li").forEach((li) => {
	    li.addEventListener("click", () => {
	    window.location.hash = li.innerText.toLowerCase();
	  });

	});

	  // document.querySelectorAll("#restaurants li").forEach((li) => {
	  //   li.addEventListener("click", toggleLi);
	  // });

	});


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);