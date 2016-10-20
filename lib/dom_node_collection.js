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
    // "this" will be an array of nodes
    this.HTMLElements.forEach( (element) => {

    });
  }



}



module.exports = DOMNodeCollection;
