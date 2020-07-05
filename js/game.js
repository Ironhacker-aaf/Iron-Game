// canvas definition
const canvasGame = document.querySelector("#game-canvas");

// context definition
let ctx = canvasGame.getContext("2d");

//adding my road
let road = new Image();
road.src = "./images/roadAndTrees.png"; // navigate to this file as you were in html file

//adding the car

let car = new Image();
car.src = "./images/carThreeOkk.png";

road.onload = () => {
  requestAnimationFrame(gameLoop);
};

let roadX = 1066;
let roadY = 70;
let acceleration = 5;
let carPosition = 155;

document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    acceleration = 5;
  }
};

document.body.onkeydown = function (e) {
  switch (e.keyCode) {
    case 40:
      carPosition = 250;
      break;
    case 38:
      carPosition = 155;
      break;
    case 32:
        acceleration = 20;
        break;
    default:
      break;
  }
};

function gameLoop() {
  if (roadX <= 0) roadX = 1066;

  ctx.drawImage(road, roadX, roadY);
  ctx.drawImage(road, roadX - 1066, roadY);

  roadX -= acceleration;

  ctx.drawImage(car, 0, carPosition);

  requestAnimationFrame(gameLoop);
}
