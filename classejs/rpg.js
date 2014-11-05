var ts = new Tileset("tileset/mine.png");
var map = new Map("000");
var DUREE_ANIMATION = 4;
var DUREE_DEPLACEMENT = 12;
var joueur = map.personnages[0];
//map.addPersonnage(joueur);

window.onload = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	
        
        
	canvas.width  = map.getLargeur() * 32;
	canvas.height = map.getHauteur() * 32;
	
	setInterval(function() {
	map.dessinerMap(ctx);
        }, 40);
        
        // Gestion du clavier
    window.onkeydown = function(event) {
	
        var e = event || window.event;
        var key = e.which || e.keyCode;
        
        switch(key) {
	case 38 : case 122 : case 119 : case 90 : case 87 : // Flèche haut, z, w, Z, W
		joueur.deplacer(3, map);
		break;
	case 40 : case 115 : case 83 : // Flèche bas, s, S
		joueur.deplacer(0, map);
		break;
	case 37 : case 113 : case 97 : case 81 : case 65 : // Flèche gauche, q, a, Q, A
		joueur.deplacer(1, map);
		break;
	case 39 : case 100 : case 68 : // Flèche droite, d, D
		joueur.deplacer(2, map);
		break;
	default : 
		//alert(key);
		// Si la touche ne nous sert pas, nous n'avons aucune raison de bloquer son comportement normal.
		return true;
}
	return false;
    };
};