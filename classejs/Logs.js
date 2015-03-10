/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//fonctions de logs pour debug
function Log(id,nom,valeur)
{
    this.id= id;this.nom=nom;this.valeur=valeur;
}

Log.prototype.affiche=function (){
    return (this.nom + ": "+this.valeur);
};
Log.prototype.getId = function(){
    return this.id;
};
logsArray = new Array () ; var baliseLog = document.getElementById("logs");
function verifLogs(valeur,index,array){
    return !(valeur.getId() === logTemp.getId()) ;
}
function affichageLog(valeur,index,array){
    if (valeur.getId() === logTemp.getId()) array[index]=logTemp;alert (logTemp.affiche());
    baliseLog.innerHTML+= valeur.affiche()+"<br>";
}
function logs(id,nom,valeur)
{
    logTemp = new Log(id,nom,valeur);
    if (logsArray.every(verifLogs)) logsArray.push(logTemp);
    baliseLog.innerHTML='';
    logsArray.forEach(affichageLog);
       
}
/********************************************************************/


