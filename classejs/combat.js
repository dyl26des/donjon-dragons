

var player ;
var ennemy;
var ctx;
function attaque(attaquant, defenseur)
{
    $('#texteCombat').append(attaquant.nom + "attack");
    var dmgfait = attaquant.dmg * (1.5/defenseur.armor);
    $('#texteCombat').append(attaquant.nom + " inflige " +dmgfait+"dmg a " + defenseur.nom);
    if ((defenseur.vie - dmgfait) <= 0){
        
        
            $('#pvennemy').html("0");
            alert("le " + defenseur.nom + " a subi trop de dommage pour \n\
    survivre");
        fincombat();
    }else
    {   
        defenseur.vie -= dmgfait;
        $('#pvennemy').html(defenseur.vie);
        dmgfait = defenseur.dmg * (1.5/attaquant.armor);
        if ((player.vie - dmgfait)<=0)
    }
}
function fincombat()
{
    isPreCombat = false;
    $('#combat').stop().hide();
    $('#canvas').stop().show();
    mDeplacement (ctx);
 }
 
    function combat(mob,joueur,context)
{
   player = joueur;
   ennemy = mob;
   ctx= context;
   $('#canvas').stop().hide();
   $('#combat').stop().show();
   $('#texteCombat').append("un "+ ennemy.nom +" sauvage apparait.");  
   $('#attaqueButton' ).stop().click(function() {
           attaque(player,ennemy);
    });
   $('#fuirButton' ).stop().click(function() {
           fuir();
    });
}


