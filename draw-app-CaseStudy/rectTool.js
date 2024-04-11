function RectTool() {
	this.name = "rect";
	this.icon = "assets/rect.jpg";

	var previousMouseX = -1;
	var previousMouseY = -1;
	var firstMouseX = -1;
	var firstMouseY = -1;

	this.draw = function() {
		//if the mouse is pressed
		if(mouseIsPressed) {
			//check if the previousX and Y are -1. Set them to the current mouseX and mouseY if they are
			if(previousMouseX == -1) {
				previousMouseX = mouseX;
				previousMouseX = mouseY;
				firstMouseX = mouseX;
				firstMouseY = mouseY;
			}
			else {
				//erase the old rect and redraw
				updatePixels();
				var rLength = (mouseX - firstMouseX);
				var rWidth = (mouseY - firstMouseY);
				rect(firstMouseX, firstMouseY, rLength, rWidth);
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