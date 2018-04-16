const canvas5 = document.getElementById('c5');
const context5 = canvas5.getContext('2d');

var referenceWidth = 400;
var referenceHeight = 200;

var video = document.querySelector('video');
video.addEventListener('loadeddata', setup5);

function setup5() {
  canvas5.style.width = referenceWidth + 'px';
  canvas5.style.height = referenceHeight + 'px';

  var scale = window.devicePixelRatio;
  canvas5.width = referenceWidth * scale;
  canvas5.height = referenceHeight * scale;

  context5.scale(scale, scale);

  draw5();
}

  function draw5() {
   context5.drawImage(video, 0, 0, referenceWidth, referenceHeight);
   requestAnimationFrame(draw5);
 }
