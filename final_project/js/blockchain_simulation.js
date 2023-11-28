var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

const backgroundImage = new Image();
backgroundImage.src = '/Users/campage/Desktop/blockspace.jpg';

let txCount = 0;
let blockCount = 0;
let resetCount = 0;
let spacing = 0;

backgroundImage.onload = function() {
    draw();
};

function tx() {
	if (txCount < 4) {
		c.fillRect(100, 150 + (50 * txCount), 40);
		txCount++;
	}
	else {
		blockCount++;
		spacing = 100 * blockCount;
		c.fillRect(100 + spacing, 500, 90);
		
		while (resetCount < blockCount) {
			resetCount++;
			spacing = 100 * resetCount;
			c.fillRect(100 + spacing, 500, 90);
		}
		resetCount = 0;
		txCount = 0;
	}
}

function draw() {
    c.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    c.fillRect(225, 100, 300, 300);
    c.fillRect(575, 100, 300, 300);
    c.fillRect(925, 100, 300, 300);

    c.font = '50px Arial';
    c.fillStyle = 'white';
    c.fillText('SEND', 325, 260);
    c.fillText('BUY', 665, 260);
    c.fillText('SELL', 1005, 260);
}

function mouseClicked() {
	if (225 <= mouseX && mouseX <= 525 && 
		100 <= mouseY && mouseY <= 400) tx();
  
	if (575 <= mouseX && mouseX <= 875 &&
		100 <= mouseY && mouseY <= 400) tx();
  
	if (925 <= mouseX && mouseX <= 1225 &&
        100 <= mouseY && mouseY <= 400) tx();
}

console.log(canvas);
