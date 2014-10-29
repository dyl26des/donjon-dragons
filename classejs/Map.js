function Map(nom) {
    this.personnages = new Array();
	// Création de l'objet XmlHttpRequest
	var xhr = getXMLHttpRequest();

	// Ici viendra le code que je vous présente ci-dessous
        // Chargement du fichier
    xhr.open("GET", './maps/' + nom + '.json', false);
    xhr.send(null);
    if(xhr.readyState !== 4 || (xhr.status !== 200 && xhr.status !== 0)) // Code == 0 en local
	throw new Error("Impossible de charger la carte nommée \"" + nom + "\" (code HTTP : " + xhr.status + ").");
    var mapJsonData = xhr.responseText;
    // Analyse des données
    var mapData = JSON.parse(mapJsonData);
    
    this.tileset = new Tileset(mapData.tileset);
    this.terrain0 = mapData.terrain0;
    this.terrain1 = mapData.terrain1;
    this.decors  = mapData.decors;
}

// Pour récupérer la taille (en tiles) de la carte
Map.prototype.getHauteur = function() {
	return this.terrain0.length;
};
Map.prototype.getLargeur = function() {
	return this.terrain0[0].length;
};
Map.prototype.getTerrain1 = function( x, y){
    var ligne=this.terrain1[y];
    return ligne[x];
};
Map.prototype.getDecors = function( x, y){
    var ligne=this.decors[y];
    return ligne[x];
};
Map.prototype.addPersonnage = function(perso) {
	this.personnages.push(perso);
};
Map.prototype.dessinerMap = function(context) {
	for(var i = 0, l = this.terrain0.length; i < l ; i++) {
		var ligne = this.terrain0[i];
		var y = i * 32;
		for(var j = 0, k = ligne.length; j < k ; j++) {
			this.tileset.dessinerTile(ligne[j], context, j * 32, y);
		}
	}

        for(var i = 0, l = this.decors.length; i < l ; i++) {
		var ligne = this.decors[i];
		var y = i * 32;
		for(var j = 0, k = ligne.length; j < k ; j++) {
			this.tileset.dessinerTile(ligne[j], context, j * 32, y);
		}
	}
        
        for(var i = 0, l = this.terrain1.length; i < l ; i++) {
		var ligne = this.terrain1[i];
		var y = i * 32;
		for(var j = 0, k = ligne.length; j < k ; j++) {
			this.tileset.dessinerTile(ligne[j], context, j * 32, y);
		}
	}
       
        for(var i = 0, l = this.personnages.length ; i < l ; i++) {
	this.personnages[i].dessinerPersonnage(context);
        }
};