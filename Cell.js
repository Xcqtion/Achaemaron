function Cell(x, y, cmt) {
	var X = x;
	var Y = y;
	var adjuncts = new Array(8);
	var comment = cmt;

	return {
		X: X,
		Y: Y,
		cmt: cmt,

		getAdjunct: function(num) {
			if(num != undefined) {
				return adjuncts[num];
			} else {
				return adjuncts;
			}
			
		},

		setAdjunct: function(num, cell) {
			console.log(adjuncts[num]);
			if(adjuncts[num] == undefined) {
				adjuncts[num] = cell;
				adjuncts[num].setAdjunct(8-num, this);
			}
		},	
	};
}
