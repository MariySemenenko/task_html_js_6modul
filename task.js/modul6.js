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