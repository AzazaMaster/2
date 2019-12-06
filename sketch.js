function setup() {
    createCanvas(100vw, 100);
  }
  
  function draw() {
    background(220);
    
    for (i = 0; i <= 900; i++) {
      circle(400+sin(i+millis()/50000)*400,i,70);
    }
  }