'use strict';
/* GameFunctions */

/* start Game function, make animations too.. and create a flag */
function tutorial() {
    var help = document.querySelector('.help');
        help.style.opacity = 0;
        help.style.display = 'block';

    var menu = document.querySelector('.menu');
    var info = document.querySelector('.info');

    fadeOut(info, function(){
        info.style.display = 'none';
        fadeIn(help);
        menu.classList.add('menuToUp');
    });
}

function startGame() {
    var menu = document.querySelector('.info');
        menu.style.opacity = 1;
        menu.style.display = 'block';

    fadeOut(menu, function(){
        menu.style.display = 'none';
    }, 700);
}