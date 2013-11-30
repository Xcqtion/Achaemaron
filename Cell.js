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
			return adjuncts[num];
		},

		setAdjunct: function(num, cell) {
			console.log(adjuncts[num]);
			if(adjuncts[num] == undefined) {
				adjuncts[num] = cell;
				adjuncts[num].setAdjunct(8-num, this);
			}
		}
	};
}
