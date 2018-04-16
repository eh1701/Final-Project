const canvas6 = document.getElementById('c6');
const context6 = canvas6.getContext('2d');

var referenceWidth = 400;
var referenceHeight = 200;

function setup6() {
  canvas6.style.width = referenceWidth + 'px';
  canvas6.style.height = referenceHeight + 'px';

  var scale = window.devicePixelRatio;
  canvas6.width = referenceWidth * scale;
  canvas6.height = referenceHeight * scale;

  context6.scale(scale, scale);

  draw6();
}

function draw6() {
  var img = new Image();
  img.src = 'part1media/guggenheim.jpg';
  img.addEventListener('load', function() {
    context6.drawImage(img, 0, 0, referenceWidth, referenceHeight);
    var imageData = context6.getImageData(0, 0, canvas6.width, canvas6.height);
    var data = imageData.data;
    context6.putImageData(imageData, 0, 0);
  });
}
window.addEventListener('load', setup6);
