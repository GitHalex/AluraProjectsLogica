var titulo = document.querySelector("h1");
// Verificamos si 'titulo' no es null antes de usarlo
if (titulo) {
    titulo.innerHTML = "Hora del Desafío";
}
else {
    console.error("El elemento 'h1' no fue encontrado.");
}
var presionado = function () { return console.log("El boton fue clicado"); };
var ciudad = "";
var inputCiudad = prompt("Ingrese una ciudad:");
if (inputCiudad !== null) {
    ciudad = inputCiudad;
}
var ciudadInput = function () { return alert("Estuve en ".concat(ciudad, " y me acorde de ti")); };
var loveAlert = function () { return alert("Yo amo JS"); };
// Función para solicitar un número al usuario y validarlo
var solicitarNumero = function (mensaje) {
    var input = prompt(mensaje);
    if (input === null || isNaN(Number(input))) {
        throw new Error("Entrada inválida, se esperaba un número.");
    }
    return Number(input);
};
// Función para sumar dos números
var sumaNumeros = function () {
    try {
        var numero1 = solicitarNumero("Dame un número:");
        var numero2 = solicitarNumero("Dame otro número:");
        alert(numero1 + numero2);
    }
    catch (error) {
        console.error(error.message);
        // O cualquier valor por defecto adecuado en caso de error
    }
};
