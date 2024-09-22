let cantidad = document.getElementById('cantidad');
let boton = document.getElementById ( 'generar');
let contrasena = document.getElementById ('contrasena');

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generar(){
    
    let NumeroDigitado = parseInt (cantidad.value)
    console.log(NumeroDigitado)
    if( NumeroDigitado < 8){
        alert("la cantidad de caracteres tiene que ser mayor que 8");
    }
    
    let password = '';
    for(let i=0; i < NumeroDigitado; i++ ){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);


        password+=caracterAleatorio;
      
    }
    contrasena.value = password;
    // validar fuerza de contraseña 

    validarFortaleza (password);
}

function Borrar(){
    contrasena.value = ''; //Limpia el campo de la contraseña
    cantidad.value = ''; //Limpia el campo de cantidad
    document.getElementById ('mensaje-Fortaleza').textcontent = ''; // Limpia el mensaje de Fortaleza

}

function validarFortaleza(password) {
    const mensaje = document.getElementById('mensaje-fortaleza');

    // Verificar si contiene una mayúscula, minúscula, número y símbolo
    const contieneMayuscula = /[A-Z]/.test(password);
    const contieneMinuscula = /[a-z]/.test(password);
    const contieneNumero = /[0-9]/.test(password);
    const contieneSimbolo = /[!@#$%^&*()]/.test(password);

    // Comprobar si es fuerte o débil
    if (contieneMayuscula && contieneMinuscula && contieneNumero && contieneSimbolo) {
        mensaje.textContent = "La contraseña es fuerte.";
        mensaje.style.color = 'green';  // Color verde si es fuerte
    } else {
        mensaje.textContent = "La contraseña es débil. Debe contener al menos una letra mayúscula, una letra minúscula, un número y un símbolo.";
        mensaje.style.color = 'red';  // Color rojo si es débil
    }
}













