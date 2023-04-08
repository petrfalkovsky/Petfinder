function init() {
  // определяю ширину экрана
  let screenWidth = 768; // window.innerWidth;
  let cardsToShow = 1; // показываю 1 карточку

  if (screenWidth >= 768) {
    cardsToShow = 2; // 2 карточки для экранов 768px
  }

  if (screenWidth >= 1280) {
    cardsToShow = 3; // 3 карточки для экранов 1280px
  }

  // создаю пустые массивы
  let pastArr = [];
  let currArr = [];
  let nextArr = [];

  generateNextArr();
  moveNextToCurr();
  generateNextArr();
  moveCurrToPast();
  moveNextToCurr();
  generateNextArr();

  console.log(forward());
  console.log(backward());

  return { pastArr, currArr, nextArr };

  // создаю массив nextArr
  function generateNextArr() {
    nextArr = [];
    for (let i = 0; i < cardsToShow; i++) {
      let nextValue;
      do {
        nextValue = Math.floor(Math.random() * 10) + 1;
      } while (currArr.includes(nextValue));
      nextArr.push(nextValue);
    }
  }

  // перемещаю nextArr в currArr
  function moveNextToCurr() {
    currArr = [...nextArr];
    nextArr = [];
  }

  // перемещею из массива currArr в pastArr
  function moveCurrToPast() {
    pastArr = [...currArr];
    currArr = [];
  }

  function forward() {
    pastArr = [];
    while (currArr.length > 0) {
      pastArr.push(currArr.shift());
    }
    while (nextArr.length > 0) {
      currArr.push(nextArr.shift());
    }
    generateNextArr();
    return {
      pastArr,
      currArr,
      nextArr
    };
  }

  function backward() {
    // меняем местами значения в массивах pastArr и currArr
    [pastArr, currArr] = [currArr, pastArr];

    // обнуляем значения массива nextArr
    nextArr = [];

    // генерируем массив nextArr (помним про проверку на наличие значений в currArr)
    generateNextArr();

    return {
      pastArr,
      currArr,
      nextArr
    };
  }
}

console.log(init());
