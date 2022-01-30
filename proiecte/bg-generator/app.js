const css = document.querySelector("h3");
const color1 = document.querySelector(".color1") // Selectam Primul Input
const color2 = document.querySelector(".color2") // Selectam al doilea input
const body = document.querySelector("#gradient") // Selectam body-ul
const randomButton = document.querySelector("#randomizer") // Selectam butonul cu ID-ul Randomizer




// linear-gradient(to right, rgb(100,100,100), rgb(100,100,100));

// Schimbam background-ul in functie de culorile selectate
function setGradient(firstColor, secondColor) {
    // Selectam Proprietatea de background a elementului body
    // Setam background-ul selectat sa fie egla cu linear-gradient-ul din culorile alese 
    body.style.background =` linear-gradient(to right, ${firstColor} , ${secondColor})`;
    // Adaugam Background-ul creat in elementul h3 pt a fi afisat in pagina
    css.textContent = body.style.background + ";"
}
    
// Schimba fundalul in functie de valorile din input
function setGradientOnInput(){
    // Folosim functiia de setGradient() cu parametrii din input
    setGradient(color1.value , color2.value);
    // console.log(color1.value , color2.value);
}


//Returneaza un nr random intre 0 si 250
function randomizer(){
    // Generam numarul pentru a il folosi in proprietatea background
    // Math.floor() - functie care returneaza un numar mai mic sau egal cu numarul dat
    // console.log(Math.floor(5.05))
    // Math.random()- returneaza un numar intre 0( inclusiv) si 1 
    // Ex : console.log(Math.random())
    const randomNumber = Math.floor(Math.random() * Math.floor(250));
    return randomNumber;
}


// Returneaza un string pentru valoarea rgb aleatoare
function randomColor(){
    const randomColor = "rgb(" + randomizer() + "," + randomizer() + "," + randomizer() + ")";
    return randomColor;
}

// Schimba fundalul in functie de valori random
function setRandomGradient() { 
    setGradient(randomColor(), randomColor());
}


// GRADIENT COOL : LINEAR-GRADIENT(TO RIGHT, RGB(177, 81, 77), RGB(5, 47, 71));



color1.addEventListener("input", setGradientOnInput);
color2.addEventListener("input", setGradientOnInput);
randomButton.addEventListener('click', setRandomGradient);

setGradientOnInput();




// Neumorphism- cool site