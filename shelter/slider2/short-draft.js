const cards = [
  {
    id: 0,
    name: "Jennifer",
    img: "../assets/images/pets-h270/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    id: 1,
    name: "Sophia",
    img: "../assets/images/pets-h270/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    id: 2,
    name: "Woody",
    img: "../assets/images/pets-h270/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"]
  }
];
const cardCount = {
  320: 1,
  768: 2,
  1280: 3
};

const slider = document.querySelector(".slider");
const container = slider.querySelector(".slider-container");
const wrapper = slider.querySelector(".slider-wrapper");
const prevButton = slider.querySelector(".slider-prev");
const nextButton = slider.querySelector(".slider-next");

let currentIndex = 0;
let prevIndex = null;
let width = slider.offsetWidth;
let cardNumber = cardCount[width];
let cardIndexes = generateIndexes();

function generateIndexes() {
  const indexes = [];
  for (let i = 0; i < cards.length; i++) {
    indexes.push(i);
  }
  return shuffleArray(indexes);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createCardElement(card) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("slider-card");
  cardElement.innerHTML = `
    <img src="${card.img}" alt="${card.name}">
    <div class="slider-card-info">
      <h3>${card.name}</h3>
      <p>${card.description}</p>
    </div>
  `;
  return cardElement;
}

function renderCards() {
  wrapper.innerHTML = "";
  for (let i = 0; i < cardNumber; i++) {
    const cardIndex = cardIndexes[i];
    const card = cards[cardIndex];
    const cardElement = createCardElement(card);
    wrapper.appendChild(cardElement);
  }
}

function switchCards(direction) {
  if (direction === "prev") {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = cards.length - cardNumber;
    }
  } else {
    currentIndex++;
    if (currentIndex > cards.length - cardNumber) {
      currentIndex = 0;
    }
  }
  prevIndex = currentIndex;
  cardIndexes = generateIndexes();
  renderCards();
  wrapper.style.transform = `translateX(-${
    currentIndex * (100 / cardNumber)
  }%)`;
}

prevButton.addEventListener("click", () => switchCards("prev"));
nextButton.addEventListener("click", () => switchCards("next"));

window.addEventListener("resize", () => {
  const newWidth = slider.offsetWidth;
  if (newWidth !== width) {
    width = newWidth;
    cardNumber = cardCount[width];
    switchCards("next");
  }
});

switchCards("next");
