function setup() {
  const canvas = createCanvas(600, 300);
  canvas.parent("#prove-pi");

  slider = createSlider(1, 100, 1);
  slider.parent("#prove-pi");
  slider.style("width", "80%");
  slider.style("margin", "0 auto");
  slider.style("display", "block");
}

function draw() {
  angleMode(DEGREES);

  background(255);

  var val = slider.value();
  const radius = min(width, height) * 0.7;

  const points = [];

  translate(width * 0.5, height * 0.8);

  stroke(200);
  noFill();
  arc(0, 0, radius * 2, radius * 2, 180, 360);

  stroke("#f8be0a");
  beginShape();
  const angle = 180 / val;
  for (let i = 0; i < 180; i += angle) {
    let x = cos(180 + i) * radius;
    let y = sin(180 + i) * radius;

    points.push(createVector(x, y));

    vertex(x, y);
  }
  let x = cos(180 * 2) * radius;
  let y = sin(180 * 2) * radius;

  points.push(createVector(x, y));

  vertex(x, y);

  endShape();

  if (points.length) {
    let length = 0;
    for (var i = 1; i < points.length; i++) {
      length += points[i - 1].dist(points[i]);
    }
    for (var i = 0; i < points.length; i++) {
      noStroke();
      fill("#8337ec");
      ellipse(points[i].x, points[i].y, 4, 4);
    }
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text(`Line Count x${val}. Ratio: ${(length / radius).toFixed(4)}`, 0, 50);
  }
}
