const canvas4 = document.getElementById('c4');
const context4 = canvas4.getContext('2d');

var referenceWidth = 400;
var referenceHeight = 200;

function setup4() {
  canvas4.style.width = referenceWidth + 'px';
  canvas4.style.height = referenceHeight + 'px';

  var scale = window.devicePixelRatio;
  canvas4.width = referenceWidth * scale;
  canvas4.height = referenceHeight * scale;

  context4.scale(scale, scale);

  draw4();
}

function draw4() {
  var img = new Image();
  img.src = 'part1media/centralpark.jpg';
  img.addEventListener('load', function() {
    context4.drawImage(img, 0, 0, referenceWidth, referenceHeight);
    var imageData = context4.getImageData(0, 0, canvas4.width, canvas4.height);
    var data = imageData.data;
    context4.putImageData(imageData, 0, 0);
  });
}
window.addEventListener('load', setup4);
