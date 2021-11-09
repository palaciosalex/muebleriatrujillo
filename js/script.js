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
            },
            {
            nombre: "Estimar Historias de Usuario",
            enlace: "estimarHistoriasU.html"
            },
            {
            nombre: "Comprometer Historias de Usuario",
            enlace: "comprometerHistoriasU.html"
            },
            {
            nombre: "Identificar Tareas",
            enlace: "identificarTareas.html"
            },
            {
            nombre: "Estimar Tareas",
            enlace: "estimarTareas.html"
            },
            {
            nombre: "Crear el Sprint Backlog",
            enlace: "SprintBacklog.html"
            }
        ]
    },
    {
        nombre:"Implementacion",
        enlace: "#",
        subpagina:[
            
            /* Implementacion*/
            {
            nombre: "Crear Entregables",
            enlace: "crearEntregables.html"
            },
            {
            nombre: "Realizar Daily Standup",
            enlace: "realizarDailyStandup.html"
            },
            {
            nombre: "Refinar el backlog priorizado del producto",
            enlace: "refinarBacklog.html"
            }                
        ]
    },
    {
        nombre:"Revision y Retrospectiva",
        enlace: "#",
        subpagina:[
            
            /* Revision retrospectiva*/
            {
            nombre: "Demostrar y Validar Sprint",
            enlace: "demostrarVSprint.html"
            },
            {
            nombre: "Retrospectiva del Sprint",
            enlace: "retrospectivaSprint.html"
            }                
        ]
    },
    {
        nombre:"Lanzamiento",
        enlace: "#",
        subpagina:[
            
            /* lanzamiento*/
            {
            nombre: "Enviar Entregable",
            enlace: "enviarEntregable.html"
            }/*,
            {
            nombre: "Retrospectiva del Proyecto",
            enlace: "retrospectivaProyecto.html"
            }  */              
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