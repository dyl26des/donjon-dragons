/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var ID = 0;
function Equipement (nom,emplacement,armure,vie,dmg)
{
    this.id=ID;
    ID++;
    this.nom=nom;
    this.emplacement=emplacement;
    /*
     * armure
     * arme
     * amulette
     */
    this.armure=armure;
    this.vie=vie;
    this.dmg=dmg;
    this.equipe=false;
}
