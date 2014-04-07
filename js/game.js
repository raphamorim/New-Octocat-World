'use strict';
/* GameFunctions */

/* start Game function, make animations too.. and create a flag */
function startGame() {
    var help = document.querySelector('.help');
        help.style.opacity = 0;
        help.style.display = 'block';

    var info = document.querySelector('.info');

    document.querySelector('.btn-power').style.background = 'lightgreen';

    fadeOut(info, function(){
        info.style.display = 'none';
        fadeIn(help);
    });
}
