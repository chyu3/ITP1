function EllipseTool() {
	this.name = "ellipse";
	this.icon = "assets/ellipse.jpg";

	var previousMouseX = -1;
	var previousMouseY = -1;
	var firstMouseX = -1;
	var firstMouseY = -1;

	this.draw = function() {
		
		if(mouseIsPressed) {
			if(previousMouseX == -1) {
				previousMouseX = mouseX;
				previousMouseX = mouseY;
				firstMouseX = mouseX;
				firstMouseY = mouseY;
			}
			else {
				updatePixels();
				var rLength = (mouseX - firstMouseX) * 2;
				var rWidth = (mouseY - firstMouseY) * 2;
				ellipse(firstMouseX, firstMouseY, rLength, rWidth);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		else {
			previousMouseX = -1;
			previousMouseY = -1;
			loadPixels(); // save the pixel
		}
	}
}