'use strict';
/* Events */

// To play game without menu
// onReady(startGame());

/* start tutorial */
var btnTutorial = document.querySelector('.tutorial');
btnTutorial.addEventListener("click", tutorial, false);

/* start game */
var btnStart = document.querySelector('.start-game');
btnStart.addEventListener("click", startGame, false);

/* keyboard */
document.addEventListener('keydown', function(event) {
    var octocat = document.querySelector('.octocat');

    if (!gameIsOn()) return false;

    switch (event.keyCode) {
        case 37:
            return moveToLeft(octocat);
            break;

        case 39:
            return moveToRight(octocat);
            break;

        case 38:
            return moveJump(octocat);
            break;

        case 32:
            return moveJump(octocat);
            break;
    }
});
