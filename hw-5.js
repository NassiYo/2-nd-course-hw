// Игра "Угадай число"
function startGame1() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    while (true) {
        let userNumber = prompt('Угадай число от 1 до 100');

        if (userNumber === null) {
            alert("Игра отменена");
            break;
        }

        userNumber = Number(userNumber);

        if (Number.isNaN(userNumber)) {
            alert("Вы ввели не число");
            continue;
        } else if (userNumber === randomNumber) {
            alert("Ура, ты угадал :)");
            break;
        } else if (userNumber > randomNumber) {
            alert("Неверно, загаданное число меньше. Попробуй еще раз.")
        } else {
            alert("Неверно, загаданное число больше. Попробуй еще раз.")
        }
    }
}

