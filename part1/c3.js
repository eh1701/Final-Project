var canvas3 = document.getElementById('c3');
var context3 = canvas3.getContext('2d');

var referenceWidth = 400;
var referenceHeight = 200;

canvas3.style.width = referenceWidth + 'px';
canvas3.style.height = referenceHeight + 'px';

var scale = window.devicePixelRatio;
canvas3.width = referenceWidth * scale;
canvas3.height = referenceHeight * scale;

context3.scale(scale, scale);

var x = 0;
var y = 0;

function bridge() {
  context3.beginPath();
  context3.lineWidth="15";
  context3.strokeStyle="black";
  context3.rect(20,100,360, 20);
  context3.fillstyle = '#black';
  context3.fill();
  context3.stroke();

  context3.beginPath();
  context3.lineWidth="15";
  context3.strokeStyle="black";
  context3.rect(100, 110, 40, 40);
  context3.fillstyle = '#black';
  context3.fill();
  context3.stroke();

  context3.beginPath();
  context3.lineWidth="15";
  context3.strokeStyle="black";
  context3.rect(250, 110, 40, 40);
  context3.fillstyle = '#black';
  context3.fill();
  context3.stroke();

  context3.beginPath();
  context3.lineWidth="10";
  context3.strokeStyle="black";
  context3.rect(115, 40, 10, 50);
  context3.fillstyle = '#black';
  context3.fill();
  context3.stroke();

  context3.beginPath();
  context3.lineWidth="10";
  context3.strokeStyle="black";
  context3.rect(265, 40, 10, 50);
  context3.fillstyle = '#black';
  context3.fill();
  context3.stroke();

  context3.beginPath();
  context3.moveTo(125, 40);
  context3.bezierCurveTo(125, 70, 265, 70, 265, 40);
  context3.lineWidth=5;
  context3.strokeStyle = "black";
  context3.stroke();

  context3.beginPath();
  context3.moveTo(10, 170);
  context3.bezierCurveTo(10, 190, 50, 190, 50, 170);
  context3.bezierCurveTo(50, 150, 90, 150, 90, 170);
  context3.bezierCurveTo(90, 190, 130, 190, 130, 170);
  context3.bezierCurveTo(130, 150, 170, 150, 170, 170);
  context3.bezierCurveTo(170, 190, 210, 190, 210, 170);
  context3.bezierCurveTo(210, 150, 250, 150, 250, 170);
  context3.bezierCurveTo(250, 190, 290, 190, 290, 170);
  context3.bezierCurveTo(290, 150, 330, 150, 330, 170);
  context3.bezierCurveTo(330, 190, 370, 190, 370, 170);
  context3.lineWidth=3;
  context3.strokeStyle = "black";
  context3.stroke();

  context3.beginPath();
  context3.moveTo(10, 185);
  context3.bezierCurveTo(10, 205, 50, 205, 50, 185);
  context3.bezierCurveTo(50, 165, 90, 165, 90, 185);
  context3.bezierCurveTo(90, 205, 130, 205, 130, 185);
  context3.bezierCurveTo(130, 165, 170, 165, 170, 185);
  context3.bezierCurveTo(170, 205, 210, 205, 210, 185);
  context3.bezierCurveTo(210, 165, 250, 165, 250, 185);
  context3.bezierCurveTo(250, 205, 290, 205, 290, 185);
  context3.bezierCurveTo(290, 165, 330, 165, 330, 185);
  context3.bezierCurveTo(330, 205, 370, 205, 370, 185);
  context3.lineWidth=3;
  context3.strokeStyle = "black";
  context3.stroke();

}

function draw3() {
  context3.clearRect(0,0,referenceWidth,referenceHeight);
  context3.save();
  context3.translate(x,y);
  bridge();
  context3.restore();
  var bridgePicture = requestAnimationFrame(draw3);

  if (x >= 100) {
    cancelAnimationFrame(bridgePicture);
  }
}

draw3();
