var player ;
var enemy;
var ctx;
function attaque(attaquant, defenseur)
{
    $('#texteCombat').append(attaquant.nom + "attack");
    var dmgfait = attaquant.dmg * (1.5/defenseur.armor);
    $('#texteCombat').append(attaquant.nom + " inflige " +dmgfait+"dmg a " + defenseur.nom);
    if ((defenseur.vie - dmgfait) <= 0){
        
        
            $('#pvenemy').html("0");
            alert("le " + defenseur.nom + " a subi trop de dommage pour \n\
    survivre");
        fincombat();
    }else
    {   
        defenseur.vie -= dmgfait;
        $('#pvenemy').html(defenseur.vie);
        
        //ataque de l'ennemi
        dmgfait = defenseur.dmg * (1.5/attaquant.armor);
        $('#texteCombat').append(defenseur.nom + "ataque infligeant " +dmgfait+"dmg a " + attaquant.nom);

        if ((player.vie - dmgfait)<=0) {
            $('#pvjoueur').html("0");
            alert('le joueur est mort (0pv) vous avez perdu la parite !');
            fincombat();
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
    mDeplacement (ctx);
 }
 function fuir()
 {
    if(Math.floor(Math.random()) >0.6){
        alert("vous avez fuit avec succes !");
        fincombat();
    }else
    {
        alert("vous n'avez pas couru assez vite!");
        var dmgfait = enemy.dmg * (1.5/player.armor);
        $('#texteCombat').append(enemy.nom + "ataque infligeant " +dmgfait+"dmg a " + player.nom);

        if ((player.vie - dmgfait)<=0) {
            $('#pvjoueur').html("0");
            alert('le joueur est mort (0pv) vous avez perdu la parite !');
            fincombat();
        }else{
            player.vie-=dmgfait;
            $('#pvjoueur').html(player.vie);
        }
    }
 }
 
    function combat(mob,joueur,context)
{
   player = joueur;
   enemy = mob;
   ctx= context;
   $('#nomjoueur').html(player.nom);
   $('#nomennemi').html(player.nom);
   $('#canvas').stop().hide();
   $('#combat').stop().show();
   $('#texteCombat').append("un "+ enemy.nom +" sauvage apparait.");  
   $('#attaqueButton' ).stop().click(function() {
           attaque(player,enemy);
    });
   $('#fuirButton' ).stop().click(function() {
           fuir();
    });
}


