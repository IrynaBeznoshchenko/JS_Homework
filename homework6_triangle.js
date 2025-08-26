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

// Рішення 1 з for
function drawTriangle(height, symbol) {
  let result = '';
  let row = '';
  
  for (let i = 1; i <= height; i++) {
    row += symbol;
    result += row + '\n'; // додаємо рядок та перехід на новий рядок
  }
  
  return result;
}

// Функція для логування
function logTriangle(triangleString) {
  console.log(triangleString);
}

// Рішення 2 з while
function drawTriangle(height, symbol) {
  let result = '';
  let row = '';
  let i = 1;
  
  while (i <= height) {
    row += symbol;
    result += row + '\n';
    i++;
  }
  
  return result;
}

// Використання (логування)
logTriangle(drawTriangle(6, '*'));
logTriangle(drawTriangle(4, '+'));
logTriangle(drawTriangle(8, '♪'));



