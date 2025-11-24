/*"Параноя"

В нас є масив обʼєктів в яких міститься email.
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.

За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @

- одне, або два слова які, можуть містити (латинські букви, цифри) яке може бути розділене крапкою. */

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Не підходить
    },
];

// Функція для валідації одного email
function validation(email) {
    const rex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail|yahoo)\.com$/i;
    return rex.test(email);
}

// Функція для перевірки масиву об’єктів
function objectValidate(arr) {
    return arr.filter(obj => validation(obj.email));
}

const trustedUsers = objectValidate(arr);

// Якщо потрібні лише email-и
const trustedEmails = trustedUsers.map(u => u.email);

// Вивід
if (trustedUsers.length > 0) {
    console.log('Успішний емейл');
    console.log("Повні дані:", trustedUsers);
    console.log("Тільки email-и:", trustedEmails);
} else {
    console.log('Не підходить даний емейл. Спробуй інший');
}
