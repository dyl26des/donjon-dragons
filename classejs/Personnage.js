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
    context.drawImage(
	this.image, 
	0, this.direction * this.hauteur, // Point d'origine du rectangle source à prendre dans notre image
	this.largeur, this.hauteur, // Taille du rectangle source (c'est la taille du personnage)
	(this.x * 32) - (this.largeur / 2) + 16, (this.y * 32) - this.hauteur + 24, // Point de destination (dépend de la taille du personnage)
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
};
	
Personnage.prototype.deplacer = function(direction, map) {
	// On change la direction du personnage
	this.direction = direction;
		
	// On vérifie que la case demandée est bien située dans la carte
	var prochaineCase = this.getCoordonneesAdjacentes(direction);
	if(prochaineCase.x < 0 || prochaineCase.y < 0 || prochaineCase.x >= map.getLargeur() || prochaineCase.y >= map.getHauteur()) {
		// On retourne un booléen indiquant que le déplacement ne s'est pas fait, 
		// Ça ne coute pas cher et ca peut toujours servir
		return false;
	}
		
	// On effectue le déplacement
	this.x = prochaineCase.x;
	this.y = prochaineCase.y;
		
	return true;
};