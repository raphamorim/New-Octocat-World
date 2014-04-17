'use strict';
/* Events */

/* start game */
var btnStart = document.querySelector('.btn-start-game');
btnStart.addEventListener("click", startGame, false);

/* keyboard */
document.addEventListener('keydown', function(event) {
    if (!gameIsOn()) return false;

    switch (event.keyCode) {
        case 37:
            pressKey('.left');
            break;

        case 38:
            pressKey('.up');
            break;

        case 39:
            pressKey('.right');
            break;

        case 40:
            pressKey('.down');
            break;

        case 65:
            pressKey('.btn-a');
            break;

        case 83:
            pressKey('.btn-b');
            break;
    }
});