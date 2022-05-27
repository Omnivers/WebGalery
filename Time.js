initClock();
function updateClock(){    
    var now=new Date();
    var Jour=now.getDay(),
        mois=now.getMonth(),
        Njour=now.getDate(),
        annee=now.getFullYear(),
        heure=now.getHours(),
        minutes=now.getMinutes(),
        secondes=now.getSeconds();
        period="AM";
    if (heure==0){
        heure=12;
    }
    if (heure==12){
        heure=heure-12;
        period="PM";
    }
    Number.prototype.pad=function(digits){
    for(var n = this.toString();n.length < digits;n=0+n);
    return n;
    }

    var Mois=["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];    
    var semaine=["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    var Ids=["Dayname","Month","DayNum","Year","Hour","Min","Sec","Period"];
    var values=[semaine[Jour],Mois[mois],Njour.pad(2),annee,heure.pad(2),minutes.pad(2),secondes.pad(2),period];
    for (var i=0; i < Ids.length;i++)
    document.getElementById(Ids[i]).firstChild.nodeValue=values[i];

}
function initClock(){
    updateClock();
    window.setInterval("updateClock()",1);
}














