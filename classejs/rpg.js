var ts = new Tileset("tileset/mine.png");
var map = new Map("000");

window.onload = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
        window.onkeydown = function(event) {
	var e = event || window.event;
        var key = e.which || e.keyCode;
        alert(key);
        return false;
        };
	
	canvas.width  = map.getLargeur() * 32;
	canvas.height = map.getHauteur() * 32;
	
        var player = new Personnage("Adam.png", 1, 1, 0);
        map.addPersonnage(player);
	map.dessinerMap(ctx);
};