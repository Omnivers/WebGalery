document.querySelector("#image_input").addEventListener("change",(e) =>{
    if(window.File && window.FileReader && window.FileList){
        const files=e.target.files;
        const output=document.querySelector("#results");
        for(let i=0;i<files.length;i++){
            if(!files[i].type.match("image")){ 
                alert("Malheureusement, l'album photo ne supporte que des fichiers de type : Jpg/Jpeg/Png");
                continue
            }
            const reader= new FileReader();
            reader.addEventListener("load",function (event){
                const picFile=event.target;
                const div=document.createElement(`a`);
                div.innerHTML=`<img src="${reader.result}"/>`;
                output.appendChild(div);
            })
            reader.readAsDataURL(files[i]);      
        }
    }else{
        alert("Malheureusement, votre navigateur ne supporte pas le file API requis!")
    };
});












/*const image_input=document.querySelector("#image_input");
const div=document.createElement('div');
image_input.addEventListener("change",function(){
    const reader= new FileReader();
    reader.addEventListener("load",()=>{
        //div.src=reader.result;
        div.innerHTML=`<img src="${reader.result}"/>`;
        document.body.appendChild(div);
        });
    reader.readAsDataURL(image_input.files[0]); 
})
*/


























/*var Ids_trans=["home","pics","cal","Langues"];
var Uaids=["Головне","Галерея","Розклад","Мова"];//Французький
var moisru=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];
var semaineru=["","Неділя","Понеділок","Вівторок","Середа","Четвер","п’ятниця","Субота"];
function langue(){ 
    Mois=moisru;
    semaine=semaineru;
    document.getElementById('home').innerHTML="Головне";
    document.getElementById('pics').innerHTML="Галерея";
    document.getElementById('cal').innerHTML="Розклад";
    document.getElementById('Langues').innerHTML="Французький";
    
}*/
