// il y a 3 types de sortie (portes, échelles, escaliers), il y a donc 3 cas pour les maps suivantes
function nextMap(nb)
{
  
    switch(nb)
    {
        case -1 :  carte = "00" + Math.floor((Math.random() * 10));break;
        case -2 :  carte = "0" + Math.floor((Math.random() * 10)) + "0";break;
        case -3 :  carte = Math.floor((Math.random() * 10)) + "00";break;
    }
    
    return carte;
};


