window.onload = function () {

  // get the canvas and context and store in let-s
  let canvas = document.getElementById("sky");
  let ctx = canvas.getContext("2d");

  // set canvas dims to window height and width
  let widthW = window.innerWidth;
  let heightH = window.innerWidth;
  canvas.width = widthW;
  canvas.height = heightH;

  // generate the flakes and apply attributes
  let maxFlakes = 100;
  let flakes = [];

  // loop through the empty flakes and apply attributes
  for (let i = 0; i < maxFlakes; i++) {
    flakes.push({
      // Math.random() generate a num between 0 and 1
      x: Math.random() * widthW,
      y: Math.random() * heightH,
      radius: Math.random() * 5 + 2, // min of 2px and max of 7px
      density: Math.random() + 1
    })
  }

  // draw flakes onto canvas
  function drawFlakes() {
    ctx.clearRect(0, 0, widthW, heightH);
    ctx.fillStyle = "white";
    ctx.beginPath();
    for (let i = 0; i < maxFlakes; i++) {
      let flakesF = flakes[i];
      ctx.moveTo(flakesF.x, flakesF.y);
      // curcle shape:
      ctx.arc(flakesF.x, flakesF.y, flakesF.radius, 0, Math.PI * 2, true);
    }
    ctx.fill();
    moveFlakes();
  }

  // animate the flakes 
  let angle = 0;

  function moveFlakes() {
    angle += 0.01;
    for (let i = 0; i < maxFlakes; i++) {
      // store current flake
      let currF = flakes[i];

      // update X and Y coordinates of each snowflake
      currF.y += Math.pow(currF.density, 2) + 1;
      currF.x += Math.sin(angle) * 2;

      // if the snowflake reaches the bottom, send a new one to the top
      if (currF.y > heightH) {
        flakes[i] = {
          x: Math.random() * widthW,
          y: 0,
          radius: currF.radius,
          density: currF.density
        }
      }
    }
  }

  setInterval(drawFlakes, 25);
}