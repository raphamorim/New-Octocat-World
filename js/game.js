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
    var menu = document.querySelector('.menu'),
        help = document.querySelector('.help'),
        phase = document.querySelector('.level');

    phase.style.opacity = 0;
    phase.style.display = 'block';

    fadeOut(help, function(){
        menu.style.display = 'none';
        document.querySelector('.octocat').style.left = '5px';
        fadeIn(phase);
    });
}