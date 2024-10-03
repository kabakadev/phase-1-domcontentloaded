// Your code goes here
document.addEventListener("DOMContentLoaded", function () {
  const p = document.querySelector("#text");
  p.textContent = "This is really cool!";
  console.log("this will be logged later after the DOM has finished loading");
});
