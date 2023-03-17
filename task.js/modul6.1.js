//достукуємось до двох елементів
const container = document.querySelector('.container');
const footer = document.querySelector('footer');

//створимо h1
const h1 = document.querySelector('h1');

// додаємо h1 текст
h1.textContent = 'Hello world!';

//h1 добавляю до container
container.append(h1);

