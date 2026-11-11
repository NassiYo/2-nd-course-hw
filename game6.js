function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
};

const btnStartGame6El = document.querySelector('#btn-startGame6');

btnStartGame6El.addEventListener('click', () => {
    document.querySelector(".main").style.backgroundColor = getRandomColor();

});
