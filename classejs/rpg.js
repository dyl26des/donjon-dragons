var ts = new Tileset("tileset/mine.png");
var map = new Map("000");

window.onload = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	
	canvas.width  = map.getLargeur() * 32;
	canvas.height = map.getHauteur() * 32;
	
	map.dessinerMap(ctx);
};