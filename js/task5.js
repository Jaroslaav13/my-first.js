// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
//  перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid,
//  які ми вже додали у вихідні файли завдання.


const inputValidator = document.querySelector('#validation-input');
inputValidator.addEventListener('blur', (event) => {
    const numberOfCharactersEntered = event.currentTarget.value.length;
    if (numberOfCharactersEntered === 6) {
        inputValidator.classList.remove('invalid');
        inputValidator.classList.add('valid');
    } else {
        inputValidator.classList.remove('valid');
        inputValidator.classList.add('invalid');
    }

}
)