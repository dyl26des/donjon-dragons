var player ;
var enemy;
var ctx;

$('#attaqueButton' ).stop().click(function() {
           attaque(player,enemy);
    });
   $('#fuirButton' ).stop().click(function() {
           fuir();
    });
    
function attaque(attaquant, defenseur)
{
    $('#texteCombat').append("<br/> " +attaquant.nom + "attack <br/>");
    var dmgfait = attaquant.dmg * (1.5/defenseur.armor);
    $('#texteCombat').append(attaquant.nom + " inflige " +dmgfait+"dmg a " + defenseur.nom+"<br/>");
    
    if ((defenseur.vie - dmgfait) <= 0)
    {
            $('#pvennemi').html("0");
            alert("le " + defenseur.nom + " a subi trop de dommage pour <br/>\
    survivre");
            if (Math.random()<0.3 && player.isPlayer) //loot d'objet
            {
                var nomitem;var valeuritem;
                var typeitem= Math.floor(Math.random()*5);
                
                switch (typeitem){
                case 0://arme
                    valeuritem = Math.floor(Math.random()*2)+1;
                    nomitem="epéemagique + "+ valeuritem;
                    break;
                case 1: //armure
                    valeuritem = Math.floor(Math.random()*5)+2;
                    nomitem="armuregéniale + "+ valeuritem;
                    break;
                case 3: //amulette
                    valeuritem = Math.floor(Math.random()*2)+1;
                    nomitem="amumulette + "+ valeuritem;
                    break;
                case 4: //potion
                        valeuritem=0;
                        nomitem="jus de fée";
                    break;
                default:
                    valeuritem=0;
                        nomitem="jus de fée";
                        typeitem = 4;
                    break;
                    }
                    
            alert("bravo ! vous avez looter un(e) magnifique : " + nomitem);
            player.addItem(new Item(nomitem,typeitem,valeuritem));
            
            }
            
        fincombat();
    }else
    {   
        defenseur.vie -= dmgfait;
        $('#pvennemi').html(defenseur.vie);
        
        //ataque de l'ennemi
        dmgfait = enemy.dmg * (1.5/player.armor);
        $('#texteCombat').append(defenseur.nom + "ataque infligeant " +dmgfait+"dmg a " + attaquant.nom+"<br/>");

        if ((player.vie - dmgfait)<=0) {
            $('#pvjoueur').html("0");
            alert('le joueur est mort (0pv) vous avez perdu la parite !');
            location.reload(true);
        }else{
            player.vie-=dmgfait;
            $('#pvjoueur').html(player.vie);
        }
    }
}
function fincombat()
{
    isPreCombat = false;
    $('#texteCombat').html("");
    $('#combat').stop().hide();
    $('#canvas').stop().show();
    activeClavier();
    
 }
 function fuir()
 {
    if(Math.floor(Math.random()) >0.6)
    {
        alert("vous avez fuit avec succes !");
        fincombat();
    }
    else
    {
        alert("vous n'avez pas couru assez vite!");
        
         var dmgfait = enemy.dmg * (1.5/player.armor);
        $('#texteCombat').append(enemy.nom + "ataque infligeant " +dmgfait+"dmg a " + player.nom +"<br/>");

        if ((player.vie - dmgfait)<=0) {
            $('#pvjoueur').html("0");
            alert('le joueur est mort (0pv) vous avez perdu la parite !');
            location.reload(true);
        }else{
            player.vie-=dmgfait;
            $('#pvjoueur').html(player.vie);
        }
    }
 }
 
    function combat(mob,joueur)
{
   player = joueur;
   enemy = mob;
   $('#nomjoueur').html(player.nom);
   $('#nomennemi').html(enemy.nom);
   $('#pvennemi').html(enemy.vie);
   $('#pvjoueur').html(player.vie);
   $('#canvas').stop().hide();
   $('#combat').stop().show();
   $('#texteCombat').append("un "+ enemy.nom +" sauvage apparait. <br/>");  
   
}


