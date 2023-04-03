const burgerContainer = document.querySelector(".nav__burger-container");

burgerContainer.addEventListener("click", function () {
  this.classList.toggle("active");
});
