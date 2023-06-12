let img;
let myFont;

function preload() {
  img = loadImage('assets/Trabajo.png');
  myFont = loadFont('assets/JMH Typewriter-Bold.otf');
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  textFont(myFont);
}

function draw() {
  background(220);
  image(img, 0, 0, windowWidth, windowHeight);
  
  let x1 = random(20, width - 200);
  let y1 = random(40, height - 20);
  
  let x2 = random(20, width - 200);
  let y2 = random(40, height - 20);
  
  let x3 = random(20, width - 200);
  let y3 = random(40, height - 20);
  
  textSize(22);
  fill(202, 0, 104);
  text('¿Por qué no has encontrado trabajo?', x1, y1);
  
  textSize(25);
  fill(0, 202, 101);
  text('¿Por qué no has encontrado trabajo?', x2, y2);
  
  textSize(32);
  fill(17, 147, 255);
  text('¿Por qué no has encontrado trabajo?', x3, y3);
}