/* ЗАДАЧА 1.
Вам необхідно намалювати в консолі прямокутний трикутник із зірочок (або плюсиків, або якогось іншого символу): на першому рядку - одна зірочка, на другому - дві, і так далі. Рішення оформіть у вигляді функції, куди передаються два параметри: висота трикутника та символ, яким його потрібно "малювати".

Якось так:

// виклик функції

drawTriangle(5, '*');

// результат роботи функції в консолі

*

**

***

****

*****

Умови виконання ДЗ:

Домашню роботу необхідно зробити двома способами
В задачі не потрібно використовувати prompt() або щось інше повязане з UI
Не використовувати функції або інші матеріали, які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки*/

// Функція 1: повертає масив рядків
function drawTriangle(height, symbol) {
  let result = [];
  for (let i = 1; i <= height; i++) {
    result.push(symbol.repeat(i));
  }
  return result;
}

// Використання (логування окремо)
let triangle1 = drawTriangle(6, '*');
triangle1.forEach(line => console.log(line));

let triangle2 = drawTriangle(4, '+');
triangle2.forEach(line => console.log(line));

let triangle3 = drawTriangle(8, '♪');
triangle3.forEach(line => console.log(line));


// Функція 2: з while, теж повертає масив рядків
function drawTriangleWhile(height, symbol) {
  let result = [];
  let i = 1;
  while (i <= height) {
    result.push(symbol.repeat(i));
    i++;
  }
  return result;
}

// Використання
let triangle4 = drawTriangleWhile(10, '#');
triangle4.forEach(line => console.log(line));