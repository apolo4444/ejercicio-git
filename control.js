const usuario=document.querySelector("form #nombre");
const clave=document.querySelector("form #password");
const btn=document.querySelector("form button");
const field=document.querySelector("form fieldset");
	field.style.backgroundColor= "pink";
	field.style.display="inline-block";
	field.style.margin="5%";
	field.style.padding="25px";
	const titulo=document.querySelector("form fieldset legend");
	titulo.style.backgroundColor= "cyan";
btn.addEventListener('click', function(event) {
   event.preventDefault();
   validarDatos();
});

function validarDatos(){
	var email=usuario.value;
	var clave2=clave.value;
  if(email!=null && clave2!=null){
 
	
 let mensaje = document.querySelector("p")
 
   if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)){
  mensaje.className = "correcto"
    return mensaje.textContent = "¡Valido!"
  } else {
    mensaje.className = "error"
    return mensaje.textContent = "No cumple"
  }
	
  }else{
    console.log("no se cargaron bien los datos");
  }
}
