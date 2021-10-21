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