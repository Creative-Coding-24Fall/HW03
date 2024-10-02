function setup() {
  createCanvas(windowWidth, windowHeight);
  background(233,214,0);

  for(var x = 5; x <= width; x +=50) {
    for(var y =0; y <= height; y +=50) {

       fill(28,28,28);
       ellipse(x, y, 10);
       ellipse(x+25, y, 5);
       ellipse(x, y+25, 5);
       ellipse(x+25, y+25, 10);

    }
  }

}
 
function draw() {
}
