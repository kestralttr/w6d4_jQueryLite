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

	const DOMNodeCollection = __webpack_require__(1);

	window.$l = function(arg) {
	  let nodesArray;
	  if (typeof arg === "string") {
	    nodesArray = Array.prototype.slice.call(document.querySelectorAll(arg));
	    return new DOMNodeCollection(nodesArray);
	  }
	  if (arg instanceof HTMLElement) {
	    return new DOMNodeCollection([arg]);
	  }


	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	class DOMNodeCollection {
	  constructor(htmlElements) {
	    this.htmlElements = htmlElements;
	  }

	  html(str) {
	    if (str === undefined) {
	      return this.htmlElements[0].innerHTML();
	    } else {
	      for (var i = 0; i < this.htmlElements.length; i++) {
	        this.htmlElements[i].innerHTML = str;
	      }
	    }
	  }

	  empty() {
	    this.html("");
	  }

	  append(arg) {
	    // if string, add
	    // if object, make a dom node collection object (with $l)
	      // clone arg each time, or will reference same arg each time....
	      // if $l, add node into other existing node
	    // if $l, add node into other existing node

	    // or use outerHTML() to conver to string, since innerHTML accepts string....


	    // cycle over each instance variable
	    this.htmlElements.forEach( (htmlEl) => {
	      // add outterHTML of this element to original element
	      // i.e. make a new child for every element in the collection
	      if (typeof arg === "string") {
	        htmlEl.innerHTML += arg;
	      }

	      if (arg instanceof HTMLElement) {
	        htmlEl.innerHTML += arg.outerHTML();
	      }


	      // if jQuery lite object, put it inside the inner html of the current
	      // jQuery lites collection
	      if (arg instanceof DOMNodeCollection)
	        arg.htmlElements.forEach( (argument) => {
	          htmlEl.innerHTML += argument.outerHTML();
	      });

	    });
	  }

	  attr(name, value) {
	    // each HTMLElement has a name, value map (.attributes) of all attributes
	    if (value === undefined) {
	      this.HTMLElements.forEach( (el) => {
	        for (let i = 0; i < el.attributes.length; i++) {
	          if (el.attributes[i].name === name) {
	            return el;
	          }
	        }
	      });
	    } else {
	      this.HTMLElements.forEach( (el) => {
	        el.setAttribute(name, value);
	      });
	    }

	  }

	  addClass(className) {
	    this.HTMLElements.forEach( (el) => {
	      el.setAttribute("class", className);
	    });
	  }

	  removeClass() {
	    this.HTMLElements.forEach( (el) => {
	      el.removeAttribute("class");
	    });
	  }

	  // children(){
	  //
	  //   this.HTMLElements.forEach( (el) => {
	  //
	  //   })
	  // }

	}



	module.exports = DOMNodeCollection;


/***/ }
/******/ ]);