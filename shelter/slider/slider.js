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
  let changedCard;

  if (animationEvent.animationName === "move-left") {
    carousel.classList.remove("transition-left");
    changedCard = itemLeft;
    document.querySelector("#item-active").innerHTML = itemLeft.innerHTML;
  } else {
    carousel.classList.remove("transition-right");
    changedCard = itemRight;
    carousel.classList.remove("transition-left");
    document.querySelector("#item-active").innerHTML = itemRight.innerHTML;
  }

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
  changedCard.innerHTML = "";
  // добавляю внутрm еще элемент
  //todo не по очереди добавлять, а фором
  changedCard.appendChild(card1);
  changedCard.appendChild(card2);
  changedCard.appendChild(card3);

  btnLeft.addEventListener("click", moveLeft);
  btnRight.addEventListener("click", moveRight);
});
