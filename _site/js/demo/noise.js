function setup() {
  const canvas = createCanvas(600, 300);
  canvas.parent("#noise");

  ellipseMode(CENTER);
  background(255);
  textSize(20);

  const count = 100;

  const itemWidth = width / count;
  const rowHeight = height * 0.2;

  // RANDOM
  text("Random", 10, rowHeight * 1 - 10);

  stroke("#f8be0a");
  line(0, rowHeight * 1, width, rowHeight * 1);
  line(0, rowHeight * 2, width, rowHeight * 2);

  for (let i = 0; i < count; i++) {
    const x = i * itemWidth + itemWidth * 0.5;
    const y = height * 0.2 + random() * rowHeight;
    const radius = itemWidth * 0.5;
    const color = "#8337ec";

    fill(color);
    noStroke();
    ellipse(x, y, radius, radius);
  }

  // NOISE
  noStroke();
  fill(0);
  text("Noise", 10, rowHeight * 3 - 10);

  stroke("#f8be0a");
  line(0, rowHeight * 3, width, rowHeight * 3);
  line(0, rowHeight * 4, width, rowHeight * 4);

  for (let i = 0; i < count; i++) {
    const x = i * itemWidth + itemWidth * 0.5;
    const y = height * 0.6 + noise(x * 0.05) * rowHeight;
    const radius = itemWidth * 0.5;
    const color = "#8337ec";

    fill(color);
    noStroke();
    ellipse(x, y, radius, radius);
  }
}

function draw() {
  noLoop();
}
