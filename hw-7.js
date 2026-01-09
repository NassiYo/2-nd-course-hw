// Игра Переверни текст
function startGame3() {
    const userText = prompt('Введите текст');
    const reversText = userText.split('').reverse().join('');
    alert(reversText);
};