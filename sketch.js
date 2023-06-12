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
  
  let x = random(width); // Genera coordenadas x aleatorias dentro del ancho del lienzo
  let y = random(height); // Genera coordenadas y aleatorias dentro del alto del lienzo
  let Pez = random(123,900);
  let Gato = random(10,780);
  
  textSize(68);
  fill(202, 0, 104);
  text('¿Por qué no has encontrado trabajo?', x, y);
  frameRate(15);
  textSize(45);
  fill(0, 202, 101);
  text('¿Por qué no has encontrado trabajo?', x, Pez);
  frameRate(12);
  textSize(58);
  fill(17, 147, 255);
  text('¿Por qué no has encontrado trabajo?', Gato, y);
  frameRate(9);
}