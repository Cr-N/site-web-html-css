const cardsContainer=document.querySelectorAll(".cards-list")[0];  ///Selectam container-ul de carduri
// Variabila pentru lista de proiecte din firebase
let projects = [];
// Selectam formularul
const searchForm = document.getElementById('searchForm');
// Selectam inputul din formular 
const searchInput = searchForm.querySelector('input');
// Selectam body-ul documentului
const body = document.body;
// Selectam span-ul cu id mode-toggle
const darkModeToggler = document.getElementById("mode-toggle");


//Adaugam eveniment de click la mode-toggle
darkModeToggler.addEventListener( 'click', function(){ 
// On click add/remove clasa dark la body
    body.classList.toggle('dark-mode');
    // console.log(body);
})

//Match browser color scheme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.toggle('dark-mode');
}


function generateCard(el) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.classList.add('card');

    const cardImg=document.createElement("img");
    cardImg.src = el.imagine;
    cardImg.alt = el.nume;
    div.append(cardImg);

    const cardContent = document.createElement('div');
    cardContent.classList.add("card-content");
    const title = document.createElement("h3");
    title.textContent = el.nume;
    cardContent.append(title);

    const descriere = document.createElement('p');
    descriere.textContent = el.decriere;
    cardContent.append(descriere);


    div.append(cardContent);

    const cardBtn = document.createElement('button');
    cardBtn.textContent = "Mai multe";
    //  On click, redirectionam adresa din browser catre proiect
    cardBtn.onclick = function() {
        location.href = el.link; 
    }
    div.append(cardBtn);

    

    li.append(div);
    cardsContainer.append(li);
}

// Functie care verifica valoarea din input si o compara cu numele proiectului


// returneaza cardu-l respectiv
function searchProjects (event) {
    event.preventDefault();

    // Salvam valoarea din input 
    const searchValue = searchInput.value;

    // Filtram lista de proiecte dupa numele proiectului 
    const found = projects.find(proiect => proiect.nume.toLowerCase() .includes(searchValue.toLowerCase()));
    
    if (!found || !searchValue ) {
        console.log('no match or no value');
        cardsContainer.innerHTML = '';
        projects.forEach(project => generateCard(project));
    }   else {
        console.log(found);
        cardsContainer.innerHTML = ''; 
        generateCard(found);
    }
 }
 
 searchForm.addEventListener('submit', searchProjects);

//  <button type="submit" <a href="mailto:no-one@snai1mai1.com?subject=look at this website&body=Hi,I found this website and thought you might like it http://www.geocities.com/wowhtml/"></a>>Send</button>
