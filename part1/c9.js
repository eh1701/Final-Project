var canvas9 = document.getElementById('c9');
var context9 = canvas9.getContext('2d');

var referenceWidth = 400;
var referenceHeight = 200;

canvas9.style.width = referenceWidth + 'px';
canvas9.style.height = referenceHeight + 'px';

var scale = window.devicePixelRatio;
canvas9.width = referenceWidth * scale;
canvas9.height = referenceHeight * scale;

context9.scale(scale, scale);

var x = 0;
var y = 0;

function foodcart() {
  context9.beginPath();
  context9.lineWidth = "10";
  context9.strokeStyle = "black";
  context9.rect(70, 100, 260, 50);
  context9.stroke();
  context9.fillstyle = "black";
  context9.fill();
  context9.stroke();

  context9.beginPath();
  context9.lineWidth="10";
  context9.strokeStyle="black";
  context9.rect(115, 20, 20, 30);
  context9.fillstyle = '#black';
  context9.fill();
  context9.stroke();

  context9.beginPath();
  context9.lineWidth="10";
  context9.strokeStyle="black";
  context9.rect(150, 20, 20, 30);
  context9.fillstyle = '#black';
  context9.fill();
  context9.stroke();

  context9.beginPath();
  context9.lineWidth="10";
  context9.strokeStyle="black";
  context9.rect(185, 20, 20, 30);
  context9.fillstyle = '#black';
  context9.fill();
  context9.stroke();

  context9.beginPath();
  context9.lineWidth="10";
  context9.strokeStyle="black";
  context9.rect(220, 20, 20, 30);
  context9.fillstyle = '#black';
  context9.fill();
  context9.stroke();

  context9.beginPath();
  context9.lineWidth="10";
  context9.strokeStyle="black";
  context9.rect(255, 20, 20, 30);
  context9.fillstyle = '#black';
  context9.fill();
  context9.stroke();

  context9.beginPath();
  context9.moveTo(115, 60);
  context9.bezierCurveTo(115, 70, 135, 70, 135, 60);
  context9.closePath();
  context9.lineWidth=8;
  context9.strokeStyle = "black";
  context9.fillstyle = "black";
  context9.fill();
  context9.stroke();
  context9.closePath();

  context9.beginPath();
  context9.moveTo(150, 60);
  context9.bezierCurveTo(150, 70, 170, 70, 170, 60);
  context9.closePath();
  context9.lineWidth=8;
  context9.strokeStyle = "black";
  context9.fillstyle = "black";
  context9.fill();
  context9.stroke();
  context9.closePath();

  context9.beginPath();
  context9.moveTo(185, 60);
  context9.bezierCurveTo(185, 70, 205, 70, 205, 60);
  context9.closePath();
  context9.lineWidth=8;
  context9.strokeStyle = "black";
  context9.fillstyle = "black";
  context9.fill();
  context9.stroke();
  context9.closePath();

  context9.beginPath();
  context9.moveTo(220, 60);
  context9.bezierCurveTo(220, 70, 240, 70, 240, 60);
  context9.closePath();
  context9.lineWidth=8;
  context9.strokeStyle = "black";
  context9.fillstyle = "black";
  context9.fill();
  context9.stroke();
  context9.closePath();

  context9.beginPath();
  context9.moveTo(255, 60);
  context9.bezierCurveTo(255, 70, 275, 70, 275, 60);
  context9.closePath();
  context9.lineWidth=8;
  context9.strokeStyle = "black";
  context9.fillstyle = "black";
  context9.fill();
  context9.stroke();
  context9.closePath();

  context9.beginPath();
  context9.lineWidth = "5";
  context9.strokeStyle = "black";
  context9.rect(155, 60, 5, 50);
  context9.stroke();
  context9.fillstyle = "black";
  context9.fill();
  context9.stroke();

  context9.beginPath();
  context9.lineWidth = "5";
  context9.strokeStyle = "black";
  context9.rect(225, 60, 5, 50);
  context9.stroke();
  context9.fillstyle = "black";
  context9.fill();
  context9.stroke();

  context9.beginPath();
  context9.arc(130, 165, 30, 0, 2*Math.PI);
  context9.fillstyle="black";
  context9.strokestyle = "black";
  context9.stroke();
  context9.fill();

  context9.beginPath();
  context9.arc(270, 165, 30, 0, 2*Math.PI);
  context9.fillstyle="black";
  context9.strokestyle = "black";
  context9.stroke();
  context9.fill();
}

function draw9() {
  context9.clearRect(0,0,referenceWidth,referenceHeight);
  context9.save();
  foodcart();
  requestAnimationFrame(draw9);
}
draw9();
