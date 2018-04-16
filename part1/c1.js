const canvas1 = document.getElementById('c1');
const context1 = canvas1.getContext('2d');

var referenceWidth = 400;
var referenceHeight = 200;

function setup1() {
  canvas1.style.width = referenceWidth + 'px';
  canvas1.style.height = referenceHeight + 'px';

  var scale = window.devicePixelRatio;
  canvas1.width = referenceWidth * scale;
  canvas1.height = referenceHeight * scale;

  context1.scale(scale, scale);

  draw1();
}

function draw1() {
  var img = new Image();
  img.src = 'part1media/subway.jpg';
  img.addEventListener('load', function() {
    context1.drawImage(img, 0, 0, referenceWidth, referenceHeight);
    var imageData = context1.getImageData(0, 0, canvas1.width, canvas1.height);
    var data = imageData.data;
    context1.putImageData(imageData, 0, 0);
  });
}
window.addEventListener('load', setup1);
