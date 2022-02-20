//variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startgame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const phraselist = document.getElementById('phrase');

//tracks missed guesses
let missed = 0;

//event listener for start
startgame.addEventListener('click', e => {
    overlay.style.display = "none";
});

//my custom sentences to be guessed
const mysentences = [
    "Elevate",
    "Lock Box",
    "Late Night",
    "On Tour",
    "Rental"
]
//chooses sentence randomly and breaks into individual letters
function getRandomPhraseAsArray(arr){

    const random =  Math.floor(Math.random() * arr.length);
    const randomsentence = arr[random].toLowerCase();
    const spiltsentence = randomsentence.split('');

    return spiltsentence;
}

let randomsentence = getRandomPhraseAsArray(mysentences);

function addPhraseToDisplay(arr){
    for( let i = 0; i < arr.length; i ++){
      
      const li = document.createElement('li'); 

      li.textContent = arr[i];  

      phraselist.appendChild(li);
    //if the letter is a space, add the space class, otherwise add the letter class
      if (arr[i] === " "){
        li.classList.add("space");
    } else {
        li.classList.add("letter");
    }
    }
};
addPhraseToDisplay(randomsentence);


//Check letter function
function checkLetter(button){
    const li = document.querySelectorAll('li');
    let match = null;
        for (i = 0; i < li.length; i++){
                if (li[i].textContent === button.textContent){
                    li[i].classList.add('show');
                    match = (li[i] = button.textContent);
                    
                }
        }
    return match;
}

qwerty.addEventListener("click", (e) => {
    let button = e.target;
    
     if (button.tagName === "BUTTON" || button.className ==="chosen") {
         const button = e.target;
    
     //if button chosen, add chosen class
      button.classList.add("chosen");
      button.disabled = true;
    
      let result = checkLetter(button);
    
     if(result === null) {
         const down = document.querySelectorAll(".tries img")[missed];
         down.src='/Users/robertgentry/Documents/Coding-Projects/Treehouse/github-treehouse-project-6/treehouse-project-6/images/lostHeart.png';
         missed++
     }

//Check Win Function
CheckWin()
 }

})
function CheckWin() {
let title = document.querySelector(".title");
const letter = document.getElementsByClassName("letter");
const show = document.getElementsByClassName("show");

if(letter.length === show.length) {

overlay.classList.add("win");
title.innerText= "You Win";
overlay.style.display = "flex";
}

if(missed > 4 ) {
    overlay.classList.add('lose');
    title.innerHTML = "You Lose";
    overlay.style.display = "flex";
}

}