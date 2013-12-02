//Directional Clarifiers.
var NW = 0;
var N  = 1;
var NE = 2;
var W  = 3;
var E  = 4;
var SW = 5;
var S  = 6;
var SE = 7;

//TODO: Something is terribly, terribly wrong.

function interpretDir(numX, numY) {
	if(Math.abs(numX) <= 1 && Math.abs(numY) <= 1) {
		if(numY == 1) {
			return (1 + numX);
		} else if(numY == -1) {
			return (6 + numX);
		} else if(numX == 1) {
			return 4;
		} else {
			return 3;
		}
	} else {
		return -1;
	}
}

var test = Cell(0, 0, "Hello!");
var mm = MapManager(test);
var pX = mm.pointerCell.X;
var pY = mm.pointerCell.Y;

function draw() {
	var cvs = document.getElementById("AchaemaronMain");
	if(cvs.getContext) {
		var ctxt = cvs.getContext("2d");
		var list = mm.getCellMap();
		console.log(list);
		for(var bell in list) {
			console.log(bell);
			ctxt.fillRect(350 + (list[bell].X * 20), 350 + (list[bell].Y * 20), 20, 20);
		}
	}
}

window.onkeydown = function(e) {
	switch(e.keyCode) {
		case 103:
			mm.pointerCell.setAdjunct(NW, Cell(pX - 1, pY + 1, "Went NW"));
			mm.shiftPointerAdjacent(test.getAdjunct(NW));
			mm.findAdjuncts(mm.pointerCell);
			break;
		case 104:
			mm.pointerCell.setAdjunct(N, Cell(pX, pY + 1, "Went N"));
			mm.shiftPointerAdjacent(test.getAdjunct(N));
			mm.findAdjuncts(mm.pointerCell);
			break;
		case 105:
			mm.pointerCell.setAdjunct(NE, Cell(pX + 1, pY + 1, "Went NE"));
			mm.shiftPointerAdjacent(test.getAdjunct(NE));
			mm.findAdjuncts(mm.pointerCell);
			break;
		case 100:
			mm.pointerCell.setAdjunct(W, Cell(pX - 1, pY, "Went W"));
			mm.shiftPointerAdjacent(test.getAdjunct(W));
			mm.findAdjuncts(mm.pointerCell);
			break;
		case 102:
			mm.pointerCell.setAdjunct(E, Cell(pX + 1, pY, "Went E"));
			mm.shiftPointerAdjacent(test.getAdjunct(E));
			mm.findAdjuncts(mm.pointerCell);
			break;
		case 97:
			mm.pointerCell.setAdjunct(SW, Cell(pX - 1, pY - 1, "Went SW"));
			mm.shiftPointerAdjacent(test.getAdjunct(SW));
			mm.findAdjuncts(mm.pointerCell);
			break;
		case 98:
			mm.pointerCell.setAdjunct(S, Cell(pX, pY - 1, "Went S"));
			mm.shiftPointerAdjacent(test.getAdjunct(S));
			mm.findAdjuncts(mm.pointerCell);
			break;
		case 99:
			mm.pointerCell.setAdjunct(SE, Cell(pX + 1, pY - 1, "Went SE"));
			mm.shiftPointerAdjacent(test.getAdjunct(SE));
			mm.findAdjuncts(mm.pointerCell);
			break;
	}
	draw();
};