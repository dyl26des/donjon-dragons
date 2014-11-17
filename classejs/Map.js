function Map(nom) {
    this.personnages = new Array();
    
    this.chargerMap(nom);
    
}
function Map(nom, joueur) {
    this.personnages = new Array();
    this.personnages[0] = joueur;
    this.chargerMap(nom);
    
}


Map.prototype.chargerMap = function (nom){
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
    this.terrain2  = mapData.terrain2;
    this.terrain3 = mapData.terrain3;
    var posjoueur = mapData.posjoueur;
    var pnjs    =   mapData.pnjs;
    
 
    this.personnages.splice(1,this.personnages.length-1);
    this.personnages[0].repositionner (posjoueur[0],posjoueur[1],posjoueur[2]);

    for (var i = 0, l = pnjs.length ; i < l; i++)
    {
        var pnj = pnjs[i];
        
        var persopnj = new Personnage (pnj[0],pnj[1],pnj[2], pnj[3]);
        this.addPersonnage(persopnj);
    }
    /* terrain0 = sol
     * terrain1 = objet au sol
     * terrain2 = mur et collision
     * terrain3 = plafond, superieur au personnages
     */
};
// Pour récupérer la taille (en tiles) de la carte
Map.prototype.getHauteur = function() {
	return this.terrain0.length;
};
Map.prototype.getLargeur = function() {
	return this.terrain0[0].length;
};

Map.prototype.getTerrain2 = function( x, y){
    var ligne=this.terrain2[y];
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

        for(var i = 0, l = this.terrain2.length; i < l ; i++) {
		var ligne = this.terrain2[i];
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
	this.personnages[i].dessinerPersonnage(context,this);
        }
        
        
        for(var i = 0, l = this.terrain3.length; i < l ; i++) {
		var ligne = this.terrain3[i];
		var y = i * 32;
		for(var j = 0, k = ligne.length; j < k ; j++) {
			this.tileset.dessinerTile(ligne[j], context, j * 32, y);
		}
        }
        
        if (!isPreCombat && this.personnages[0].etatAnimation===-1 ){
            for (var i=1, l = this.personnages.length ; i<l;i++){
                var mob = this.personnages[i];

                switch  (mob.direction) {
                    case 0 : 
                        if ((mob.x === this.personnages[0].x) && (mob.y < this.personnages[0].y))
                        {
                            mPreCombat(context,mob);
                        }
                    break;
                    case 1 :                         
                        if ((mob.y === this.personnages[0].y) && (mob.x > this.personnages[0].x))
                        {
                            mPreCombat(context,mob);
                        }
                    break;
                    case 2 : 
                         if ((mob.y === this.personnages[0].y) && (mob.x < this.personnages[0].x))
                        {
                            mPreCombat(context,mob);
                        }
                    break;
                    case 3 :
                        if ((mob.x === this.personnages[0].x) && (mob.y > this.personnages[0].y))
                        {
                            mPreCombat(context,mob);
                        }
                        
                    break;
                }
            }
        }
};