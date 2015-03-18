var ts = new Tileset("tileset/mine.png");
var joueur = new Personnage("Adam.png",0,0,0,true);
var map = new Map("000",joueur);
var inventaire= new Array();
inventaire[0]=new Equipement("Caisse en carton","armure",1,1,0);
inventaire[1]=new Equipement("Couteau a beurre","arme",0,1,3);
var DUREE_ANIMATION = 4;
var DUREE_DEPLACEMENT = 12;
var ctx;
var isPreCombat=false;
var animID;
var openMenu = false;
function mDeplacement (ctx) {
    
        

	canvas.width  = map.getLargeur() * 32;
	canvas.height = map.getHauteur() * 32;
	
	animID=setInterval(function() {
            map.dessinerMap(ctx);
        }, 40);
        
        // Gestion du clavier
    window.onkeydown = function(event) {
	
        var e = event || window.event;
        var key = e.which || e.keyCode;
        switch(key) {
	//case 38 a 39, gestion des deplacement
        case 38 : case 122 : case 119 : case 90 : case 87 : // Flèche haut, z, w, Z, W
		joueur.deplacer(3,map);
		break;
	case 40 : case 115 : case 83 : // Flèche bas, s, S
		joueur.deplacer(0,map);
		break;
	case 37 : case 113 : case 97 : case 81 : case 65 : // Flèche gauche, q, a, Q, A
		joueur.deplacer(1,map);
		break;
	case 39 : case 100 : case 68 : // Flèche droite, d, D
		joueur.deplacer(2,map);
		break;
        //gestions des menu
        case 27 ://menu principal
            if(openMenu === false)
            {
                document.getElementById("menu").style.zIndex = 2;
                openMenu = true;   
            } 
            else
            {
                document.getElementById("menu").style.zIndex = 0;
                openMenu = false;
            }
            break;
                
	default : 
		//alert(key);
		// Si la touche ne nous sert pas, nous n'avons aucune raison de bloquer son comportement normal.
		return true;
        }
	return false;
    };
    
}
function mPreCombat (ctx,mob) {
    
        if (!isPreCombat){
        isPreCombat= true; 
        
	canvas.width  = map.getLargeur() * 32;
	canvas.height = map.getHauteur() * 32;
	
//	setInterval(function() {
//            map.dessinerMap(ctx);
//        }, 40);
        
        // Gestion du clavier
        window.onkeydown = function() {
            return false;
        };
        mob.agro(joueur,map);
        
    }
    
}




window.onload = function() {
	var canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
        mDeplacement (ctx);
	
};

