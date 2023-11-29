var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

const backgroundImage = new Image();
backgroundImage.src = '../../images/blockspace.jpg';

let blockCount = 0;
let spacing = 0;

function drawSquare(color, x, y, size) {
    c.fillStyle = color;
    c.fillRect(x, y, size, size);
}

function drawText(text, x, y, size, color) {
    c.fillStyle = color;
    c.font = size + 'px Arial';
    c.fillText(text, x, y + size);
}

function drawButtons() {
    drawSquare('black', 225, 100, 300);
    drawText('SEND', 325, 260, 20, 'white');

	drawSquare('black', 575, 100, 300);
	drawText('BUY', 665, 260, 20, 'white');

	drawSquare('black', 925, 100, 300);
	drawText('SELL', 1005, 260, 20, 'white');
}

function addBlock() {
	blockCount++;
	spacing = 100 * blockCount;
    drawSquare('lightblue', (100 + spacing), 500, 100);
    let i = 0;
	while(i < blockCount) {
	  i++;
	  spacing = 100 * i;
	  drawSquare('lightblue', (100 + spacing), 500, 100);
	}
}

var intervalID;

function startDrawingInterval() {
    intervalID = setInterval(function () {
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        drawButtons();
        addBlock();
    }, 5000);
}

backgroundImage.onload = function () {
    c.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    drawButtons();
    startDrawingInterval();
};

canvas.addEventListener('click', function (event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    if (
        (225 <= mouseX && mouseX <= 525 && 100 <= mouseY && mouseY <= 400) ||
        (575 <= mouseX && mouseX <= 875 && 100 <= mouseY && mouseY <= 400) ||
        (925 <= mouseX && mouseX <= 1225 && 100 <= mouseY && mouseY <= 400)
    ) {
        clearInterval(intervalID);
        addBlock();
        startDrawingInterval();
    }
});
