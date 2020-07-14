Next_Button = document.getElementById("next");
Previous_Button = document.getElementById("previous");
Previous_Button.style.display = "none";

Intro_Block = document.getElementById("intro");
Info_Block = document.getElementById("info");
Cb_Block = document.getElementById("cb");
Indice1_Block = document.getElementById("indice1");
Indice2_Block = document.getElementById("indice2");
Players_Block = document.getElementById("players");

function Previous_Action(){

    let Previous_Button = document.getElementById("previous");
    let Next_Button = document.getElementById("next");
    let Info_Block = document.getElementById("info");
    let Cb_Block = document.getElementById("cb");
    let Indice1_Block = document.getElementById("indice1");
    let Indice2_Block = document.getElementById("indice2");
    let Players_Block = document.getElementById("players");


    if(Info_Block.style.display == "block"){
        Previous_Button.style.display = "none";
        Info_Block.style.display = "none";
        Intro_Block.style.display = "block";
    }

    else if(Cb_Block.clientWidth > 0){
        Cb_Block.style.display = "none";
        Info_Block.style.display = "block";
    }

    else if(Indice1_Block.clientWidth > 0){
        Indice1_Block.style.display = "none";
        Cb_Block.style.display = "block";
    }

    else if(Indice2_Block.clientWidth > 0){
        Indice2_Block.style.display = "none";
        Indice1_Block.style.display = "block";
    }
    
    else if(Players_Block.clientWidth > 0){
        Players_Block.style.display = "none";
        Indice2_Block.style.display = "block";
        Next_Button.style.display = "block";
    }
    
}

function Next_Action(){

    let Next_Button = document.getElementById("next");
    let Previous_Button = document.getElementById("previous");
    let Intro_Block = document.getElementById("intro");
    let Info_Block = document.getElementById("info");
    let Cb_Block = document.getElementById("cb");
    let Indice1_Block = document.getElementById("indice1");
    let Indice2_Block = document.getElementById("indice2");

    
    if(Intro_Block.clientWidth > 0){
        console.log("coucou");
        Intro_Block.style.display = "none";
        Info_Block.style.display = "block";
        Previous_Button.style.display = "block";
    }

    else if(Info_Block.clientWidth > 0){
        Info_Block.style.display = "none";
        Cb_Block.style.display = "block";
    }

    else if(Cb_Block.clientWidth > 0){
        Cb_Block.style.display = "none";
        Indice1_Block.style.display = "block";
    }

    else if(Indice1_Block.clientWidth > 0){
        Indice1_Block.style.display = "none";
        Indice2_Block.style.display = "block";
    }

    else if(Indice2_Block.clientWidth > 0){
        Indice2_Block.style.display = "none";
        Next_Button.style.display = "none";
        Players_Block.style.display = "block";
	}
}