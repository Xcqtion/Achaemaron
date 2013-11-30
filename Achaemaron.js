//Directional Clarifiers.
var NW = 0;
var N  = 1;
var NE = 2;
var W  = 3;
var E  = 4;
var SW = 5;
var S  = 6;
var SE = 7;

var test = Cell(0, 0, "Hello!");
var mm = MapManager(test);
mm.pointerCell.setAdjunct(NE, Cell(1, 1, "It's Me!"));
mm.shiftPointerAdjacent(test.getAdjunct(NE));
mm.pointerCell.setAdjunct(W, Cell(0, 2, "3rd Cell!"));
console.log(mm.pointerCell.getAdjunct(W).cmt);
console.log(mm.getCellMap());