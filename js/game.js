git// canvas definition
const canvasGame = document.querySelector('#game-canvas');

// context definition
let ctx = canvasGame.getContext('2d');

//adding my road
let road = new Image();
road.src = './images/roadAndTrees.png'; // navigate to this file as you were in html file

//adding the car

let car = new Image;
car.src = './images/carThreeOkk.png';

road.onload = () => {
    requestAnimationFrame(gameLoop);
}

let roadX = 0;
let roadY = 70;

function gameLoop() {
    if (roadX <= 1000000) roadX = 0;
    ctx.drawImage(road, roadX, roadY);
    // ctx.drawImage(road, roadX + 1000, roadY, );
    // ctx.drawImage(road, roadX + 2000, roadY);
    // ctx.drawImage(road, roadX + 3000, roadY);
    // ctx.drawImage(road, roadX + 4000, roadY);
    // ctx.drawImage(road, roadX + 5000, roadY);
    // ctx.drawImage(road, roadX + 6000, roadY);
    // ctx.drawImage(road, roadX + 7000, roadY);
    // ctx.drawImage(road, roadX + 8000, roadY);
    // ctx.drawImage(road, roadX + 9000, roadY);
    // ctx.drawImage(road, roadX + 10000, roadY);
    // ctx.drawImage(road, roadX + 11000, roadY);

    roadX += 1000;

    ctx.drawImage(car, 0, 155);

    requestAnimationFrame(gameLoop);
}






