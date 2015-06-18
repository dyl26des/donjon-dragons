var x;
$('#canvas').hide("slow");
$('#menu').hide("slow");
$('#combat').hide("slow");
$('.stats').stop().hide("slow");
$('#Retour').stop().hide("slow");
$('#canvas').show("slow");

    

function openmenu()
{
            if($('#combat').is(':visible'))
            {
                x="#combat";
                $('#combat').stop().hide("slow");
            }
            else
            {
                x="canvas";
                $('#canvas').stop().hide("slow");
            }
            $('#menu').stop().show("slow");
            $('#Retour').stop().hide("slow");
}

function closemenu()
{
    $('#menu').stop().hide("slow");
    $(x).stop().show("slow");
}

$(document).stop().keyup(function(e) {
    
    if (e.keyCode === 27 && ($('#canvas').is(':visible') || $('#combat').is(':visible')))
    {       
          openmenu();  
    }   
    else if (e.keyCode === 27 && $('#menu').is(':visible'))
    {
          closemenu();  
    }
});
 
$('#Resume').stop().click(function(){
    closemenu();  
});  

$('#Inventory').stop().click(function(){  
    $('.MenuButton').stop().hide("slow");
    $('#vie').html(''+ joueur.vie);
    $('#attaque').html(''+ joueur.dmg);
    $('#defense').html(''+ joueur.armor);
    $('#Retour').stop().show("slow");
    $('.stats').stop().show("slow");
});
  
$('#Restart').stop().click(function(){
    document.location.reload(true);
});

$('#Retour').stop().click(function(){
    $('.stats').stop().hide("slow");
    $('.MenuButton').stop().show("slow");
    $('#Retour').stop().hide("slow");
});
    




