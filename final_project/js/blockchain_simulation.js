var canvas = document.querySelector('#blockchain-canvas');
canvas.width = window.innerWidth;
canvas.height = 600;

var c = canvas.getContext('2d');

const backgroundImage = new Image();
backgroundImage.src = '../../images/blockspace.jpg';

let txCount = 0;
let blockCount = 0;
let spacing = 0;

function drawSquare(color, x, y, size, hasBorder) {
    c.fillStyle = color;
    c.fillRect(x, y, size, size);

    if (hasBorder) {
        c.strokeStyle = 'black';
        c.lineWidth = 2;
        c.strokeRect(x, y, size, size);
    }
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

    for (let i = 0; i < txCount; i++) {
        drawSquare('white', 100, (150 + (50 * i)), 40, false);
    }

    drawSquare('lightblue', (100 + spacing), 500, 100, false);

    let i = 0;
    while (i < blockCount) {
        i++;
        spacing = 100 * i;
        drawSquare('lightgreen', (100 + spacing), 500, 100, true);
    }
    txCount = 0;
}

function drawCurrentState() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    drawButtons();
    for (let i = 0; i < txCount; i++) {
        drawSquare('lightblue', 100, (150 + (50 * i)), 40, false);
    }
    for (let i = 0; i < blockCount; i++) {
        spacing = 100 * (i + 1);
        drawSquare('lightgreen', (100 + spacing), 500, 100, true);
    }
}

var intervalID;

function startDrawingInterval() {
    intervalID = setInterval(function () {
        addBlock();
        drawCurrentState();
    }, 5000);
}

function tx() {
    if (txCount < 10) {
		drawSquare('lightblue', 110, (150 + (50 * txCount)), 40);
		txCount++;
    } else {
        addBlock();
        drawCurrentState();
    }
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
        tx();
    }
});
