/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

function FineGioco(){

    const finalblock = document.querySelector("div.exit")

    Reset();

    for(const box of boxes){
        box.addEventListener('click', seleziona_immagine);
    }
    
    finalblock.classList.add("hidden");

 }


 function Vincitore(vincitore){

    const titolo = document.querySelector("h1.TextExit");

    titolo.textContent = RESULTS_MAP[vincitore.dataset.choiceId].title;

    const testo = document.querySelector("div.TextExit");

    testo.textContent = RESULTS_MAP[vincitore.dataset.choiceId].contents;

    const finalblock = document.querySelector("div.exit")
    
    finalblock.classList.remove("hidden");
    
}




function ExitPoll(chosen){

    if(chosen[1].dataset.choiceId === chosen[2].dataset.choiceId){
            return Vincitore(chosen[1]);
        }
    
    return Vincitore(chosen[0])

}



function CheckEnd(){

    const chosen = document.querySelectorAll(".checked");

    if(chosen.length === 3){
        for(const box of boxes){
            box.removeEventListener('click', seleziona_immagine);
        }

        ExitPoll(chosen);
    }
}

function Reset(){

    const notchosen = document.querySelectorAll(".unchecked");
    const chosen = document.querySelectorAll(".checked");

        for(const chosenOne of chosen){
            chosenOne.classList.remove("checked");
            chosenOne.querySelector(".checkbox").src= "images/unchecked.png";
        }

        for(const choice of notchosen){

        choice.classList.remove("unchecked");

        }
}

function ResettaSezione(section){

    const notchosen = section.querySelectorAll(".unchecked");
    const chosen = section.querySelector(".checked");

    if(chosen){
        chosen.classList.remove("checked");
        chosen.querySelector(".checkbox").src= "images/unchecked.png";
    }

        for(const choice of notchosen){

        choice.classList.remove("unchecked");

        }
}

function seleziona_immagine(event){

    ResettaSezione(event.currentTarget.parentNode);
    const checkbox = event.currentTarget.querySelector(".checkbox");
    checkbox.src = "images/checked.png";
    event.currentTarget.classList.add("checked");

    const listabox = event.currentTarget.parentNode.querySelectorAll(".choice-grid div");

    for(const box of listabox){

        if(box !== event.currentTarget){
            box.classList.add("unchecked");
        }

    }

    CheckEnd();
}

const boxes = document.querySelectorAll(".choice-grid div");
for(const box of boxes){
    box.addEventListener('click', seleziona_immagine);
}

document.querySelector("button").addEventListener('click',FineGioco);