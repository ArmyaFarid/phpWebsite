(function(){
let scrolly = function(){
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
}

/* 
L'orsque l'on scroll
    Si le menu sort de l'ecran 
    Alors il deviendra fixe
*/
let menu= document.querySelector('.navbar');
let bande= document.querySelector('.alert');
let rect= menu.getBoundingClientRect();
let top=rect.top + scrolly();
let width=rect.width;
let hasCrollClass= menu.classList.contains('fixed');
//Les fonctions
let onScroll= function(){
    console.log('En scroll');
    if( scrolly() > top+100){
        menu.style.zIndex=1;
        menu.style.position="fixed";
        menu.style.top="0px";
        menu.style.width= width+"px";
    }
    else{
        menu.style.position=null;
        menu.style.top=null;
        menu.style.top=null;
        menu.style.width=null;
    }
}

let onResize= function(){
    menu.style.width="auto";
    menu.style.position=null;
    menu.style.top=null;
    rect= menu.getBoundingClientRect();
    top=rect.top + scrolly();
    let width=rect.width;
    onScroll();
}
//Les listeners
window.addEventListener('scroll', onScroll);
window.addEventListener('resize',onResize);
})();