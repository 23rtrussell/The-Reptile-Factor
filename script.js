'use strict'
console.log('Hello');

pic1.addEventListener('click', function(){
    alert("Congrats you found an easter egg");
});

const picContainerElement = document.getElementById('content');
const firstPicElement = document.getElementById('pic1'); 
function Image(name, imgPath,){
    this.name = name;
    this.imgPath = imgPath;
    this.clicks = 0;
    this.views = 0;
}