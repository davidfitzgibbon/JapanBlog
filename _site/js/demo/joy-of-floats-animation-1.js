const animationFrameCount = 300;
let slider;
function setup() {
  const canvas = createCanvas(600, 300);
  canvas.parent("#joy-of-floats-animation-1");
  slider = createSlider(1, 300, 1);
  slider.parent("#joy-of-floats-animation-1");
  slider.style("width", "80%");
  slider.style("margin", "0 auto");
  slider.style("display", "block");

  ellipseMode(CENTER);
}

function draw() {
  background(255);
  translate(width * 0.5, height * 0.5);
  const t = slider.value() / animationFrameCount;
  const radius = min(width, height) * 0.4;

  const x = cos(t * TAU) * radius;
  const y = sin(t * TAU) * radius;

  noFill();
  stroke(200);
  strokeWeight(2);
  ellipse(0, 0, radius * 2, radius * 2);

  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(16);
  text(`t = ${t.toFixed(2)}`, 0, 0);

  fill("#f8be0a");
  stroke("#8337ec");
  strokeWeight(4);
  ellipse(x, y, 30, 30);
}
