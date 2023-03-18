//створюємо подію яка відбувається при відправленні форми


//достукуємось до форми
// const form = document.querySelector(".form");

// //додаюмо до форми тип події submit і функцію handleSubmit
// form.addEventListener("submit", handleSubmit);

// //у функцію додаю параметр event це сама подія
// function handleSubmit(event) {

//     //виключаю перезавантаження сторінки
//   event.preventDefault();
//   const {
    
//     //через elements достукуємось до логіна і пароля щоб з ними працювати
//     elements: { login, password } //робимо деструктуризацію обьєкта

//   } = event.currentTarget; // це форма на яку навішали обробник подій 

// //витягуємо значення input з логіном і паролем
//   if (login.value === "" || password.value === "") {

//     //якщо значення порожні
//     return console.log("Please fill in all the fields!");
//   }
// //якщо значення не порожні вмводимо рядок
//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   //reset очищає форму після кожного введення
//   event.currentTarget.reset();
// }
///////////////////////////////////////////
//вставляємо елемент h1 в розмітку та клонуємо його  

//достукуємось до двох елементів
// const container = document.querySelector('.container');
// const footer = document.querySelector('footer');

// //створимо h1
// const h1 = document.createElement('h1');

// // додаємо h1 текст
// h1.textContent = 'Hello world!';

// //h1 добавляю до container
// container.append(h1);

// // перевикористовуємо змінну h1 до footer
// footer.append(h1);

// //клонуємо h1 щоб був у двох  різних місцях
// footer.append(h1.cloneNode(true));// це глибоке копіювання

/////////////////////////////////
//ця функція спрацьовує при події change це коли ми знімаємо
//фокус з інпута і клікнули за межами інпута

// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   //тут зберігається порядковий індекс
//   const selectedOptionIndex = select.selectedIndex;
//   //тут зберігається масив усіх значень option
//   const selectedOptionText = select.options[selectedOptionIndex].text;
// //тут зберігається текст контент
// //достукуємось до першого span
//   textOutput.textContent = selectedOptionText;
//   //достукуємось до другого span
//   valueOutput.textContent = selectedOptionValue;
// }

//////////////////////////////////////////

//додаємо обробники подій
// 'show modal зявиться відразу як обновиться сторінка
const showModal = () => {
  console.log('show modal');
};
addEventListener('DOMContentLoaded', showModal); 
