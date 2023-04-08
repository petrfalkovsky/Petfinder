const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
const carousel = document.querySelector("#carousel");

const itemLeft = document.querySelector("#item-left");
const itemRight = document.querySelector("#item-right");

//создаю шаблон карточки
function createCardElement() {
  const card = document.createElement("div");
  card.classList.add("card");
  return card;
}

function moveLeft() {
  carousel.classList.add("transition-left");
  btnLeft.removeEventListener("click", moveLeft);
  btnRight.removeEventListener("click", moveRight);
}

function moveRight() {
  carousel.classList.add("transition-right");
  btnLeft.removeEventListener("click", moveLeft);
  btnRight.removeEventListener("click", moveRight);
}

btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);

carousel.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName === "move-left") {
    carousel.classList.remove("transition-left");

    document.querySelector("#item-active").innerHTML = itemLeft.innerHTML;

    // генерирую карточку
    const card1 = createCardElement();
    card1.innerText = Math.floor(Math.random() * 8);
    // генерирую карточку
    const card2 = createCardElement();
    card2.innerText = Math.floor(Math.random() * 8);
    // генерирую карточку
    const card3 = createCardElement();
    card3.innerText = Math.floor(Math.random() * 8);
    //обнуляю удаляя
    itemLeft.innerHTML = "";
    // добавляю внутрm еще элемент
    //todo не по очереди добавлять, а фором
    itemLeft.appendChild(card1);
    itemLeft.appendChild(card2);
    itemLeft.appendChild(card3);
  } else {
    carousel.classList.remove("transition-right");
    document.querySelector("#item-active").innerHTML = itemRight.innerHTML;

    // генерирую карточку
    const card1 = createCardElement();
    card1.innerText = Math.floor(Math.random() * 8);
    // генерирую карточку
    const card2 = createCardElement();
    card2.innerText = Math.floor(Math.random() * 8);
    // генерирую карточку
    const card3 = createCardElement();
    card3.innerText = Math.floor(Math.random() * 8);
    //обнуляю удаляя
    itemRight.innerHTML = "";
    // добавляю внутрm еще элемент
    //todo не по очереди добавлять, а фором
    itemRight.appendChild(card1);
    itemRight.appendChild(card2);
    itemRight.appendChild(card3);
  }

  btnLeft.addEventListener("click", moveLeft);
  btnRight.addEventListener("click", moveRight);
});
