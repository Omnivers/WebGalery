// Code d'Image pour les divs containers avec une Database
/*var Image=["/J&O/img6.jpg","/J&O/img7.jpg","/J&O/img8.jpg","/J&O/img9.jpg","/J&O/img13.jpg","/J&O/img14.jpg","/J&O/img15.jpg","/J&O/img16.jpg","/J&O/img17.jpg","/J&O/img18.jpg"]
let x=0 ;
var timer=3000; 
function Tistou(){
        if(x+2<Image.length){
        document.content1.src=Image[x];
        document.content2.src=Image[x+1];
        document.content3.src=Image[x+2];
        x++
        }
        else {
            x=0;
        }   
       setTimeout("Tistou()", timer);    
    }*/
function slideLaunch(){
    //Tistou()
    Tistou_2()
    Time_conditions()
}
window.onload = slideLaunch;
x=700
function Tistou_2(){
    document.content1.src=`https://picsum.photos/${x}/700`
    document.content2.src=`https://picsum.photos/${x+100}/800`
    document.content3.src=`https://picsum.photos/${x+100}/900`
    x+=100;
    if (x>1200) {
        x=700;
    }
    setTimeout('Tistou_2()',4000);
}
//Code d'Image pour les divs containers Img generator


// Code de texte pour la div "Quotes"...

var Texte=["The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
"Don’t let yesterday take up too much of today.",
"You learn more from failure than from success. Don’t let it stop you. Failure builds character.",
"If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
"Experience is a hard teacher because she gives the test first, the lesson afterwards.","To know how much there is to know is the beginning of learning to live.",
"Goal setting is the secret to a compelling future.","Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus.",
"Either you run the day or the day runs you.","I’m a greater believer in luck, and I find the harder I work the more I have of it.",
"When we strive to become better than we are, everything around us becomes better too.",
"Opportunity is missed by most people because it is dressed in overalls and looks like work.",
"Setting goals is the first step in turning the invisible into the visible",
"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
"It’s not about better time management. It’s about better life management"];
let numTexte=0;
function words() {
    document.getElementById('quotes').innerHTML=Texte[numTexte];
    numTexte++;
    Time_conditions();
    }
function Time_conditions(){
   if(numTexte<Texte.length){
        setTimeout("words()",4000);
    }else if(numTexte==Texte.length){
        numTexte=0
     Time_conditions();
    }
}
// Ce code est destiner au Sidebar et l'affichage des Events du calendrier dessus...
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];
const Levent=document.getElementById('LastEvent');
const icon=document.getElementById('icon');
const Add=document.getElementById('Addnewevent');
const Fevent=document.getElementById('FirstEvent');
const RandomEvent=document.getElementById('AnotherEvent');

function cal(){
    window.open("Calendar.html");
}
Levent.addEventListener("click",cal);
icon.addEventListener('click',cal);
Fevent.addEventListener('click',cal);

if (events.length<1) {
    Levent.style.display='none';
    Add.style.display='block';
    icon.style.display='block';
    Fevent.style.display='none';
}else if(events.length<2){
    let Lastevent=events[0];
    let itemLevent=document.createTextNode(`Event : ${Lastevent.title}`);
    Levent.appendChild(itemLevent);
    Fevent.style.display='none';
    Add.innerHTML="Add/Edit an event :";
    
}else{
    let Lastevent=events[0];
    let itemLevent=document.createTextNode(`Event : ${Lastevent.title}`);
    Levent.appendChild(itemLevent);
    let FirstEvent=events[1];
    let itemFevent=document.createTextNode(`Event : ${FirstEvent.title}`);
    Fevent.appendChild(itemFevent);
    Add.innerHTML="Add/Edit an event :";
}

    
  
