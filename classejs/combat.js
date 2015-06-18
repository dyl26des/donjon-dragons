
function character (vie,armure,degats)
{
    this.vie = vie;
    this.degats = degats;
    this.armure = armure;
}
var adam = new character (10,5,5);
var gobelin = new character (5,2,2);

function attaque()
{
    $('#texteCombat').html("Adam attack");
}
function fuir()
{
    isPreCombat = false;
    alert(isPreCombat+' '+window.onkeydown());
    //map.getPersos().splice(map.getPersos().indexOf(mob),1);
    $('#combat').stop().hide();
    $('#canvas').stop().show();
 }
function combat()
{
   $('#canvas').stop().hide();
   $('#combat').stop().show();
   $('#texteCombat').html("a wild kevin appears.");  
   $('#attaqueButton' ).stop().click(function() {
           attaque();
    });
   $('#fuirButton' ).stop().click(function() {
           fuir();
    });
}


