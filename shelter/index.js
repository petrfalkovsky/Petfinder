console.log(
  "Реализация burger menu на обеих страницах\n -  при ширине страницы меньше 768рх панель навигации скрывается, появляется бургер-иконка\n -  при нажатии на бургер-иконку, справа плавно появляется адаптивное меню шириной 320px, бургер-иконка плавно поворачивается на 90 градусов\n -  высота адаптивного меню занимает всю высоту экрана\n -  при повторном нажатии на бургер-иконку или на свободное от бургер-меню пространство адаптивное меню плавно скрывается уезжая за правую часть экрана, бургер-иконка плавно поворачивается на 90 градусов обратно\n -  бургер-иконка создана при помощи htmls, без использования изображений\n -  ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям, сохраняются заданные на первом этапе выполнения задания требования интерактивности элементов меню\n -  при клике по любой ссылке (интерактивной или неинтерактивной) в меню адаптивное меню плавно скрывается вправо, бургер-иконка поворачивается на 90 градусов обратно\n -  расположение и размеры элементов в бургер-меню соответствует макету (центрирование по вертикали и горизонтали элементов меню, расположение иконки). При этом на странице Pets цветовая схема может быть как темная, так и светлая\n -  область, свободная от бургер-меню, затемняется\n -  страница под бургер-меню не прокручивается\n -  Реализация слайдера-карусели на странице Main\n -  при нажатии на стрелки происходит переход к новому блоку элементов\n -  смена блоков происходит с соответствующей анимацией карусели (способ выполнения анимации не проверяется)\n -  слайдер бесконечен, т.е. можно бесконечно много нажимать влево или вправо, и каждый раз будет прокрутка в эту сторону с новым набором карточек\n -  при переключении влево или вправо прокручивается ровно столько карточек, сколько показывается при текущей ширине экрана (3 для 1280px, 2 для 768px, 1 для 320px)\n -  каждый новый слайд содержит псевдослучайный набор карточек животных, т.е. формируется из исходных объектов в случайном порядке со следующими условиями: в текущем блоке слайда карточки с питомцами не повторяются\n -  в следующем блоке нет дублирования карточек с текущим блоком. Например в слайдере из 3 элементов, следующий выезжающий слайд будет содержать 3 (из 8 доступных) новых карточки питомца, таких, каких не было среди 3х карточек на предыдущем уехавшем слайде\n -  сохраняется только одно предыдущее состояние. Т.е. при последовательном переходе два раза влево, а потом два раза вправо, мы получим набор карточек, отличный от исходного\n -  при каждой перезагрузке страницы формируется новая последовательность карточек\n -  генерация наборов карточек происходит на основе 8 объектов с данными о животных\n -  при изменении ширины экрана (от 1280px до 320px и обратно), слайдер перестраивается и работает без перезагрузки страницы (набор карточек при этом может как изменяться, так и оставаться тем же, скрывая лишнюю или добавляя недостающую, и сохраняя при этом описанные для слайдера требования)\n -  Реализация пагинации на странице Pets\n -  при перезагрузке страницы всегда открывается первая страница пагинации\n -  при нажатии кнопок > или < открывается следующая или предыдущая страница пагинации соответственно\n -  при нажатии кнопок >> или << открывается последняя или первая страница пагинации соответственно\n -  при открытии первой страницы кнопки << и < неактивны\n -  при открытии последней страницы кнопки > и >> неактивны\n -  в кружке по центру указан номер текущей страницы. При переключении страниц номер меняется на актуальный\n -  каждая страница пагинации содержит псевдослучайный набор питомцев, т.е. формируется из исходных объектов в случайном порядке со следующими условиями: при загрузке страницы формируется массив из 48 объектов питомцев. Каждый из 8 питомцев должен встречаться ровно 6 раз\n -  при каждой перезагрузке страницы формируется новый массив со случайной последовательностью\n -  карточки питомцев не должны повторяться на одной странице\n -  при переключении страницы данные меняются (для >1280px меняется порядок карточек, для остальных - меняется набор и порядок карточек)\n -  при неизменных размерах области пагинации, в том числе размерах окна браузера, и без перезагрузки страницы, возвращаясь на страницу под определенным номером, контент на ней всегда будет одинаков. Т.е. карточки питомцев будут в том же расположении, что и были до перехода на другие страницы\n -  общее количество страниц при ширине экрана 1280px - 6, при 768px - 8, при 320px - 16 страниц\n -  при изменении ширины экрана (от 1280px до 320px и обратно), пагинация перестраивается и работает без перезагрузки страницы (страница может оставаться той же или переключаться, при этом сформированный массив - общая последовательность карточек - не обновляется, сохраняются все остальные требования к пагинации)\n -  Реализация попап на обеих страницах\n -  попап появляется при нажатии на любое место карточки с описанием конкретного животного\n -  часть страницы вне попапа затемняется\n -  при открытии попапа вертикальный скролл страницы становится неактивным, при закрытии - снова активным\n -  при нажатии на область вокруг попапа или на кнопку с крестиком попап закрывается, при этом при нажатии на сам попап ничего не происходит\n -  кнопка с крестиком интерактивная\n -  окно попапа (не считая кнопку с крестиком) центрировано по всем осям, размеры элементов попапа и их расположение совпадают с макетом\n - "
);
