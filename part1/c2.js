const canvas2 = document.getElementById('c2');
const context2 = canvas2.getContext('2d');

var referenceWidth = 400;
var referenceHeight = 200;

function setup2() {
  canvas2.style.width = referenceWidth + 'px';
  canvas2.style.height = referenceHeight + 'px';

  var scale = window.devicePixelRatio;
  canvas2.width = referenceWidth * scale;
  canvas2.height = referenceHeight * scale;

  context2.scale(scale, scale);

  draw2();
}

function draw2() {
  var img = new Image();
  img.src = 'part1media/statueofliberty.jpg';
  img.addEventListener('load', function() {
    context2.drawImage(img, 0, 0, referenceWidth, referenceHeight);
    var imageData = context2.getImageData(0, 0, canvas2.width, canvas2.height);
    var data = imageData.data;
    context2.putImageData(imageData, 0, 0);
  });
}
window.addEventListener('load', setup2);
