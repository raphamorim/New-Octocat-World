'use strict';
/* Events */

/* start game */
var btnStart = document.querySelector('.btn-start-game');
btnStart.addEventListener("click", startGame, false);

/* keyboard */
document.addEventListener('keydown', function(event) {
    if(!gameIsOn()) return false;

    if(event.keyCode == 37)
        return pressKey('.left');

    if(event.keyCode == 38)
        return pressKey('.up');

    if(event.keyCode == 39)
        return pressKey('.right');

    if(event.keyCode == 40)
        return pressKey('.down');
});
