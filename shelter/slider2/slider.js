const petsList = [
  {
    id: 0,
    name: "Jennifer",
    img: "assets/images/pets-h270/jennifer.png",
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
    img: "assets/images/pets-h500/sophia.png",
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
    img: "assets/images/pets-h270/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"]
  },
  {
    id: 3,
    name: "Scarlett",
    img: "assets/images/pets-h270/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    id: 4,
    name: "Katrine",
    img: "assets/images/pets-h270/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    id: 5,
    name: "Timmy",
    img: "assets/images/pets-h270/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"]
  },
  {
    id: 6,
    name: "Freddie",
    img: "assets/images/pets-h270/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    id: 7,
    name: "Charly",
    img: "assets/images/pets-h270/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"]
  }
];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
const carousel = document.querySelector("#carousel");

const itemLeft = document.querySelector("#item-left");
const itemRight = document.querySelector("#item-right");

//создаю шаблон карточки
function createCardElement() {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "zoom");
  return cardDiv;
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

  // генерирую уникальные числа
  function generateUniqueNumbers() {
    let uniqueNumbers = [];

    // если есть, достаю из localStorage, чтоб сравнить
    const localStorageNumbers = localStorage.getItem("uniqueNumbers");
    if (localStorageNumbers) {
      uniqueNumbers = JSON.parse(localStorageNumbers);
    }

    // генерю
    let isNewNumbersUnique = false;
    while (!isNewNumbersUnique) {
      let newNumbers = [];
      while (newNumbers.length < 3) {
        const randomNumber = Math.floor(Math.random() * 8);
        if (
          !newNumbers.includes(randomNumber) &&
          !uniqueNumbers.includes(randomNumber)
        ) {
          newNumbers.push(randomNumber);
        }
      }
      if (newNumbers.length === 3) {
        isNewNumbersUnique = true;
        uniqueNumbers = newNumbers;
      }
    }

    // сохраняю в локалсторидже
    localStorage.setItem("uniqueNumbers", JSON.stringify(uniqueNumbers));

    return uniqueNumbers;
  }

  let useRandomNumbers = true;
  let numbers;

  if (!localStorage.getItem("randomNumbers")) {
    // генерируем случайные числа только при первой загрузке страницы
    numbers = generateUniqueNumbers();
    localStorage.setItem("randomNumbers", JSON.stringify(numbers));
  } else {
    // используем сохраненные числа, если они есть
    useRandomNumbers = false;
    numbers = JSON.parse(localStorage.getItem("randomNumbers"));
  }

  console.log(numbers);

  const card1 = createCardElement();
  const card2 = createCardElement();
  const card3 = createCardElement();

  const animalCard1 = `
  <img src="${petsList[numbers[0]].img}" alt="${
    petsList[numbers[0]].name
  }" class="cardimg">
  <h3>${petsList[numbers[0]].name}</h3>
  <div class="cardbutton">
    <button name="learn_more" class="button button__outlined width">
      Learn more
    </button>
  </div>
`;
  card1.innerHTML = animalCard1;

  const animalCard2 = `
  <img src="${petsList[numbers[1]].img}" alt="${
    petsList[numbers[1]].name
  }" class="cardimg">
  <h3>${petsList[numbers[1]].name}</h3>
  <div class="cardbutton">
    <button name="learn_more" class="button button__outlined width">
      Learn more
    </button>
  </div>
`;
  card2.innerHTML = animalCard2;

  const animalCard3 = `
  <img src="${petsList[numbers[2]].img}" alt="${
    petsList[numbers[2]].name
  }" class="cardimg">
  <h3>${petsList[numbers[2]].name}</h3>
  <div class="cardbutton">
    <button name="learn_more" class="button button__outlined width">
      Learn more
    </button>
  </div>
`;
  card3.innerHTML = animalCard3;

  changedCard.innerHTML = "";
  changedCard.appendChild(card1);
  changedCard.appendChild(card2);
  changedCard.appendChild(card3);

  btnLeft.addEventListener("click", moveLeft);
  btnRight.addEventListener("click", moveRight);

  // если мы использовали сохраненные числа, то флаг useRandomNumbers будет равен false
  if (useRandomNumbers) {
    localStorage.removeItem("randomNumbers");
  }
});
