'use strict';
/* Some until functions */

function gameIsOn() {
    if (document.querySelector('.menu').style.display == 'none')
        return true

    return false
}

var onReady = function(handler) {
    // window is loaded already - just run the handler
    if(document && document.readyState==="complete") return handler();

    // non-IE: DOMContentLoaded event
    if(window.addEventListener) window.addEventListener("DOMContentLoaded",handler,false);

    // IE top frame: use scroll hack
    else if(window.attachEvent && window==window.top) { if(_readyQueue.push(handler)==1) _readyIEtop(); }

    // IE frame: use onload
    else if(window.attachEvent) window.attachEvent("onload",handler);
};

function fadeIn(el, callback, time) {
    el.style.opacity = 0;

    if (typeof callback === 'number') time = callback;
    if (time == undefined) time = 500;
    var last = +new Date();
    var tick = function() {
        el.style.opacity = +el.style.opacity + (new Date() - last) / time;
        last = +new Date();

        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        } else {
            if (typeof callback == "function") return callback();
        }
    };

    tick();
}

function fadeOut(el, callback, time) {
    el.style.opacity = 1;

    if (typeof callback === 'number') time = callback;
    if (time == undefined) time = 500;
    var last = +new Date();
    var tick = function() {
        el.style.opacity = el.style.opacity - (new Date() - last) / time;
        last = +new Date();

        if (-el.style.opacity <= 0) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        } else {
            if (typeof callback == "function") return callback();
        }
    };

    tick();
}

function moveToLeft(el, speed) {
    if(speed == null) speed = 0;
    el.style.left = (parseInt(el.style.left) - (speed++)) + 'px';

    if(speed <= 5) moveToLeft(el, speed);
}

function moveToRight(el, speed) {
    if(speed == null) speed = 20;
    el.style.left = (parseInt(el.style.left) + (speed - 1)) + 'px';

    if(speed <= 0) moveToLeft(el, speed);
}

function moveJump(el) {
    if(el.classList.contains('jumpToUp')) return;
    el.classList.add('jumpToUp');

    var trigger = window.setInterval(function(){
        el.classList.remove('jumpToUp');
        clearInterval(trigger);
    }, 300);
}