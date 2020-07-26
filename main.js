Next_Button = document.getElementById("next");
Previous_Button = document.getElementById("previous");
Previous_Button.style.display = "none";

Intro_Block = document.getElementById("intro");
Info_Block = document.getElementById("info");
Indices_Block = document.getElementById("indices");
Players_Block = document.getElementById("players");

function Previous_Action(){

    let Previous_Button = document.getElementById("previous");
    let Next_Button = document.getElementById("next");
    let Info_Block = document.getElementById("info");
    let Indices_Block = document.getElementById("indices");
    let Players_Block = document.getElementById("players");


    if(Info_Block.style.display == "block"){
        Previous_Button.style.display = "none";
        Info_Block.style.display = "none";
        Intro_Block.style.display = "block";
        Next_Button.textContent = "Commencer l'inscription !";
    }

    else if(Indices_Block.clientWidth > 0){
        Indices_Block.style.display = "none";
        Info_Block.style.display = "block";
    }
    
    else if(Players_Block.clientWidth > 0){
        Players_Block.style.display = "none";
        Indices_Block.style.display = "block";
        Next_Button.style.display = "block";
    }
    
}

function Next_Action(){

    let Next_Button = document.getElementById("next");
    let Previous_Button = document.getElementById("previous");
    let Intro_Block = document.getElementById("intro");
    let Info_Block = document.getElementById("info");
    let Indices_Block = document.getElementById("indices");

    
    if(Intro_Block.clientWidth > 0){
        Intro_Block.style.display = "none";
        Info_Block.style.display = "block";
        Previous_Button.style.display = "block";
        Next_Button.textContent = ">";
    }

    else if(Info_Block.clientWidth > 0){
        Info_Block.style.display = "none";
        Indices_Block.style.display = "block";
    }

    else if(Indices_Block.clientWidth > 0){
        Indices_Block.style.display = "none";
        Players_Block.style.display = "block";
        Next_Button.style.display = "none";
    }
}
