function setup() {
  const canvas = createCanvas(600, 300, WEBGL);
  canvas.parent("#blend-modes");

  colorMode(RGB, 1);

  background(1);

  noStroke();

  // Set the blend mode
  blendMode(SUBTRACT);

  // Draw a rectangle with the blend mode
  fill(0.97254902, 0.74509804, 0.03921569);
  rect(50, 50, 300, 150);

  // Draw a rectangle with the blend mode
  fill(0.51372549, 0.21568627, 0.9254902);
  rect(250, 100, 300, 150);
}
