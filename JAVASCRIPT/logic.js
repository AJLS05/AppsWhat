var d = new Date();
var horita = d.getHours();
var minutito=d.getMinutes();
var horacompleta=horita+":"+minutito;
console.log(horacompleta);
console.log(minutito);
console.log(horita);


var fecha=new Date().toUTCString(); //FORMA LARGA
var fechaL=new Date().toISOString();//FORMA CORTA
console.log(fecha);

//MI CODIGO
var mensajes = [];
document.getElementById('enviar').onclick  =function(){
  var contenidodelatext=document.getElementById('mensaje').value;

  console.log(contenidodelatext);
  var mensaje = {};
mensaje.comentario = document.getElementById('mensaje').value;
  mensajes.push(mensaje);
  var informacion = "";

//  window.alert("NUEVO COMENTARIO AGREGADO");
for(var i = 0;i<mensajes.length; i++){
  //informacion += "<center> <table id='tabla"+i+" class='mensaje'><tr><button type='button' class='btn btn-link botoncito' data-toggle='collapse' data-target='#"+i+"'><span class='glyphicon glyphicon-menu-down'></span></button>"+"<div id='"+i+"' class='collapse'>"
  //+"<button class='btn btn-link'><span class='glyphicon glyphicon-off' id='ocultar"+i+"'></span>Ocultar</button>"
  //+"<button class='btn btn-link'><span class='glyphicon glyphicon-remove'></span>Eliminar</button>"+"<button class='btn btn-link'><span class='glyphicon glyphicon-pushpin'></span>Marcar</button></div></td></tr>"+"<tr><td id='tdcomentario'>"+mensajes[i].comentario+"</td></tr> </table></center><br><br>";
  informacion +="<br><div id=\"mensaje"+i+"\" class=\"mensajito\"><p>"+mensajes[i].comentario+"<i class=\"close material-icons\">close</i></p>"+
              "<p>"+horacompleta+"<i class=\"close material-icons\">done_all</i></p></div><br><br>"

console.log(informacion);

}
  document.getElementById('muestradecomentar').innerHTML = informacion;
  document.getElementById('mensaje').value = "";

}







///CODIFICACION DE LOS SIDENAVS SACADO DE W3
function w3_open() {
document.getElementById("mySidenav").style.width = "25%";
    document.getElementById("mySidenav").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidenav").style.display = "none";
}
function openLeftMenu() {
    document.getElementById("leftMenu").style.display = "block";
}

function closeLeftMenu() {
    document.getElementById("leftMenu").style.display = "none";
}

function opencontactos() {
    document.getElementById("contactos").style.display = "block";
}

function closecontactos() {
    document.getElementById("contactos").style.display = "none";
}



arrcontactos=[];

document.getElementById('guardarcontac').onclick=function(){
var imagen=""
  var contactonuevo={};
  var arreglomensaje=[];
    var mostrarpanel="";
  contactonuevo.numero=document.getElementById('numerodetelefono').value;
    contactonuevo.nombre=document.getElementById('nombredelcontacto').value;
  contactonuevo.estado=document.getElementById('Estadodelcontacto').value;
  contactonuevo.mensajes=arreglomensaje;

   if(document.getElementById('masculino').checked){
     genero = "masculino";

   }else {
     genero = "femenino";

   }
   contactonuevo.genero=genero;
  arrcontactos.push(contactonuevo);

for(var i = 0;i<arrcontactos.length; i++){
  console.log(arrcontactos[i]);
  if(arrcontactos[i].genero=="masculino"){
       imagen="imagenes/masculino.jpg";
  }else{
        imagen= "imagenes/femenina.png";
  }
    mostrarpanel+="<table class='contacto' class='card-action' onclick='mostrar"+i+"()'><tr><td> <img src="+imagen+" style='float:left' class='imagendelcontacto'> "+arrcontactos[i].nombre+"</td></tr>"+
    "<tr><td>"+arrcontactos[i].estado+"</td></tr></table>"+
      "<script> function mostrar"+i+"(){"+
  "arreglotemp="+arrcontactos[i].mensajes+
    "nombretemp="+arrcontactos[i].nombre+"console.log(arreglotemp);console.log(nombretemp);console.log();}</script>";
    console.log("iteracion N"+i+"Contenido:"+arrcontactos[i].mensajes+arrcontactos[i]);
  }
  document.getElementById('muestrachats').innerHTML=mostrarpanel;
document.getElementById('muestrachats2').innerHTML=mostrarpanel;
}


document.getElementById('emoji4').onclick=function(){
var contenidodelatext=document.getElementById('mensaje').value;
contenidodelatext+="😀";
document.getElementById('mensaje').value=contenidodelatext;
console.log(contenidodelatext);
console.log("agregando emoji");

}
