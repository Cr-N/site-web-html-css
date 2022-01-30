// Variabile 
var variabilaMea;  //Denumirea veche

let variabilaMea2 =undefined //Nu e constanta 
const variabilaMeaConstanta = null // Constanta

let unu, doi, trei;

let text1 = 'textul variabilei';
let number = 123;

let booleanVariabile = true; // boolean 


let array = [ ];
let obiect =[ ];


let text2 = 'inca un text';


let stringLiteral = `${text1} ${text2}`; //intre ${} poate fi rulat orice code JS
let stringNormal = text1 +  " " +text2; //contacteaza(imbina) 2 variabile

//Functii
function AddTwo (a,b) {
    console.log(a+b);
}

// if 


if (true) {
    console.log('if reached')
} else {
    console.log('not reached')
}

//else if

if(false) {
    console.log('if');
} else if (true){
    console.log("else if");
} else {
    console.log("else");
}
// Operatori logici
//Egalitatea 1 == 1
//Inegalitatea 1 != 2

//AND )&&
if (1 <3  && 3==1){
    //
}

// OR ||
if (1<3 || 3 == 1){
    //
}

//  NOT !
if (1!=3){

}

if (!booleanVariabile){
    //if boleanVariabile = false
}

// Secunda intr-o ora
function secundeInOra(ora) {
    const minInOra =60;
    const secInMin =60;
    const totalMinute = ora * minInOra; // Minute in numarul de ore specificat
    return totalMinute * secInMin; //Secunde in numarul de ore specificat
}

function varstaInSecunde(ani){
    const zileInAn = 365;
    const secInAn = secundeInOra(24) * zileInAn;
    return ani * secInAn;
}

console.log(varstaInSecunde(1));



//DOM Selectors
const fereastraBrowser = window;
const documentPagina = window.document;

console.log(documentPagina);


//Selectare dupa ID-ul Elementului

const title = document.getElementById("titlu");
console.log(title)

// Selectare dupa TAG
const paragrafe = document.getElementsByTagName("p")[0];
console.log(paragrafe);



// Selectare dupa clasa

const paragraf = document.getElementsByClassName("paragraf");
console.log(paragraf);


// Selector tip CSS

const paragraf1 = document.querySelector('.paragraf');
console.log(paragraf1);


// Selectam Butonul cu Id-ul calcVarsta
const Buton = document.querySelector('#calcVarsta');
//Adaugam un eveniment pentru click butonului
Buton.addEventListener('click', function(){
    //Selectam valoarea introdusa in input
    const inputValue = document.querySelector("#varsta").value;
    // Definim o variabila pentru raspuns
    let raspuns;

    //Verificam daca exista o valoare in input si daca e mai mare sau egala cu 0
    if (!inputValue || inputValue <= 0){
            // Generam un raspuns in care valoarea trebuie sa fie valida
            raspuns = "Trebuie sa introduci un numar valid!";
    } else{
            // Formulam un raspuns final
            raspuns = varstaInSecunde(inputValue) + " secunde";
    }
    //Afisam raspunsul in pagina


    window.alert(raspuns);
});


// Adaugare paragraf nou 
function addNewParagraf(){
    //Am creat un nou element P
    const newParagraf =document.createElement("p");
    //Adaugam  continut in Paragraf
    newParagraf.textContent = "Paragraf nou";
    //Selectez container-ul pt paragraf nou
    const newParagrafContainer = document.querySelector('#paragraf-container');
    //Adaug paragraful in container
    newParagrafContainer.append(newParagraf)

}