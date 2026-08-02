const sketch = (p5) => {
  let slider;
  p5.setup = () => {
    const canvas = p5.createCanvas(600, 300);
    canvas.parent("#fna-amp");

    slider = p5.createSlider(0, 1, 0.1, 0.1);
    slider.parent("#fna-amp");
    slider.style("width", "80%");
    slider.style("margin", "0 auto");
    slider.style("display", "block");
  };

  p5.draw = () => {
    p5.angleMode(DEGREES);

    p5.background(255);

    var val = slider.value();
    const radius = p5.min(width, height) * 0.7;

    const points = [];

    p5.noFill();
    p5.stroke("#8337ec");
    p5.strokeWeight(3);
    p5.beginShape();

    for (let x = 0; x <= width; x++) {
      let y = height / 2 + p5.cos(x * 1) * height * val;
      points.push(createVector(x, y));
      p5.vertex(x, y);
    }
    p5.endShape();

    p5.fill(0);
    p5.noStroke();
    p5.textSize(16);
    p5.text(`Amplitude: ${val}`, 0, 50);
  };
};
let fnaAmp = new p5(sketch, "fna-amp");
