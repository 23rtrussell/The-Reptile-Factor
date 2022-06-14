'use strict'
console.log('Hello');

pic1.addEventListener('click', function(){
    alert("Congrats you found an easter egg");
});

var factPlaceholder = document.getElementById("Facts");
var showFact = document.getElementById("show-fact");

/* Facts from this API: https://fact.birb.pw/api/v1/cat */

var RandomFacts = ["Gecko's have over 1,500 spieces.", 
    "Most lizards can grow their tails back after detaching it to run away.",
    "Hognose snakes are called that due to there nose looking like its been pointed up all the time.",
    "Rattlesnakes usually rattle to scare away and don't attack unless they have to.",
    "Some crocodiles are freshwater due to their gills ability to filter out the salt.",
    "Blue belled lizards are also known as western fence lizard.",
    "Theodore Roosevelt had a pet lizard named Bill.",
    "Quentin bought 4 snakes then took them into the oval office.",
    "There used to be a snake called the titanoboa. The snake was bigger then most of todays cars.",
    "John adams bought his son a pet alligator along with a toger and a dog.",
    "More people die getting anti-venom the shark attacks.",
    "Chameleons are the ones that change there color based on whats happening.",
    "A batch of snake eggs is called a clutch.",
    "Oop you found the easter egg one. Good job. Just remember to keep looking for the others!",
    "Sea turtles are the ones that leave there eggs in the sand.",
    "The most common family of geckos is called Gekkonidae.",
    "The oldest pet to ever live was a tortoise.",
    "In minecraft you can make a turtle helmet to breathe underwater.",
    "Oh no a wild easter egg appeared. Go blastoise!",
    "Some tortoises move so slow that moss grows on them."
]


var factNumber;

function randomFact(){
  return RandomFacts[factNumber];
}

RandomFact.addEventListener('click', function(){
  factNumber = Math.floor(Math.random()*20);
  factPlaceholder.textContent = randomFact();
});