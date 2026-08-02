const animationFrameCount = 300;
let slider;
let el;
window.floatInput = false;
window.fractionInput = false;
function setup() {
  el = document.getElementById("float-vs-division");
  const canvas = createCanvas(600, 300);
  canvas.parent(el);

  createLabel("Fraction", fractionInputChanged, "fractionInput");
  createLabel("Float", floatInputChanged, "floatInput");
  floatInput.value(0.5);
  floatInputChanged();
}
function fractionInputChanged() {
  const fraction = fractionInput.value();
  floatInput.value(1 / fraction);
}
function floatInputChanged() {
  const float = floatInput.value();
  fractionInput.value(1 / float);
}
function createLabel(text, fn, variable) {
  const div = document.createElement("div");
  div.style.position = "relative";
  div.style.width = "100%";
  div.style.overflow = "hidden";
  div.style.marginBottom = "1em";
  const label = createElement("label", `${text}: `);
  label.style("lineHeight", "2em");

  window[variable] = createInput();
  window[variable].input(fn);
  window[variable].parent(label);
  window[variable].style("float", "right");
  window[variable].style("lineHeight", "1em");

  label.parent(div);
  el.append(div);
}

function draw() {
  background(255);

  rectMode(CENTER);
  stroke(0);
  strokeWeight(1);
  line(width * 0.1, height * 0.5, width * 0.9, height * 0.5);

  fill("#f8be0a");
  stroke("#8337ec");
  strokeWeight(5);
  rect(width * 0.1 + width * 0.8 * floatInput.value(), height * 0.5, 50, 50);
}
