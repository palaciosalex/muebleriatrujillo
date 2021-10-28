const paginas=[
    {
        nombre:"Blog",
        enlace:"index.html",
        subpagina:[]
    },
    {
        nombre:"Inicio", 
        enlace:"#",
        subpagina:[
            {
            nombre: "Vision del Proyecto",
            enlace: "Inicio.html"
            },
            {
            nombre: "Identificar al Scrum Master",
            enlace: "identificarScrumMaster.html"
            },
            {
            nombre: "Identificar el Equipo Scrum",
            enlace: "identificarEquipoScrum.html"
            },
            {
            nombre: "Desarrollar Epicas",
            enlace: "DesarrollarEpicas.html"
            },
            {
                nombre: "Crear Backlog priorizado del producto",
                enlace: "backlogPriorizado.html"
            },
            {
            nombre: "Planificación",
            enlace: "planificacion.html"
            }
        ]
    },
    {
        nombre: "Planificación y estimación",
        enlace: "#",
        subpagina:[
            {
            nombre: "Crear historias de usuario",
            enlace: "crearhistorias.html"
            }
        ]
    }

];
var resultado="";
for(var i=0;i<paginas.length;i++){

    if(i==0){
        resultado+="<li><a href='"+paginas[i].enlace+"'>"+paginas[i].nombre+"</a></li>";
    }else{
        resultado+="<li><a href='"+paginas[i].enlace+"'>"+paginas[i].nombre+"</a><ul>";

        for(var j=0;j<paginas[i].subpagina.length;j++){
            resultado+="<li><a href='"+paginas[i].subpagina[j]['enlace']+"'>"+paginas[i].subpagina[j]['nombre']+"</a><li>";
        }
        resultado+="</ul></li>";
    }
    
}
document.getElementById("nav").innerHTML=resultado;


/*---------Carousel--------------------*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
/*---------------------------------------------*/