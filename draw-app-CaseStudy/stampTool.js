function StampTool() {
	this.name = "stamp";
	this.icon = "assets/stamp.jpg";
	
	this.fillMode = "fill";
	var self = this;

	this.draw = function() {
		if(mouseIsPressed) {
			//to prevent out of canvas click
			if(mouseX > 30 && mouseY < 700) {
				updatePixels();
				if(self.fillMode == "fill") {
					drawStampFill(mouseX, mouseY);
				}
				else {
					drawStampNoFill(mouseX, mouseY);
				}
			}
		}
		else {
			loadPixels();
		}
	}

	var drawStampNoFill = function(mx, my) {
		push();
		translate(mx, my);
		beginShape();
		fill(255);
		var xOffSet = 80;
		var yOffSet = 80;
		vertex(0 - xOffSet, 120 - yOffSet);
		vertex(50 - xOffSet, 90 - yOffSet);
		vertex(60 - xOffSet, 60 - yOffSet);
		vertex(40 - xOffSet, 20 - yOffSet);
		vertex(160 - xOffSet, 60 - yOffSet);
		vertex(110 - xOffSet, 80 - yOffSet);
		vertex(150 - xOffSet, 80 - yOffSet);
		vertex(90 - xOffSet, 100 - yOffSet);
		vertex(80 - xOffSet, 120 - yOffSet);
		endShape();
		ellipse(105 - xOffSet, 60 - yOffSet, 8, 8);
		pop();
	};
	
	var drawStampFill = function(mx, my) {
		push();
		translate(mx, my);
		beginShape();
		//fill(255, 0, 0);
		var xOffSet = 80;
		var yOffSet = 80;
		vertex(0 - xOffSet, 120 - yOffSet);
		vertex(50 - xOffSet, 90 - yOffSet);
		vertex(60 - xOffSet, 60 - yOffSet);
		vertex(40 - xOffSet, 20 - yOffSet);
		vertex(160 - xOffSet, 60 - yOffSet);
		vertex(110 - xOffSet, 80 - yOffSet);
		vertex(150 - xOffSet, 80 - yOffSet);
		vertex(90 - xOffSet, 100 - yOffSet);
		vertex(80 - xOffSet, 120 - yOffSet);
		endShape(CLOSE);
		fill(255);
		ellipse(105 - xOffSet, 60 - yOffSet, 8, 8);
		pop();
	}
	
	//when the tool is deselected update the pixels to just show the drawing and hide the line of symmetry
	//also clear options
	this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");
	};
	
	//adds a button and click handler to the options area
	//when clicked toggle the line of symmetry between horizontal and verticle
	this.populateOptions = function() {
		select(".options").html (
			"<button id='fillButton'>Fill</button>");
		//click handler
		select("#fillButton").mouseClicked(function() {
			var button = select("#" + this.elt.id);
			if(self.fillMode == "fill") {
				self.fillMode = "nofill";
				button.html('No Fill');
			}
			else {
				self.fillMode = "fill";
				button.html('Fill');
			}
		});
	};
}