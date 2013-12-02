//Yay, map managers!
function MapManager(cell) {
	var pointerCell = cell;

	return {
		pointerCell: pointerCell,

		//Simple enough; shifts the pointer cell to a cell
		//adjacent to the previous cell. Should work as intended.
		shiftPointerAdjacent: function(cell) {
			if(cell != undefined) {	
				this.pointerCell = cell;
			} else {
				console.log("Cell does not exist.");
			}
		},

		//Helper method; returns an array of all the cells in the
		//map of cells, if that makes even the slightest bit of
		//sense. Should be functional for the most part, but 
		//more varied testing is required to ensure its utility.
		getCellMap: function() {
			var tempCells = [pointerCell];
			var checkedCells = [pointerCell];

			while(tempCells.length != 0) {
				for(var x = 0; x < 8; x++) {
					var focus = tempCells[tempCells.length - 1].getAdjunct(x);
					if(focus != undefined) {
						if(checkedCells.indexOf(focus) == -1) {
							checkedCells.push(focus);
							tempCells.push(focus);
							x = 0;
						} 
						console.log(tempCells.length);
					}
				}
				tempCells.pop();
			}
			return checkedCells;
		},

		//Finds all the adjacent cells to a cell and sets those cells
		//adjunct to the cell that calls this function. Works in theory.
		findAdjuncts: function(cell) {
			var adjuncts = this.getCellMap();
			for(var a in adjuncts) {
				var dir = interpretDir((a.X - cell.X), (a.Y - cell.Y));
				if(dir != -1) {
					cell.setAdjunct(dir, a);
				}
			}
		}
	};
}