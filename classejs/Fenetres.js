var x;
$('#canvas').hide("slow");
$('#menu').hide("slow");
$('#combat').hide("slow");
$('#canvas').show("slow");

$(document).keyup(function(e) {
    
    if (e.keyCode === 27 && ($('#canvas').is(':visible') || $('#combat').is(':visible')))
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
    else if (e.keyCode === 27 && $('#menu').is(':visible'))
    {
            $('#menu').stop().hide("slow");
            $(x).stop().show("slow");
    }
    
});
    




