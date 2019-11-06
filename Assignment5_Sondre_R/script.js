/* Part 2 */
console.log('PART 2');

for (let i = 1; i < 21; i++) {
    console.log(i);
}
/* Logger alle verdier fra 1 (i = 1) og stopper før 21, altså 20.*/
/* Part 3 */
console.log('PART 3');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < numbers.length; i++) { 
    /* looper gjennom alle elementene i arrayen numbers*/
    let number = numbers[i];
    /* Lager en variabel for hver iterasjon av loopen*/
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("eplekake");
        /* Hvis det er delelig med 3 OG 5, print eplekake */
    }
    else if (number % 3 == 0) {
        console.log("eple");
        /* Hvis det er delelig med 3, print eple */
    }
    else if (number % 5 == 0) {
        console.log("kake");
        /* Hvis det er delelig med 5, print kake */
    }
    else {
        console.log(number);
        /*Hvis det ikke er delelig med 5 eller 3, print nummeret*/
       }
}

/* Part 4 */
let title = document.getElementById("title");
title.innerText = "Hello Javascript";
/* skaffer elementet og skriver til elementet */

/* Part 5 */
let magicEl = document.getElementById("magic");

let noneEl = document.getElementById("none");
let hiddenEl = document.getElementById("hidden");
let resetEl = document.getElementById("reset");
/* lager variabler */

noneEl.addEventListener("click", changeDisplay);
hiddenEl.addEventListener("click", changeVisibility);
resetEl.addEventListener("click", reset);
/* Legger til lytter når knappene blir trykket */

function changeDisplay () {
    magicEl.style.display = "none";
    /* Bytter display til none */
}

function changeVisibility () {
    magicEl.style.display = "block";
    magicEl.style.visibility = "hidden";
    /* Bytter display til block og visibility til hidden */
}

function reset () {
    magicEl.style.display = "block";
    magicEl.style.visibility = "visible";
    /* Bytter display til block og visibility til visible */
}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

let techEl = document.getElementById("tech");
/* lagrer en variabel for HTML elementet tech */

for (let i = 0; i < technologies.length; i++) {
        /* Lager en loop for antall elementer i technologies */
        let liEl = document.createElement("li");
        /* Lager et li element hver iterajon av loppen */
        liEl.innerHTML = technologies[i];
        /* Legger til tekst til li elementet */
        techEl.appendChild(liEl);   
        /* Legger li elementet til ul elementet fra HTML */
}