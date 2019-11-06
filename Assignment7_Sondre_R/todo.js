/* Henter ut elementer fra DOM */
const buttonEl = document.getElementById("button");
const ulEl = document.getElementById("oppgaver");
const doneEl = document.getElementById("done");
const totalEl = document.getElementById("total");

/* Lager en counter for gjort og totale gjøremål, og lager en tom array for */
let doneCounter = 0;
let totalCounter = 0;
let tasks = [];


function addTask() {
    /* Legger til en counter for hver gang koden kjører som vises i span total */
    totalCounter += 1;
    totalEl.innerHTML = totalCounter;

    /* Skaffer inputtext verdien fra input og lager et li, input og label element */
    let liEl = document.createElement("li");    
    let inputText = document.getElementById("inputfield").value;
    let inputEl = document.createElement("input");
    let labelEl = document.createElement("label");

    /* Lager en checkbox, gir den id og class */
    inputEl.type = "checkbox";
    inputEl.id = inputText;
    inputEl.class = "cb"

    /* Legger til for verdi og en egen id for labelen */
    labelEl.htmlFor = inputEl.id;
    labelEl.id = inputEl.id+"label"

    /* Legger til dato og text til tasks */
    let element = {};
    let now = new Date();
    element.text = inputText;
    element.date = now
    tasks.push(element);

    /* Legger til text til label, legger til label og checkboxen til listen*/
    labelEl.appendChild(document.createTextNode(inputText));
    liEl.appendChild(inputEl);
    liEl.appendChild(labelEl);
    /* Adds our list element to the top of the list*/
    ulEl.insertBefore(liEl, ulEl.firstChild);
}

/* Legger til en eventlistener på hele listen  som bruker event for å finne id*/ 
document.querySelector('ul').addEventListener('click', function(event) {
        /* Finner iden til label, her var det viktig at den er forskjellig fra iden til checkboxen */
        let label = document.getElementById(event.target.id+"label");

        /* Hvis checkboxen blir checked, så blir det lagt til linethorugh på labelen og +1 på vår counter */
        if(document.getElementById(event.target.id).checked){
            label.style.textDecoration='line-through';
            doneCounter += 1;
        }
        /* Hvis den ikke blir checked skjer det motsatte, linjen fjernes og -1 på counter */
        else{
            label.style.textDecoration='none';
            doneCounter -= 1;
        }
        /* oppdaterer span done */
        doneEl.innerHTML = doneCounter;
  });

/* Lytter på vår knapp når vi legger til en task */
buttonEl.addEventListener("click", addTask)

