/* BigBoss
Уявімо собі, що ми є власниками великої компанії, яка розробляє платформу для продажу квитків.
Окрім того, наша компанія продає рішення для організації продажу цих квитків.
Таким чином, у нас будуть клієнти, які придбають наше програмне забезпечення (ПО).
По суті, ці клієнти будуть подібні до "дочірніх компаній" (subCompany), які вже використовують наше ПО для продажу квитків.
 Крім цього, ці "дочірні компанії" також можуть стати постачальниками цього рішення, 
 і в цьому випадку вони вже будуть "внучатами компанії" (subSubCompany), і так далі і далі
 Ось приклад об'єкту, зверніть увагу на вкладеність, та майте на увазі, що об'єкт може ставати ще глибшим.
const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};
Вам необхідно написати функцію findValueByKey(Object, companyName), яка буде приймати значення у вигляді 'Клієнт 1.2' ('Велика Компанія', 'Клієнт 2'... ) та надавати інформацію про цю subCompany.

Умови виконання ДЗ

Не використовувати функції або інші матеріали, які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки
Будь ласка, надайте наступні дані для перевірки вашої роботи:

Створіть гілку js_homework6.
Додайте туди ваше домашне завдання
Вишліть посилання на вашу гілку*/

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

// Універсальна функція пошуку компанії з шляхом
function findValueWithPath(company, companyName, path = []) {
    let currentPath = [...path, company.name];

    if (company.name === companyName) {
        return { company, path: currentPath };
    }

    for (let key in company) {
        if (Array.isArray(company[key])) {
            for (let item of company[key]) {
                const found = findValueWithPath(item, companyName, currentPath);
                if (found) return found;
            }
        }
    }

    return null;
}

// Функція для красивого виводу
function logResult(result) {
    console.log(JSON.stringify(result, null, 2));
}

// Приклади використання
logResult(findValueWithPath(company, "SuperCompany"));
logResult(findValueWithPath(company, "Клієнт 2"));
logResult(findValueWithPath(company, "Клієнт 1.2"));
logResult(findValueWithPath(company, "Велика Компанія"));
