const canvas7 = document.getElementById('c7');
const context7 = canvas7.getContext('2d');

var referenceWidth = 400;
var referenceHeight = 200;

function setup7() {
  canvas7.style.width = referenceWidth + 'px';
  canvas7.style.height = referenceHeight + 'px';

  var scale = window.devicePixelRatio;
  canvas7.width = referenceWidth * scale;
  canvas7.height = referenceHeight * scale;

  context7.scale(scale, scale);

  draw7();
}

function draw7() {
  var img = new Image();
  img.src = 'part1media/taxi.jpg';
  img.addEventListener('load', function() {
    context7.drawImage(img, 0, 0, referenceWidth, referenceHeight);
    var imageData = context7.getImageData(0, 0, canvas7.width, canvas7.height);
    var data = imageData.data;
    context7.putImageData(imageData, 0, 0);
  });
}
window.addEventListener('load', setup7);
