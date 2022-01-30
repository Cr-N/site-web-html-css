// Selectam elementele
const inputColor=document.getElementById('colorPicker');
const inputHeight=document.getElementById('input_height');
const inputWidth=document.getElementById('input_width');
const canvas=document.getElementById('pixel_canvas');
const submitBtn=document.getElementById('submit_Size');



//Functia care genereaza grid-ul in functie de input height si width

function makeGrid () {
    //Salvam valorile din input
    const inputHeightValue = inputHeight.value;
    const inputWidhtValue = inputWidth.value;

    // Verificam daca este introdusa o caloare mai mica sau egala cu 0, sau mai mare decat 50
    if  (inputHeightValue <= 0 || inputHeightValue >50 || inputWidhtValue <= 0 || inputWidhtValue > 50) {
        return;
    }

    // Adaugam butonul pentru clear
    const clearCanvasButton = document.createElement('button');
    clearCanvasButton.textContent = 'Clear';
    clearCanvasButton.id = 'clear_canvas';

    // Verificam daca exista deja un grid, il stergem si scoatem butonul 'Clear Canvas'
    if(canvas.children.length > 0) {
        while (canvas.lastElementChild) {
            canvas.removeChild(canvas.lastElementChild);
        }
        document.getElementById('clear_canvas').remove();
    }

    //  Adaugam grid-ul in tabel in functie de valorile de Width si Height
    // Pentru fiecare rand, adaugam cate o coloana(td)
    for (let row = 0; row < inputHeightValue; row ++) {
        // Adaugam cate un rand(tr)
        const tr = document.createElement('tr');


        for (let col = 0; col < inputWidhtValue; col++){
            // Adaugam cate o coloana (td)
            const td = document.createElement('td');
            tr.append(td);
            canvas.append(tr);
        }
    }

    // Selectam toate celulele din grid
    const allCells =document.getElementsByTagName('td');
    
    
    for (let cell = 0; cell < allCells.length; cell++) {
        allCells[cell].addEventListener('click', function(){
            const inputColorValue = inputColor.value;
            // Setam background-ul celulei la valoarea din input
            allCells[cell].style.background = inputColorValue;
        });

        // Event pt click dreapta
        allCells[cell].addEventListener('contextmenu' , function(event){
            event.preventDefault();
            allCells[cell].style.background = '';
        });
    }

    // Adaugam butonul pentru clear canvas
    document.body.append(clearCanvasButton);

    clearCanvasButton.addEventListener('click',function(){
        for (let cell = 0; cell  < allCells.length; cell++){
            allCells[cell].style.background = '';
        }
    });
}

submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    makeGrid();
});


