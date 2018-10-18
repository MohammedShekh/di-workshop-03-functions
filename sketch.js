function setup() {
    createCanvas(400, 400)
  }
  
  function draw() {
    
    background(255)
    fill(255, 130, 0)
    stroke(0)
    
    roof(mouseX, mouseY+30, mouseX+40, mouseY, mouseX+80, mouseY+30)
    house(mouseX+5, mouseY+30, 70)

    roof(mouseX+80, mouseY+30, mouseX+120, mouseY, mouseX+160, mouseY+30)
    house(mouseX+85, mouseY+30, 70)

    roof(mouseX+160, mouseY+30, mouseX+200, mouseY, mouseX+240, mouseY+30)
    house(mouseX+165, mouseY+30, 70)
  }

  function roof(x1, y1, x2, y2, x3, y3) {
    triangle(x1, y1, x2, y2, x3, y3)
  }

  function house(x, y, size) {
    rect(x, y, size, size)
  }