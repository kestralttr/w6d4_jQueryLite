const Router = require("./router.js");

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
