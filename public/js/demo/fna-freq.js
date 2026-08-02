function setup() {
  const canvas = createCanvas(600, 300);
  canvas.parent("#fna-freq");

  slider = createSlider(1, Math.PI * 5, 0.1, 0.1);
  slider.parent("#fna-freq");
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

  noFill();
  stroke("#8337ec");
  strokeWeight(3);
  beginShape();

  for (let x = 0; x <= width; x++) {
    let y = height / 2 + cos(x * val) * height * 0.1;
    points.push(createVector(x, y));
    vertex(x, y);
  }
  endShape();

  fill(0);
  noStroke();
  textSize(16);
  text(`Frequency: ${val}`, 0, 50);
}
