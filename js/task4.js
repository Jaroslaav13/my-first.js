// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
//  підставляє його поточне значення в span#name - output.Якщо інпут порожній,
//     у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const onInputEnter = inputName.addEventListener('input', (event) => {
    
const enterTextValue = event.currentTarget.value.trim();
    
    if (enterTextValue === ''|| enterTextValue ===' ') {
         outputName.textContent = 'Anonymous'
    } else {
        outputName.textContent = enterTextValue;
    }
})