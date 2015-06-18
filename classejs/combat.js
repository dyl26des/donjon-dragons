var player ;
var enemy;
var ctx;
function attaque(attaquant, defenseur)
{
    $('#texteCombat').append(attaquant.nom + "attack \n");
    var dmgfait = attaquant.dmg * (1.5/defenseur.armor);
    $('#texteCombat').append(attaquant.nom + " inflige " +dmgfait+"dmg a " + defenseur.nom+"\n");
    if ((defenseur.vie - dmgfait) <= 0){
        
        
            $('#pvennemi').html("0");
            alert("le " + defenseur.nom + " a subi trop de dommage pour \n\
    survivre");
        fincombat();
    }else
    {   
        defenseur.vie -= dmgfait;
        $('#pvennemi').html(defenseur.vie);
        
        //ataque de l'ennemi
        dmgfait = defenseur.dmg * (1.5/attaquant.armor);
        $('#texteCombat').append(defenseur.nom + "ataque infligeant " +dmgfait+"dmg a " + attaquant.nom+"\n");

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
        $('#texteCombat').append(enemy.nom + "ataque infligeant " +dmgfait+"dmg a " + player.nom +"\n");

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
 
    function combat(mob,joueur,context)
{
   player = joueur;
   enemy = mob;
   ctx= context;
   $('#nomjoueur').html(player.nom);
   $('#nomennemi').html(enemy.nom);
   $('#pvennemi').html(enemy.vie);
   $('#pvjoueur').html(player.vie);
   $('#canvas').stop().hide();
   $('#combat').stop().show();
   $('#texteCombat').append("un "+ enemy.nom +" sauvage apparait. \n");  
   $('#attaqueButton' ).stop().click(function() {
           attaque(player,enemy);
    });
   $('#fuirButton' ).stop().click(function() {
           fuir();
    });
}


