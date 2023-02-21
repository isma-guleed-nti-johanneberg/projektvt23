let image=document.querySelector("img");
let width= image.getAttribute('width');
let height= image.getAttribute('height');

let button1= document.querySelector('#button1');
let button2= document.querySelector('#button2');


button1.addEventListener("click", () => {
    if (image.getAttribute('width') < 500) {
        image.setAttribute('width', 500);
        image.setAttribute('height', 500);
    } else {
        image.setAttribute('width', 250);
        image.setAttribute('height', 250);
    }



})

button2.addEventListener("click", () => {
    image.setAttribute('width', width);
    image.setAttribute('height', height);
    
    
    
    })