/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function character (vie,armure,degats)
{
    this.vie = vie;
    this.degats = dégats;
    this.armure = armure;
}
var adam = new character (10,5,5);
var gobelin = new character (5,2,2);



function combat()
{
   document.getElementById("combat").style.zIndex = 3;
   document.getElementById("combat").style.display = "block";
}


