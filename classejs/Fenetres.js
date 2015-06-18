var x;
$('#canvas').hide("slow");
$('#menu').hide("slow");
$('#combat').hide("slow");
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
    
$('#Resume').stop().click()(function(){
    alert('lalalalala');
    closemenu();  
});    
    
});


    




