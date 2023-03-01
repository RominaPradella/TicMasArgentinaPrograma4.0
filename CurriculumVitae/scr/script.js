let menuVisible = false;
//funcion que muestra u oculta el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    //oculta el menu una vez seleccionada una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false; 
}

//funcion para las animaciones de las habilidades 
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript"); 
        habilidades[1].classList.add("html-css");
        habilidades[2].classList.add("mysql");
        habilidades[3].classList.add("angular-bootstrap");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajoequipo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");       
    }
}

window.scroll = function(){
    efectoHabilidades();
}