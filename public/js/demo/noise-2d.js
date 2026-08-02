function setup() {
  const canvas = createCanvas(600, 300);
  canvas.parent("#noise-2d");

  const from = color("#8337ec");
  const to = color("#f8be0a");

  // NOISE
  noStroke();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let n = noise(x * 0.005, y * 0.005);

      // n = 0.1 / n;
      // n = pow(n, 2);
      fill(n * 255);
      rect(x, y, 1, 1);
    }
  }
}

function draw() {
  noLoop();
}
