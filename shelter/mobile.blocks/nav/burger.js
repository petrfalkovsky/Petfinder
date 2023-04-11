document.addEventListener("DOMContentLoaded", function (event) {
  const burgerContainer = document.querySelector(".nav__burger-container");
  const menu = document.querySelector(".nav__menu");
  const overlay = document.querySelector(".nav__overlay");
  const body = document.querySelector("body");

  burgerContainer.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });

  function createMobileMenu() {
    const menu = document.createElement("div");
    menu.classList.add("nav__menu");
    return carmenudDiv;
  }

  document.addEventListener("click", function (event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickInsideBurger = burgerContainer.contains(event.target);
    const isClickInsideOverlay = overlay.contains(event.target);
    const isMenuOpen = menu.classList.contains("active");

    if (
      !isClickInsideMenu &&
      !isClickInsideBurger &&
      !isClickInsideOverlay &&
      isMenuOpen
    ) {
      burgerContainer.classList.remove("active");
      menu.classList.remove("active");
      overlay.classList.remove("active");
      body.classList.remove("no-scroll");
    } else if (isClickInsideMenu && isMenuOpen) {
      burgerContainer.classList.remove("active");
      menu.classList.remove("active");
      overlay.classList.remove("active");
      body.classList.remove("no-scroll");
    } else if (
      !isClickInsideMenu &&
      !isClickInsideBurger &&
      !isClickInsideOverlay &&
      !isMenuOpen
    ) {
      burgerContainer.classList.remove("active");
      overlay.classList.remove("active");
    } else if (!isClickInsideMenu && !isClickInsideBurger && isMenuOpen) {
      burgerContainer.classList.remove("active");
      menu.classList.remove("active");
      overlay.classList.remove("active");
      body.classList.remove("no-scroll");
    }
  });
});
