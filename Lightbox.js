window.onload=()=> {
    const Lbox=document.querySelector('.Lightbox');
    const close=document.querySelector('.LightboxClose');
    const next=document.querySelector('.LightboxNext');
    const prev=document.querySelector('.LightboxPrev');
    const links=document.querySelectorAll('.Pictures a');
    const source=document.querySelector('.LightboxContainer img');
    var x=0;
    for(let link of links){
        
        link.addEventListener("click",function(e){
            e.preventDefault();
            Lbox.classList.add('show');
            source.src=this.href;  
        })
        
    }
    next.addEventListener("click", function(){
        x++;
        source.src=links[x].href;
        if(x==length.links){
            x=0;
        }
    })
    prev.addEventListener("click", function(){
        x--;
        source.src=links[x].href;
        if(x==-1){
            x=12;
        }
    })  
    close.addEventListener("click", function(){
        Lbox.classList.remove('show');
    })
    close.addEventListener('keydown', function(event){
        if(event.key === "Escape"){
         Lbox.classList.remove('show');
        }
    })
    
}
