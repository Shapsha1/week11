//Пример
//Используйте метод querySelector, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Ты нашёл элемент и изменил его текст!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

const paragraph = document.getElementById("practicum0");

function makeZero() {
    paragraph.innerText = "Ты нашёл элемент и изменил его текст!";
}

document.querySelector(".b-0").onclick = makeZero;

//Задание 1
//Используйте метод getElementById, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Привет!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)
const p1 = document.getElementById("practicum");

function makeOne() {
    p1.textContent = "Привет!";
    //Ваш код
}

document.querySelector(".b-1").onclick = makeOne;

//Задание 2
//Используйте метод getElementById, чтобы найти элемент <span>. При нажатии на кнопку измените его текст на "Привет, Мир!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)
const p2 = document.getElementById("practicum2");
function makeTwo() {
    p2.innerHTML = "Привет, Мир!";
    //Ваш код
}

document.querySelector(".b-2").onclick = makeTwo;

//Задание 3
//Используйте метод querySelector, чтобы найти элемент <h1>. При нажатии на кнопку измените его текст на "Заголовок изменен!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)
const h1 = document.querySelector("#practicum3");
function makeThree() {
    h1.innerText = "Заголовок изменен!";
    //Ваш код
}

document.querySelector(".b-3").onclick = makeThree;

//Задание 4
//Используйте метод querySelector, чтобы найти элемент <div>. При нажатии на кнопку измените его фоновый цвет на красный.
//Подсказка: Используйте свойство style для изменения стилей элемента
const p4 = document.querySelector("#practicum4");
function makeFour() {
    p4.style.backgroundColor = "red";
    //Ваш код
}

document.querySelector(".b-4").onclick = makeFour;

//Задание 5
//Используйте метод getElementById, чтобы найти элемент <input>. При нажатии на кнопку измените его значение на "Новое значение".
//Подсказка: Используйте свойство value для изменения значения элемента формы
const p5 = document.getElementById("practicum5");
function makeFive() {
    p5.value = "Новое значение";
}

document.querySelector(".b-5").onclick = makeFive;

//Задание 6
//Используйте метод getElementById, чтобы найти элемент <img>. При нажатии на кнопку измените его атрибут src на "newimage.jpg", а атрибут alt на "Новое изображение".
//Подсказка: Используйте знак равенства для изменения атрибутов элемента
const p6 = document.getElementById("practicum6");

function makeSix() {
    var img = document.getElementById("practicum6");
    img.src = "newimage.jpg";
    img.alt = "Новое изображение";
}

document.querySelector(".b-6").onclick = makeSix;

//Задание 7
//Используйте метод querySelector, чтобы найти элемент <a>. При нажатии на кнопку измените его href на "https://www.google.com", а название ссылки на "Ссылка на Google".
//Подсказка: Используйте знак равенства для изменения атрибутов элемента и метод для изменения текстового содержимого элемента
const p7 = document.querySelector("#practicum7");
function makeSeven() {
    p7.href = "https://www.google.com";
    p7.textContent = "Ссылка на Google";
    //Ваш код
}

document.querySelector(".b-7").onclick = makeSeven;

//Задание 8
//Используйте метод getElementById, чтобы найти элемент <ul>. При нажатии на кнопку добавьте новый элемент <li> со значением "Новый элемент" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.
const p8 = document.getElementById("practicum8");
function makeEight() {
    let newOne = document.createElement("li");
    newOne.textContent = "Новый элемент";
    p8.append(newOne);
}

document.querySelector(".b-8").onclick = makeEight;

//Задание 9
//Используйте метод getElementById, чтобы найти элемент <select>. При нажатии на кнопку добавьте новый элемент <option> со значением "Новый вариант" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.

function makeNine() {
    const p9 = document.getElementById("practicum9");
    let newOne = document.createElement("option");
    newOne.textContent = "Новый вариант";
    p9.append(newOne);
}

document.querySelector(".b-9").onclick = makeNine;

//Задание 10
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его стиль на "display: none;", чтобы скрыть его.
//Подсказка: Используйте свойство display для изменения стилей элемента
const p10 = document.getElementById("practicum10");
function makeTen() {
    p10.style.display = "none";
    //Ваш код
}

document.querySelector(".b-10").onclick = makeTen;

//Задание 11
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его ширину на 400px и высоту на 200px.
//Подсказка: Используйте свойство style для изменения стилей элемента
const p11 = document.getElementById("practicum11");
function makeEleven() {
    p11.style.width = "400px";
    p11.style.height = "200px";
    //Ваш код
}

document.querySelector(".b-11").onclick = makeEleven;

//Задание 12
//Используйте метод querySelector, чтобы найти элемент <div>. При клике на этот элемент измените его ширину на 400px и высоту на 200px. При повторном клике верните его размеры в исходное состояние.
//Подсказка: Используйте метод toggle() для добавления/удаления класса, который изменяет размеры элемента
const p12 = document.querySelector("#practicum12");
function makeTwelve() {
    p12.classList.toggle("large");
    //Ваш код
}
p12.onclick = makeTwelve;
//Задание 13
//Используйте метод `getElementsByTagName`, чтобы найти первый элемент <ol>. Затем измените его текст на "Первый!".
//Подсказка: Используйте метод для изменения текстового содержимого элемента
const p13 = document.getElementsByTagName("ol");
function makeThirteen() {
    p13[0].textContent = "Первый!";
    //Ваш код
}

document.querySelector(".b-13").onclick = makeThirteen;

//Задание 14
//Используйте метод querySelectorAll, чтобы найти все элементы <p> на странице. Затем измените их текст на "Огого, что могу!".
//Метод forEach является методом массивов в JavaScript. Он выполняет указанную функцию один раз для каждого элемента в массиве. С этим методом мы познакомимся на следующей неделе.

function makeFourteen() {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(function (paragraph) {
        paragraph.innerText = "Огого, что могу!";
    });
}

document.querySelector(".b-14").onclick = makeFourteen;

//Если задание выполнено верно, то вы увидите, что все элементы <p> на странице, в том числе и задния, изменили свои значения.  Чтобы вернуть всё, как было до выполнения задания, перезагрузите страницу.

//Задание 15
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "practicum15".
//Подсказка: Используйте метод remove для удаления класса элемента
const p15 = document.getElementById("practicum15");
function makeFifteen() {
    p15.classList.remove("practicum15");
    //Ваш код
}

document.querySelector(".b-15").onclick = makeFifteen;

//Задание 16
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "practicum16".
//Подсказка: Используйте метод add для добавления класса элемента
const p16 = document.getElementById("practicum16");
function makeSixteen() {
    p16.classList.add("practicum16");
    //Ваш код
}

document.querySelector(".b-16").onclick = makeSixteen;

//Задание 17
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку переключите у него класс "color", который изменяет его фоновый цвет. Если класс уже присутствует, удалите его, иначе добавьте.
//Подсказка: Используйте метод toggle класса элемента
const p17 = document.getElementById("practicum17");
function makeSeventeen() {
    p17.classList.toggle("color");
    //Ваш код
}

document.querySelector(".b-17").onclick = makeSeventeen;

//Задание 18
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "active", который изменит его стиль, например, изменит цвет текста. При повторном нажатии удалите класс "active".
//Подсказка: Используйте метод toggle класса элемента
const p18 = document.getElementById("practicum18");
function makeEighteen() {
    p18.classList.toggle("active");
    //Ваш код
}

document.querySelector(".b-18").onclick = makeEighteen;

//Задание 19
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "active", который изменяет его стиль, например, изменяет цвет текста.
//Подсказка: Используйте метод remove класса элемента
const p19 = document.getElementById("practicum19");
function makeNineteen() {
    p19.classList.remove("active");
    //Ваш код
}

document.querySelector(".b-19").onclick = makeNineteen;

//Задание 20
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в начало элемента <div> новый дочерний элемент <p> с текстом "Добавлено в начало".
//Подсказка: Используйте метод prepend для добавления нового дочернего элемента в начало элемента <div>
const p20 = document.getElementById("practicum20");
function makeTwenty() {
    let newOne = document.createElement("p");
    newOne.textContent = "Добавлено в начало";
    p20.prepend(newOne);
    //Ваш код
}

document.querySelector(".b-20").onclick = makeTwenty;

//Задание 21
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в конец элемента <div> новый дочерний элемент <p> с текстом "Добавлено в конец".
//Подсказка: Используйте метод append для добавления нового дочернего элемента в конец элемента <div>
const p21 = document.getElementById("practicum21");
function makeTwentyOne() {
    let newOne = document.createElement("p");
    newOne.textContent = "Добавлено в конец";
    p21.append(newOne);
    //Ваш код
}

document.querySelector(".b-21").onclick = makeTwentyOne;

//Задание 22
//Используйте метод getElementById, чтобы найти элемент <img>. Выведите информацию на экран о наличии атрибута "src" у изображения.
//Подсказка: Используйте метод hasAttribute для проверки наличия атрибута
const p22 = document.getElementById("practicum22");
function makeTwentyTwo() {
    //1 шаг: Найдите элемент
    //2 шаг: Создайте переменную, которая проверяет наличие атрибута у найденного элемента
    let chek = p22.hasAttribute("src");
    //3 шаг: Найдите элемент, в который нужно вставить значение
    let result = document.getElementById("result22");
    result.textContent = `Атрибут "src" присутствует: ${chek} `;
    //4 шаг: Добавьте в эелемент текстовое значение 2 шага. Например: переменная = 'Атрибут "src" присутствует: ' + название переменной из 2 шага;
}

document.querySelector(".b-22").onclick = makeTwentyTwo;

//Задание 23
//Используйте метод getElementById, чтобы найти элемент <a>. Удалите атрибут "href" ссылки.
//Подсказка: Используйте метод removeAttribute для удаления атрибута

function makeTwentyThree() {
    const p23 = document.getElementById("practicum23");
    p23.removeAttribute("href");
    //Ваш код
}

document.querySelector(".b-23").onclick = makeTwentyThree;

//Задание 24
//Используйте метод getElementById, чтобы найти элемент <input>. Установите атрибут "value" текстового поля на значение "Новое значение".
//Подсказка: Используйте метод setAttribute для установки атрибута

function makeTwentyFour() {
    const p24 = document.getElementById("practicum24");
    p24.setAttribute("value", "Новое значение");
    //Ваш код
}

document.querySelector(".b-24").onclick = makeTwentyFour;

//Задание 25
//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте атрибут "data-info" со значением "Дополнительная информация" к элементу <div>. Выведите значение атрибута на экран.
//Подсказка: Используйте метод setAttribute для добавления атрибута

function makeTwentyFive() {
    const p25 = document.getElementById("practicum25");
    p25.setAttribute("data-info", "Дополнительная информация");
    let text = p25.getAttribute("data-info");
    document.getElementById("infoOutput").textContent = `Добавленный атрибут: ${text}`;
}

document.querySelector(".b-25").onclick = makeTwentyFive;

//Задание 26
//Используйте метод closest, чтобы найти ближайший родительский элемент с классом "parent". При нажатии на кнопку измените его фоновый цвет на красный.
//Подсказка: Используйте метод closest для поиска ближайшего родительского элемента

const button = document.querySelector(".b-26");
const parent = button.closest(".parent");
// const parent = Ваш код;

const makeTwentySix = () => {
    parent.style.backgroundColor = "red";
};

document.querySelector(".b-26").onclick = makeTwentySix;

//Задание 27
//Используйте метод `getElementById`, чтобы найти элемент `<div>`. Проверьте, содержит ли данный элемент класс `highlight`. Выедите результат в <div> c id result.
//Подсказка: Используйте метод `contains` для проверки наличия класса у элемента. В <div> должен появиться результат true или false.
const p27 = document.getElementById("practicum27");
function makeTwentySeven() {
    let chek = p27.classList.contains("highlight");
    let output = document.querySelector("#result");
    output.textContent = chek;
    //Создайте переменную и сохраните в неё результат проверки метода contains. Например: const result = p.classList.contains('active');
    //Найдите переменную, в которую нужно вывести результат
    //Запишите результат в переменную
}

document.querySelector(".b-27").onclick = makeTwentySeven;

//Задание 28
//Используйте метод getElementById, чтобы найти элемент <button>. Добавьте обработчик события click, который будет выводить сообщение "Кнопка нажата" в консоль при каждом клике на кнопку.
//Подсказка: Используйте метод addEventListener для добавления обработчика события
const p28 = document.getElementById("practicum28");

const buttonTaskTwentyEight = document.getElementById("button28");

function handleClick() {
    console.log("Кнопка нажата");
}
buttonTaskTwentyEight.addEventListener("click", handleClick);
//Добавьте слушатель eventListener на кнопку buttonTaskTwentyEight

//Задание 29
//Используйте метод getElementById, чтобы найти элемент <input />. Добавьте обработчик события change, который будет выводить сообщение "Значение изменено" в консоль при изменении значения в поле ввода.
//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.
const p29 = document.getElementById("input29");
function handleChange() {
    console.log("Значение изменено");
}
p29.addEventListener("change", handleChange);
//Ваш код

//Задание 30
//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте обработчик события `mouseover`, который будет выводить сообщение "Курсор наведен на элемент" в консоль при наведении курсора на элемент.
//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.
const p30 = document.getElementById("div30");
function handleMouseOver() {
    console.log("Курсор наведен на элемент");
}
p30.addEventListener("mouseover", handleMouseOver);
//Ваш код
