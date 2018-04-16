const canvas8 = document.getElementById('c8');
const context8 = canvas8.getContext('2d');

var referenceWidth = 400;
var referenceHeight = 200;

function setup8() {
  canvas8.style.width = referenceWidth + 'px';
  canvas8.style.height = referenceHeight + 'px';

  var scale = window.devicePixelRatio;
  canvas8.width = referenceWidth * scale;
  canvas8.height = referenceHeight * scale;

  context8.scale(scale, scale);

  draw8();
}

function draw8() {
  var img = new Image();
  img.src = 'part1media/timesquare.jpg';
  img.addEventListener('load', function() {
    context8.drawImage(img, 0, 0, referenceWidth, referenceHeight);
    var imageData = context8.getImageData(0, 0, canvas8.width, canvas8.height);
    var data = imageData.data;
    context8.putImageData(imageData, 0, 0);
  });
}
window.addEventListener('load', setup8);
