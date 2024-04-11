function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	//draw line to screen
	this.draw = function() {
		//if mouse is pressed
		//starting position of mouse
		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}
			//end position of mouse
			else{
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}
		//when mouse is not pressed
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
}
