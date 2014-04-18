'use strict';
/* Some until functions */

function gameIsOn(){
  if(document.querySelector('.menu').style.display == 'none')
      return true

  return false
}

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