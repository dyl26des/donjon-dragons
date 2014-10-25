/* 
 *  "BAS"    : 0,
 *  "GAUCHE" : 1,
 *  "DROITE" : 2,
 *  "HAUT"   : 3
 */


function Personnage (tile,x,y,direction) {
    this.x=x;   this.y=y;   this.direction=direction;
    
    // Chargement de l'image dans l'attribut image
	this.image = new Image();
        this.etatAnimation = -1;
	this.image.referenceDuPerso = this;
	this.image.onload = function() {
		if(!this.complete) 
			throw "Erreur de chargement du sprite nommé \"" + url + "\".";
		
		// Taille du personnage
		this.referenceDuPerso.largeur = this.width / 4;
		this.referenceDuPerso.hauteur = this.height / 4;
	};
	this.image.src = "tileset/" + tile;

}


/*******************************************************************************/

Personnage.prototype.dessinerPersonnage = function(context) {
    var frame = 0; // Numéro de l'image à prendre pour l'animation
    var decalageX = 0, decalageY = 0; // Décalage à appliquer à la position du personnage
    if(this.etatAnimation >= DUREE_DEPLACEMENT) {
	// Si le déplacement a atteint ou dépassé le temps nécessaire pour s'effectuer, on le termine
	this.etatAnimation = -1;
    } else if(this.etatAnimation >= 0) {
	// On calcule l'image (frame) de l'animation à afficher
	frame = Math.floor(this.etatAnimation / DUREE_ANIMATION);
	if(frame > 3) {
		frame %= 4;
	}
	
	// Nombre de pixels restant à parcourir entre les deux cases
	var pixelsAParcourir = 32 - (32 * (this.etatAnimation / DUREE_DEPLACEMENT));
	
	// À partir de ce nombre, on définit le décalage en x et y.
	// NOTE : Si vous connaissez une manière plus élégante que ces quatre conditions, je suis preneur
	if(this.direction === 3) {
		decalageY = pixelsAParcourir;
	} else if(this.direction === 0) {
		decalageY = -pixelsAParcourir;
	} else if(this.direction === 1) {
		decalageX = pixelsAParcourir;
	} else if(this.direction === 2) {
		decalageX = -pixelsAParcourir;
        }
	this.etatAnimation++;
    }
/*
 * Si aucune des deux conditions n'est vraie, c'est qu'on est immobile, 
 * donc il nous suffit de garder les valeurs 0 pour les variables 
 * frame, decalageX et decalageY
 */
    context.drawImage(
	this.image, 
	this.largeur * frame, this.direction * this.hauteur, // Point d'origine du rectangle source à prendre dans notre image
	this.largeur, this.hauteur, // Taille du rectangle source (c'est la taille du personnage)
        // Point de destination (dépend de la taille du personnage)
        (this.x * 32) - (this.largeur / 2) + 16 + decalageX, (this.y * 32) - this.hauteur + 24 + decalageY,
	
	this.largeur, this.hauteur // Taille du rectangle destination (c'est la taille du personnage)
    );

};	

Personnage.prototype.getCoordonneesAdjacentes = function(direction)  {
	var coord = {'x' : this.x, 'y' : this.y};
	switch(direction) {
		case 0 : 
			coord.y++;
			break;
		case 1 : 
			coord.x--;
			break;
		case 2 : 
			coord.x++;
			break;
		case 3 : 
			coord.y--;
			break;
	}
	return coord;
},
	
Personnage.prototype.deplacer = function(direction, map) {
	// On ne peut pas se déplacer si un mouvement est déjà en cours !
        if(this.etatAnimation >= 0) {
            return false;
        }
        // On change la direction du personnage
	this.direction = direction;
        
		
	// On vérifie que la case demandée est bien située dans la carte
	var prochaineCase = this.getCoordonneesAdjacentes(direction);
	if(prochaineCase.x < 0 || prochaineCase.y < 0 || prochaineCase.x >= map.getLargeur() || prochaineCase.y >= map.getHauteur()) {
		// On retourne un booléen indiquant que le déplacement ne s'est pas fait, 
		// Ça ne coute pas cher et ca peut toujours servir
		return false;
	}else {     if (map.getDecors(prochaineCase.x,prochaineCase.y)>0){
                return false;
            }
            
        }
        alert(map.getDecors(prochaineCase.x,prochaineCase.y));
		
        // On commence l'animation
        this.etatAnimation = 1;
	// On effectue le déplacement
	this.x = prochaineCase.x;
	this.y = prochaineCase.y;
		
	return true;
};